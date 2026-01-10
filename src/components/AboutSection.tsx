import { motion } from 'framer-motion';
import { Code, Briefcase, BookOpen, Download, Zap, Radio } from 'lucide-react';
import TiltCard from './antigravity/TiltCard';
import MagneticButton from './antigravity/MagneticButton';
import FloatingElement from './antigravity/FloatingElement';

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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-200/40 rounded-full border-dashed -z-10"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/50 blur-[80px] -z-20 rounded-full" />


          <TiltCard className="w-full max-w-lg aspect-[4/5] relative">
            <div className="w-full h-full bg-slate-100/20 backdrop-blur-md rounded-[2rem] border border-slate-200 shadow-2xl relative overflow-hidden group">

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
                  <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase">System Online</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight">
                  Kasun Chamika
                </h3>
                <p className="text-blue-600 text-sm font-bold mt-0.5">Software Engineer</p>
              </div>

              {/* Top Details */}
              <div
                className="absolute top-6 right-6"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="bg-transparent backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/50 shadow-sm flex flex-col items-center">
                  <span className="text-xl font-bold text-slate-900 leading-none">5+</span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">EXP</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>


        {/* RIGHT COLUMN: The Data Stream */}
        <div className="relative">
          <FloatingElement duration={5} yOffset={5}>
            <h3 className="text-xl font-mono text-primary-400 mb-6 flex items-center gap-3">
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
              <p className="text-lg text-slate-900 leading-relaxed mb-6 font-medium">
                Greetings. I am an architect of digital realities. While others write code, I craft <strong className="text-blue-700 font-bold">experiences</strong>.
                My mission is to deconstruct complex problems and reassemble them into elegant, user-centric solutions.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                Specializing in the Javascript ecosystem, I traverse the full stack—from the quantum depths of database architecture to the shimmering surface of UI interactivity.
              </p>
            </div>

            {/* Cyber Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'PROJECTS', value: '20+', icon: Code },
                { label: 'EXPERIENCE', value: '3+ YRS', icon: Briefcase },
                { label: 'EDUCATION', value: 'BSc Hons', icon: BookOpen },
                { label: 'STATUS', value: 'OPEN', icon: Zap },
              ].map((stat, i) => (
                <FloatingElement key={stat.label} delay={i * 0.1} yOffset={2}>
                  <div className="bg-slate-100/20 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2 text-slate-500 group-hover:text-blue-600 transition-colors">
                      <stat.icon size={18} />
                      <span className="text-xs font-bold tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
                  </div>
                </FloatingElement>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6">
              <MagneticButton>
                <a href="#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                  Initiate Protocol
                </a>
              </MagneticButton>

              <MagneticButton>
                <a href="/KasunChamikaDeMel-CV-FullStack.pdf" download className="px-8 py-4 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-medium rounded-full flex items-center gap-2 transition-all shadow-sm">
                  <Download size={18} />
                  Download Data
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