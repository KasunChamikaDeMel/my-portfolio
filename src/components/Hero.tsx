import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/KasunChamikaDeMel', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kasun-chamika-11a88a281/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/chamika.kasundemel', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ka_su_n.99/', label: 'Instagram' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full border border-primary-500/20"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-dark-300">Available for new opportunities</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-display font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text inline-block">
                  Kasun Chamika
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-dark-300"
              >
                Software Engineer • Web Developer • UI/UX Designer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-dark-400 max-w-2xl leading-relaxed"
              >
                I craft responsive websites, develop robust backend systems, and design intuitive user interfaces.
                Let's turn your ideas into reality with cutting-edge technology.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#projects"
                className="group px-8 py-4 glass-dark rounded-xl font-medium border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-dark rounded-lg hover:bg-primary-500/10 border border-transparent hover:border-primary-500/30 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
                <img
                  src="/images/my pic.jpg"
                  alt="Kasun Chamika De Mel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 glass-dark p-4 rounded-2xl border border-primary-500/20 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-dark-300">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-dark-500 uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-dark-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;