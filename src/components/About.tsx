import { motion } from 'framer-motion';
import { Code, Briefcase, BookOpen, Download } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Development Experience',
      description: 'Full-stack web development with modern technologies',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'BSc (Hons) in Computer Science and Software Engineering at SLTC Research University',
    },
    {
      icon: Briefcase,
      title: 'Professional Focus',
      description: 'Frontend development, Backend Development, UI/UX design, and system architecture',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6" />
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Get to know me and my journey in the world of software engineering and design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            <div className="relative glass-dark rounded-3xl overflow-hidden border border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
              <img
                src="/images/pro2.png"
                alt="Kasun Chamika - Software Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold mb-6 text-dark-50">
                Software Engineer • Web Developer • UI/UX Designer
              </h3>

              <p className="text-dark-400 mb-6 leading-relaxed">
                I'm Kasun Chamika, a passionate software engineer with expertise in both frontend 
                and backend development. I enjoy creating elegant, efficient solutions to complex 
                problems and delivering high-quality applications using technologies like React, 
                Next.js, Node.js, and Tailwind CSS.
              </p>

              <p className="text-dark-400 mb-8 leading-relaxed">
                With a strong foundation in computer science and a keen eye for design, I bridge 
                the gap between functionality and aesthetics to create seamless user experiences.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 glass-dark rounded-xl border border-primary-500/20 group-hover:border-primary-500/40 group-hover:bg-primary-500/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-200 mb-1">{item.title}</h4>
                      <p className="text-dark-500 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work With Me
              </motion.a>

              <motion.a
                href="/KasunChamikaDeMel-CV-FullStack.pdf"
                download="KasunChamikaDeMel-CV-FullStack.pdf"
                className="group px-8 py-4 glass-dark rounded-xl font-medium border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;