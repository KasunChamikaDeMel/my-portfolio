import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Figma} from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const baseX = useMotionValue(0);
  const scrollRef = useRef(0);

  const projects = [
    {
      title: 'Construction Company Website',
      category: ['web', 'design'],
      image: '/images/2.png',
      description: 'Website for Shantharathna Constructions (Pvt) Ltd, showcasing their projects and services.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
      liveLink: 'https://shantharathnaconstructions.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/shantharathna-constructions',
      figmaLink: 'https://www.figma.com/design/0toHgnUa7e5h2tmvLCYI9W/Shantharathna-Construction?node-id=0-1&p=f&t=E1dozlKZnTNgwKOK-0',
    },
    {
      title: 'Sri Lankan Travel Blogs',
      category: ['web', 'design'],
      image: '/images/5.png',
      description: 'Website for Sri Lankan Travel Blogs, featuring popular destinations and travel tips.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
      liveLink: 'https://srilanka-travel-blogs.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/srilanka-travel-blogs',
      figmaLink: '',
    },
    {
      title: 'Moodmate',
      category: ['app', 'design'],
      image: '/images/6.png',
      description: 'A mental health app designed to track mood and provide real-time support.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Electron.js'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/Moodmate',
      figmaLink: 'https://www.figma.com/design/QmZ9sfsPXsxYZgQRv9pNpp/Moodmate-wireframe?node-id=0-1&p=f&t=bFkMfwe7Wm1pgf1C-0',
    },
    {
      title: 'Portfolio Website',
      category: 'web',
      image: '/images/1.png',
      description: 'A portfolio website for Mr. Manura Aluthge, CEO of Sun and Moon (Pvt) Ltd.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
      liveLink: 'https://manuraaluthge.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/portfolio-9',
    },
    {
      title: 'My Portfolio',
      category: 'web',
      image: '/images/4.png',
      description: 'My personal portfolio website, showcasing my skills, projects, and experiences.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer-Motion'],
      liveLink: 'https://kasunchamikademel.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/my-portfolio',
    },
    {
      title: 'NIC Decoder App',
      category: 'app',
      image: '/images/3.png',
      description: 'A mobile app to decode National Identity Cards (NIC) in Sri Lanka.',
      technologies: ['C++, dart', 'Flutter'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/nic_decorder_app0',
    },
    {
      title: 'Network Intrusion Detection System',
      category: 'app',
      image: '/images/7.png',
      description: 'A system to detect and prevent unauthorized access to computer networks.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/Network-Intrusion-System-1',
    },
    
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => {
        const categories = Array.isArray(p.category) ? p.category : [p.category];
        return categories.includes(filter);
      });

  const duplicatedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];
  const cardWidth = 432;
  const totalWidth = filteredProjects.length * cardWidth;

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web Development' },
    { value: 'app', label: 'App Development' },
    { value: 'design', label: 'Design' },
  ];

  useAnimationFrame((_, delta) => {
    if (!isDragging && !isPaused) {
      scrollRef.current -= delta * 0.05;
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

  const handleManualScroll = (direction: 'left' | 'right') => {
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

  // Reset scroll position when filter changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    scrollRef.current = 0;
    baseX.set(0);
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, projects, and design explorations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === f.value
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 text-gray-300'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
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
              className="flex gap-8"
              style={{ x: baseX }}
              drag="x"
              dragConstraints={{ left: -totalWidth, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              dragElastic={0.1}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group flex-shrink-0 w-[400px] bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="relative h-48 bg-gray-800 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                        <span className="text-6xl font-bold text-blue-500/50">{project.title[0]}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      {project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="text-sm font-medium">Source</span>
                      </a>
                      <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                        >
                            <Figma className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                            <span className="text-sm font-medium">Design</span>
                        </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;