import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/50" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-display font-bold">
              <span className="gradient-text">Kasun Chamika</span>
              <span className="text-dark-400 ml-2">De Mel</span>
            </h2>
            <p className="text-dark-500 leading-relaxed">
              Creating innovative digital solutions with precision and passion. 
              Let's build something extraordinary together.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-2 glass-dark rounded-lg hover:bg-primary-500/10 border border-transparent hover:border-primary-500/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-dark-400 hover:text-primary-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-dark-200">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-500 hover:text-primary-400 transition-colors duration-300 inline-block hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-dark-200">Get In Touch</h3>
            <div className="space-y-2 text-dark-500">
              <p>Padukka, Sri Lanka</p>
              <p>
                <a
                  href="mailto:chamikakasun33635@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  chamikakasun33635@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+94703274701" className="hover:text-primary-400 transition-colors">
                  +94 70 327 4701
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-dark-500 text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Kasun Chamika De Mel. All the rights reserved.
            </motion.p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg shadow-primary-500/30 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;