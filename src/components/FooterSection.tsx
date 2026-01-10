import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, ArrowUp, Activity, Battery, Wifi, Globe, Command } from 'lucide-react';
import MagneticButton from './background/MagneticButton';
import { useState, useEffect } from 'react';

const FooterSection = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/KasunChamikaDeMel', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kasun-chamika-11a88a281/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/chamika.kasundemel', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ka_su_n.99/', label: 'Instagram' },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-slate-300 mt-20">

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary-500 rounded-b-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-4 gap-12 items-start mb-16">

          {/* Brand / System Identity */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Command className="text-primary-400" size={24} />
              <h2 className="text-2xl font-display font-bold text-slate-950 tracking-wider">
                KASUN Chamika De Mel
              </h2>
            </div>
            <p className="text-slate-950 max-w-sm font-bold leading-relaxed">
              Deploying scalable architectures and immersive digital experiences from the void.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-indigo-950 font-bold">
              <span className="flex items-center gap-1"><Activity size={12} /> SYS_OPTIMAL</span>
              <span className="flex items-center gap-1"><Wifi size={12} /> LINK_STABLE</span>
              <span className="flex items-center gap-1"><Battery size={12} /> PWR_100%</span>
            </div>
          </div>

          {/* Quick Navigation HUD */}
          <div>
            <h3 className="font-mono text-sm text-blue-900 mb-6 uppercase tracking-widest font-bold underline decoration-blue-500/30">Navigation_Matrix</h3>
            <ul className="space-y-3 font-mono text-sm">
              {['About', 'Skills', 'Services', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-950 hover:text-blue-900 hover:translate-x-2 transition-all block flex items-center gap-2 group font-bold"
                  >
                    <span className="w-1 h-1 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Uplinks */}
          <div>
            <h3 className="font-mono text-sm text-blue-900 mb-6 uppercase tracking-widest font-bold underline decoration-blue-500/30">Connect_Uplink</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <MagneticButton key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100/40 border border-slate-300 rounded-lg hover:bg-slate-200/40 hover:border-blue-700 transition-all group block shadow-sm backdrop-blur-md"
                  >
                    <social.icon size={20} className="text-slate-900 group-hover:text-blue-900 transition-colors" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-950 font-bold">

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} CORE_SYSTEMS</span>
            <div className="h-3 w-px bg-slate-400" />
            <span className="flex items-center gap-2">
              <Globe size={12} /> LOC: EARTH [SRI LANKA]
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:block">SYS_TIME: {time}</span>
            <div className="h-3 w-px bg-slate-400 hidden md:block" />
            <a href="#" className="hover:text-blue-900 transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-blue-900 transition-colors">TERMS_OF_ENGAGEMENT</a>
          </div>
        </div>

      </div>

      {/* Scroll to Top - Floating HUD Element */}
      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton>
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-4 bg-primary-600/40 backdrop-blur-md border border-primary-500/50 text-white rounded-full hover:bg-primary-600 hover:border-primary-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </MagneticButton>
      </div>

    </footer>
  );
};

export default FooterSection;