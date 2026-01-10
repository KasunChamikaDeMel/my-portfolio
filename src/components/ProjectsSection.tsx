import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Figma, ArrowRight, Layers } from 'lucide-react';
import MagneticButton from './background/MagneticButton';

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: 'Construction Co.',
      category: 'Web / Design',
      image: '/images/2.png',
      description: 'A robust web presence for Shantharathna Constructions, featuring project galleries and service detailed breakdowns.',
      technologies: ['React', 'Next.js', 'Tailwind', 'Typescript'],
      liveLink: 'https://shantharathnaconstructions.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/shantharathna-constructions',
      figmaLink: 'https://www.figma.com/design/0toHgnUa7e5h2tmvLCYI9W',
    },
    {
      title: 'Travel Blogs',
      category: 'Content Platform',
      image: '/images/5.png',
      description: 'Immersive travel blog platform highlighting Sri Lankan destinations with rich media integration.',
      technologies: ['React', 'Next.js', 'Tailwind', 'Typescript'],
      liveLink: 'https://srilanka-travel-blogs.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/srilanka-travel-blogs',
      figmaLink: '',
    },
    {
      title: 'Moodmate',
      category: 'Health Tech',
      image: '/images/6.png',
      description: 'AI-powered mental health companion app for tracking mood patterns and providing real-time support.',
      technologies: ['Python', 'ML', 'Flask', 'Electron'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/Moodmate',
      figmaLink: 'https://www.figma.com/design/QmZ9sfsPXsxYZgQRv9pNpp',
    },
    {
      title: 'CEO Portfolio',
      category: 'Personal Branding',
      image: '/images/1.png',
      description: 'High-end portfolio for Mr. Manura Aluthge, focusing on executive presence and minimalism.',
      technologies: ['React', 'Next.js', 'Tailwind', 'Typescript'],
      liveLink: 'https://manuraaluthge.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/portfolio-9',
      figmaLink: '',
    },
    {
      title: 'Personal Portfolio',
      category: 'Creative Dev',
      image: '/images/4.png',
      description: 'My digital garden. A playground for experimental UI keyframes and React performance optimization.',
      technologies: ['React', 'Framer Motion', 'Vite', 'TS'],
      liveLink: 'https://kasunchamikademel.vercel.app',
      githubLink: 'https://github.com/KasunChamikaDeMel/my-portfolio',
      figmaLink: '',
    },
    {
      title: 'NIC Decoder',
      category: 'Utility App',
      image: '/images/3.png',
      description: 'Mobile utility to instantly decode Sri Lankan National Identity Card numbers into birth dates and gender.',
      technologies: ['Flutter', 'Dart', 'C++'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/nic_decorder_app0',
      figmaLink: 'https://www.figma.com/design/fVKqwgu45U0Dd1R2LJpch9',
    },
    {
      title: 'Intrusion Detection',
      category: 'Security / AI',
      image: '/images/7.png',
      description: 'Machine learning system designed to detect network anomalies and potential security breaches in real-time.',
      technologies: ['Python', 'Scikit-Learn', 'Flask'],
      liveLink: '#',
      githubLink: 'https://github.com/KasunChamikaDeMel/Network-Intrusion-System-1',
      figmaLink: '',
    }
  ];

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="relative py-32 container mx-auto px-6 min-h-screen flex flex-col justify-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-slate-950">Project</span> <span className="gradient-text">Deployment</span>
        </h2>
        <p className="text-slate-700 font-medium">Select a module to initiate holographic review.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px] lg:h-[600px]">

        {/* LEFT COLUMN: The Holographic Stage (Active Project) */}
        <div className="lg:col-span-8 relative z-10 perspective-1000">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
              <div className="w-full h-full bg-primary-950/25 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden relative group shadow-xl min-h-[400px]">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/60 to-transparent pointer-events-none" />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">

                  {/* Decoration Line */}
                  <div className="w-20 h-1 bg-primary-500 mb-6 rounded-full" />

                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">
                    {activeProject.title}
                  </h3>

                  <p className="text-lg text-slate-100 max-w-xl mb-8 leading-relaxed font-medium drop-shadow-sm">
                    {activeProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {activeProject.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-white font-mono font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 relative z-30 pointer-events-auto">
                    {activeProject.liveLink !== '#' && (
                      <MagneticButton className="relative z-40">
                        <a
                          href={activeProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-500/30 cursor-pointer pointer-events-auto block"
                        >
                          <ExternalLink size={20} />
                          Launch Preview
                        </a>
                      </MagneticButton>
                    )}

                    <MagneticButton className="relative z-40">
                      <a
                        href={activeProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/25 backdrop-blur-md text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-sm hover:border-primary-400 cursor-pointer pointer-events-auto block"
                      >
                        <Github size={20} />
                        Source Code
                      </a>
                    </MagneticButton>

                    {activeProject.figmaLink && (
                      <MagneticButton className="relative z-40">
                        <a
                          href={activeProject.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-purple-100/20 hover:bg-purple-200/30 backdrop-blur-md text-purple-700 rounded-xl font-bold border border-purple-300 flex items-center gap-2 transition-all shadow-sm cursor-pointer pointer-events-auto block"
                        >
                          <Figma size={20} />
                          Design File
                        </a>
                      </MagneticButton>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: The Data Dock (List) */}
        <div className="lg:col-span-4 h-[300px] lg:h-full overflow-y-auto pr-2 custom-scrollbar space-y-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveIndex(index)}
              className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 border relative overflow-hidden ${activeIndex === index
                ? 'bg-black/10 border-primary-500 shadow-lg shadow-primary-500/10'
                : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-black/10'
                }`}
            >
              {/* Active Indicator Bar */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeBar"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500"
                />
              )}

              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-bold mb-1 transition-colors ${activeIndex === index ? 'text-primary-600' : 'text-slate-800 group-hover:text-black'}`}>
                    {project.title}
                  </h4>
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-wider font-medium">
                    {project.category}
                  </span>
                </div>

                <div className={`p-2 rounded-lg transition-colors ${activeIndex === index ? 'bg-primary-500/25 text-primary-700' : 'bg-black/5 text-slate-600'}`}>
                  {activeIndex === index ? <ArrowRight size={16} /> : <Layers size={16} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
