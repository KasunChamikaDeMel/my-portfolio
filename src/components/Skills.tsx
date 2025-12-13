import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Code, Layout, Server, Database, PenTool, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const baseX = useMotionValue(0);
  const scrollRef = useRef(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React.js', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'PHP', 'Java', 'Python', 'RESTful APIs', 'MVC Architecture'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Design',
      icon: PenTool,
      skills: ['UI/UX Design', 'Figma', 'Canva', 'Adobe Photoshop', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'OOP', 'Data Structures', 'Dart (Flutter)'],
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      skills: ['GitHub', 'Git', 'VS Code', 'Docker', 'CI/CD', 'AWS', 'Agile', 'JIRA', 'Debugging', 'Testing'],
    },
  ];

  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...skillCategories, ...skillCategories, ...skillCategories];
  const cardWidth = 424; // 400px width + 24px gap
  const totalWidth = skillCategories.length * cardWidth;

  // Auto-scroll animation
  useAnimationFrame((_t, delta) => {
    if (!isDragging && !isPaused) {
      scrollRef.current -= delta * 0.05; // Scroll speed
      if (scrollRef.current <= -totalWidth) {
        scrollRef.current = 0;
      }
      baseX.set(scrollRef.current);
    }
  });

  const handleDragEnd = (_event: any, _info: any) => {
    setIsDragging(false);
    scrollRef.current = baseX.get();
  };

  const handleManualScroll = (direction: string) => {
    const scrollAmount = cardWidth * 1.5;
    if (direction === 'left') {
      scrollRef.current += scrollAmount;
    } else {
      scrollRef.current -= scrollAmount;
    }
    
    // Wrap around
    if (scrollRef.current > 0) {
      scrollRef.current = -totalWidth + scrollRef.current;
    } else if (scrollRef.current <= -totalWidth) {
      scrollRef.current = 0;
    }
    
    baseX.set(scrollRef.current);
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/90 hover:bg-gray-700/90 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>
          
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/90 hover:bg-gray-700/90 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling carousel */}
          <div 
            className="overflow-hidden py-8 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              style={{ x: baseX }}
              drag="x"
              dragConstraints={{ left: -totalWidth, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              dragElastic={0.1}
            >
              {duplicatedCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={`${category.title}-${index}`}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group flex-shrink-0 w-[400px] bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={`${skill}-${skillIndex}`}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-gray-800/50 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 rounded-lg text-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;