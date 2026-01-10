import { motion } from 'framer-motion';
import { BookOpen, Download, Zap, Radio } from 'lucide-react';
import TiltCard from './background/TiltCard';
import MagneticButton from './background/MagneticButton';
import FloatingElement from './background/FloatingElement';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 container mx-auto px-6 overflow-visible">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN: The 3D Identity Card */}
        <div className="relative group perspective-1000 flex justify-center">

          {/* Background Decoration */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary-200/25 rounded-full border-dashed -z-10"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-900/25 blur-[80px] -z-20 rounded-full" />


          <TiltCard className="w-full max-w-lg aspect-[4/5] relative">
            <div className="w-full h-full bg-slate-100/25 backdrop-blur-md rounded-[2rem] border border-slate-200 shadow-2xl relative overflow-hidden group">

              {/* Image Container */}
              <div
                className="absolute inset-2 rounded-[1.5rem] overflow-hidden bg-transparent border border-slate-200"
                style={{ transform: "translateZ(20px)" }}
              >
                <img
                  src="/images/pro3.JPG"
                  alt="Kasun Chamika"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle overlay gradient for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Name Plate */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 bg-slate-100/30 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-lg"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] font-mono font-bold text-slate-600 tracking-widest uppercase">System Online</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-950 leading-tight">
                  Kasun Chamika
                </h3>
                <p className="text-primary-600 text-sm font-bold mt-0.5">Software Engineer</p>
              </div>

              {/* Top Details */}
              <div
                className="absolute top-6 right-6"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="bg-transparent backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/50 shadow-sm flex flex-col items-center">
                  <span className="text-xl font-bold text-slate-950 leading-none">3+</span>
                  <span className="text-[10px] font-bold text-slate-600 font-mono">EXP</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>


        {/* RIGHT COLUMN: The Data Stream */}
        <div className="relative">
          <FloatingElement duration={5} yOffset={5}>
            <h3 className="text-xl font-bold text-primary-600 mb-6 flex items-center gap-3">
              <Radio className="w-5 h-5 animate-pulse" />
              <span>TRANSMISSION_INCOMING</span>
            </h3>
          </FloatingElement>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="relative pl-8 border-l-2 border-primary-500/20">
              <p className="text-lg text-slate-800 leading-relaxed mb-6 font-medium">
                I am a dedicated Software Engineer with a passion for building scalable, high-performance applications. With a solid foundation in software engineering and physical sciences, I specialize in architecting modern solutions that bridge the gap between technical complexity and intuitive user experiences.
              </p>
              <p className="text-lg text-slate-800 leading-relaxed font-medium">
                My approach combines analytical precision with creative problem-solving, ensuring every project I undertake is both robust and visually compelling.
              </p>
            </div>

            {/* Detailed Info Grid */}
            <div className="bg-slate-100/10 border border-slate-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mt-1"><BookOpen size={18} /></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">BSc (Hons) in Software Engineering</h4>
                  <p className="text-xs text-slate-700">Sri Lanka Technology Campus, Meepe, Padukka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-50 rounded-lg text-primary-500 mt-1"><BookOpen size={18} /></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Advanced Level - Physical Science</h4>
                  <p className="text-xs text-slate-700">Central College Anuradhapura</p>
                </div>
              </div>
            </div>

            {/* Cyber Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'BIRTHDAY', value: 'Feb 24, 1999', icon: Zap },
                { label: 'ADDRESS', value: 'Thambuttegama, Sri Lanka', icon: Radio },
              ].map((stat, i) => (
                <FloatingElement key={stat.label} delay={i * 0.1} yOffset={2}>
                  <div className="bg-slate-100/25 backdrop-blur-xl border border-slate-300 rounded-3xl p-6 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2 text-slate-600 group-hover:text-primary-600 transition-colors">
                      <stat.icon size={18} />
                      <span className="text-[10px] font-bold tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-sm font-display font-bold text-slate-900 truncate" title={stat.value}>{stat.value}</div>
                  </div>
                </FloatingElement>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6">
              <MagneticButton>
                <a href="#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(137,166,127,0.4)] transition-all">
                  Initiate Protocol
                </a>
              </MagneticButton>

              <MagneticButton>
                <a href="/KasunChamikaDeMel-CV.pdf" download className="px-8 py-4 bg-black/5 border border-black/20 hover:bg-black/10 text-black font-medium rounded-full flex items-center gap-2 transition-all shadow-sm">
                  <Download size={18} />
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;