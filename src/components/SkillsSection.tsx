import { motion } from 'framer-motion';
import {
  Code, Database, Server, Layout, Terminal, Globe, Cpu,
  Atom, FileJson, Coffee, Palette, Zap, Share2, Brain, Github, Box,
  Triangle, Cloud, Send
} from 'lucide-react';
import FloatingElement from './background/FloatingElement';

const SkillsSection = () => {
  const skills = [
    { name: 'Next.js', icon: Globe, color: 'text-slate-900' },
    { name: 'React.js', icon: Atom, color: 'text-blue-500' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FileJson, color: 'text-yellow-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-600' },
    { name: 'Python', icon: Terminal, color: 'text-yellow-600' },
    { name: 'Java', icon: Coffee, color: 'text-red-600' },
    { name: 'C', icon: Cpu, color: 'text-slate-600' },
    { name: 'C++', icon: Cpu, color: 'text-blue-700' },
    { name: 'HTML', icon: Layout, color: 'text-orange-600' },
    { name: 'CSS', icon: Palette, color: 'text-blue-400' },
    { name: 'TailwindCSS', icon: Zap, color: 'text-sky-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'MySQL', icon: Database, color: 'text-blue-800' },
    { name: 'REST API', icon: Share2, color: 'text-indigo-500' },
    { name: 'Machine Learning', icon: Brain, color: 'text-purple-600' },
    { name: 'Git / Github', icon: Github, color: 'text-slate-900' },
    { name: 'Docker', icon: Box, color: 'text-blue-500' },
    { name: 'Vercel', icon: Triangle, color: 'text-slate-900' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Postman', icon: Send, color: 'text-orange-600' },
    { name: 'WordPress', icon: Globe, color: 'text-blue-500' },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden min-h-screen flex flex-col items-center justify-center">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FloatingElement duration={4} yOffset={5}>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-slate-900">Technical</span> <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">
              A comprehensive modular breakdown of my multi-layered technical stack.
            </p>
          </FloatingElement>
        </div>

        {/* The Gyroscope Container - Main Visual Animation */}
        <div className="relative w-full max-w-[500px] aspect-square mx-auto perspective-1000 flex items-center justify-center mb-16">

          {/* Central Core */}
          <FloatingElement duration={6} yOffset={10} className="relative z-20">
            <div className="w-24 h-24 bg-transparent backdrop-blur-xl rounded-full border-4 border-slate-400 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <Cpu size={36} className="text-blue-600 animate-pulse" />
            </div>
          </FloatingElement>

          {/* Ring 1 (Inner) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotateX: 360, rotateY: 180, rotateZ: 45 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[200px] h-[200px] border-2 border-primary-500/50 rounded-full absolute preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-transparent rounded-full border-2 border-blue-600 flex items-center justify-center">
                <Layout size={12} className="text-blue-600" />
              </div>
            </motion.div>
          </div>

          {/* Ring 2 (Middle) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotateX: 360, rotateY: -180, rotateZ: -45 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-[320px] h-[320px] border-2 border-red-500/40 rounded-full absolute preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-transparent rounded-full border-2 border-red-600 flex items-center justify-center">
                <Globe size={16} className="text-red-600" />
              </div>
            </motion.div>
          </div>

          {/* Ring 3 (Outer) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotateX: 360, rotateZ: 90 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[440px] h-[440px] border-2 border-purple-500/40 rounded-full absolute preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-1/4 -translate-y-1/2 w-10 h-10 bg-transparent rounded-full border-2 border-purple-600 flex items-center justify-center">
                <Database size={20} className="text-purple-600" />
              </div>
            </motion.div>
          </div>

          {/* Decorative Static Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[550px] h-[550px] border-2 border-slate-400/50 rounded-full" />
            <div className="w-[280px] h-[280px] border-2 border-slate-400/50 rounded-full border-dashed" />
          </div>

        </div>

        {/* Wavy Floating Tech Cloud (Matching User Image Reference) - Fully Transparent, no rectangle */}
        <div className="relative mt-12 w-full overflow-visible py-20 bg-transparent">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-7xl mx-auto px-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    y: {
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    },
                    rotate: {
                      duration: 5 + (i % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }
                  }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-20 h-20 bg-transparent rounded-full border border-slate-300 shadow-lg flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-primary-400 group-hover:shadow-primary-400/20 mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon size={32} className={`${skill.color} transition-transform group-hover:rotate-12`} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-950 tracking-tighter uppercase group-hover:text-blue-700 transition-colors text-center px-1">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;