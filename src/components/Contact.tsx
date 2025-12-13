import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Padukka, Sri Lanka',
      link: 'https://www.google.com/maps/place/Padukka,+Sri+Lanka',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'chamikakasun33635@gmail.com',
      link: 'mailto:chamikakasun33635@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 70 327 4701',
      link: 'tel:+94703274701',
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-dark-100">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 glass-dark rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-200 mb-1">{info.title}</h4>
                        <p className="text-dark-400 group-hover:text-primary-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-dark rounded-2xl p-8 border border-primary-500/20"
            >
              <h4 className="font-display font-bold text-xl mb-4 text-dark-100">
                Let's discuss your project
              </h4>
              <p className="text-dark-400 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision.
              </p>
              <motion.a
                href="mailto:chamikakasun33635@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-dark rounded-2xl p-8 border border-primary-500/20 space-y-6">
              <h3 className="text-2xl font-display font-bold mb-6 text-dark-100">
                Send Me a Message
              </h3>

              <div>
                <label htmlFor="name" className="block text-dark-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-dark-100 placeholder-dark-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-dark-100 placeholder-dark-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-dark-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-dark-100 placeholder-dark-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-dark-100 placeholder-dark-500 resize-none transition-all"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;