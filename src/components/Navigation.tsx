import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Mail, Zap, Layers, Award } from 'lucide-react';

const Navigation = () => {
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Services', href: '#services', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Certs', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 pointer-events-none px-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto"
          >
            <a href="#home" className="text-2xl font-display font-bold">
              <span className="gradient-text">Kasun C. De Mel</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="glass-dark border border-white/10 rounded-full px-6 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative p-3 rounded-full transition-all duration-300 flex flex-col items-center justify-center group ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`absolute inset-0 bg-primary-500/40 rounded-full blur-md opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'group-hover:opacity-50'
                  }`} />

                <Icon className={`w-5 h-5 relative z-10 transition-colors ${isActive ? 'text-primary-400' : 'text-slate-400 group-hover:text-white'
                  }`} />

                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1 h-1 bg-primary-400 rounded-full"
                  />
                )}

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
};

export default Navigation;