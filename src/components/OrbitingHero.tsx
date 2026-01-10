import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from './background/MagneticButton';
import FloatingElement from './background/FloatingElement';

const OrbitingHero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Column: Content */}
                    <div className="flex-1 text-left max-w-2xl order-2 lg:order-1">
                        <FloatingElement delay={0.2} yOffset={5}>
                            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight text-slate-900">
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500">
                                    Kasun Chamika De Mel
                                </span>
                            </h1>
                        </FloatingElement>

                        <FloatingElement delay={0.4} yOffset={5}>
                            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-semibold  leading-relaxed">
                                Software Engineer | Full Stack Developer | DevOps / AI / ML Engineer.
                            </p>
                        </FloatingElement>

                        <FloatingElement delay={0.6} yOffset={5}>
                            <div className="flex flex-wrap gap-6 text-slate-600">
                                <MagneticButton className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 flex items-center gap-2">
                                    <a href="#projects">View Work</a>
                                </MagneticButton>
                                <MagneticButton className="px-10 py-5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-full font-bold transition-colors backdrop-blur-md shadow-sm">
                                    <a href="#contact">Contact Me</a>
                                </MagneticButton>
                            </div>
                        </FloatingElement>
                    </div>

                    {/* Right Column: Profile Image with Orbital Rings */}
                    <div className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2 py-12 lg:pr-16">
                        <div className="relative">
                            {/* Outer Ring */}
                            <motion.div
                                className="absolute inset-[-60px] border border-primary-500/40 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-[-60px] border-t border-r border-primary-500/60 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Ring Reverse */}
                            <motion.div
                                className="absolute inset-0 border-[1px] border-slate-300/30 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Profile Picture */}
                            <FloatingElement duration={4} yOffset={10}>
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900 shadow-[0_0_70px_rgba(59,130,246,0.3)] relative z-20">
                                    <img
                                        src="/images/my pic.jpg"
                                        alt="Kasun Chamika"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </FloatingElement>

                            {/* Orbiting Icons */}
                            <motion.div
                                className="absolute inset-[-110px] w-[calc(100%+220px)] h-[calc(100%+220px)] rounded-full animate-spin-slow pointer-events-none"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                                    <div className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
                                        <CodeIcon />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-10 md:left-20 text-slate-500 flex items-center gap-3 font-mono text-xs tracking-widest font-bold"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-10 h-[1px] bg-slate-400" />
                <ArrowDown size={18} />
                <span>SCROLL_EXPLORE</span>
            </motion.div>

        </section>
    );
};

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
)

export default OrbitingHero;
