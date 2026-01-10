import { motion } from 'framer-motion';
import { Award, ShieldCheck, BadgeCheck, ExternalLink, GraduationCap, Trophy, Medal } from 'lucide-react';
import TiltCard from './antigravity/TiltCard';
import FloatingElement from './antigravity/FloatingElement';
import MagneticButton from './antigravity/MagneticButton';

const CertificationsSection = () => {
    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            icon: ShieldCheck,
            color: "text-orange-600",
            bg: "bg-orange-400/20",
            link: "#"
        },
        {
            title: "Meta Front-End Developer",
            issuer: "Meta (Coursera)",
            date: "2023",
            icon: BadgeCheck,
            color: "text-blue-600",
            bg: "bg-blue-400/20",
            link: "#"
        },
        {
            title: "IBM Data Science Professional",
            issuer: "IBM",
            date: "2023",
            icon: Award,
            color: "text-indigo-600",
            bg: "bg-indigo-400/20",
            link: "#"
        },
        {
            title: "Google Cloud Digital Leader",
            issuer: "Google Cloud",
            date: "2024",
            icon: GraduationCap,
            color: "text-red-600",
            bg: "bg-red-400/20",
            link: "#"
        }
    ];

    return (
        <section id="certifications" className="relative py-24 container mx-auto px-6 overflow-visible">

            <div className="text-center mb-16">
                <FloatingElement duration={4} yOffset={5}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="text-slate-950">Verified</span> <span className="gradient-text">Credentials</span>
                    </h2>
                    <p className="text-slate-950 max-w-xl mx-auto font-bold opacity-80">
                        A record of professional achievements and technical validated expertise.
                    </p>
                </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <div className="h-full bg-slate-100/20 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center relative overflow-hidden">

                                {/* Decorative Glow */}
                                <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-[40px] opacity-20 ${cert.bg}`} />

                                <div className={`p-4 rounded-2xl ${cert.bg} border border-slate-200 mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                                    <cert.icon size={32} className={cert.color} />
                                </div>

                                <h3 className="text-lg font-bold text-slate-950 mb-2 relative z-10 leading-tight">
                                    {cert.title}
                                </h3>

                                <div className="flex flex-col items-center gap-1 mb-6 relative z-10">
                                    <span className="text-xs font-mono text-indigo-950 font-bold uppercase tracking-wider">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-[10px] font-mono text-slate-900 bg-slate-100/30 px-2 py-0.5 rounded-full border border-slate-300">
                                        ISSUED: {cert.date}
                                    </span>
                                </div>

                                <div className="mt-auto w-full pt-6 border-t border-slate-200/50 flex justify-center">
                                    <MagneticButton>
                                        <a
                                            href={cert.link}
                                            className="flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-blue-900 transition-colors uppercase tracking-widest"
                                        >
                                            View Certificate <ExternalLink size={12} />
                                        </a>
                                    </MagneticButton>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* Achievement Bar */}
            <div className="mt-16 bg-slate-100/10 border border-slate-300 rounded-2xl p-6 backdrop-blur-md flex flex-wrap items-center justify-around gap-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-700">
                        <Trophy size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-950 font-bold uppercase">10+ Global Certs</span>
                </div>
                <div className="h-6 w-px bg-slate-300 hidden md:block" />
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-400/20 rounded-lg text-blue-700">
                        <Medal size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-950 font-bold uppercase">Continuous Learning</span>
                </div>
                <div className="h-6 w-px bg-slate-300 hidden md:block" />
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-400/20 rounded-lg text-green-700">
                        <ShieldCheck size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-950 font-bold uppercase">Skill Validation</span>
                </div>
            </div>

        </section>
    );
};

export default CertificationsSection;
