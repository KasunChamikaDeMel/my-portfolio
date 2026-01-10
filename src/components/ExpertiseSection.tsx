import { motion } from 'framer-motion';
import {
    Layout,
    Server,
    Layers,
    Settings,
    Brain,
    PenTool,
    Briefcase,
    Smartphone,
    CheckCircle2
} from 'lucide-react';
import TiltCard from './background/TiltCard';
import FloatingElement from './background/FloatingElement';

const ExpertiseSection = () => {
    const expertises = [
        {
            title: 'Frontend Development',
            icon: Layout,
            color: 'text-blue-600',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Backend Development',
            icon: Server,
            color: 'text-green-600',
            bg: 'bg-green-500/10'
        },
        {
            title: 'Full Stack Development',
            icon: Layers,
            color: 'text-purple-600',
            bg: 'bg-purple-500/10'
        },
        {
            title: 'DevOps Engineering',
            icon: Settings,
            color: 'text-orange-600',
            bg: 'bg-orange-500/10'
        },
        {
            title: 'AI / ML',
            icon: Brain,
            color: 'text-indigo-600',
            bg: 'bg-indigo-500/10'
        },
        {
            title: 'UI / UX & Designing',
            icon: PenTool,
            color: 'text-pink-600',
            bg: 'bg-pink-500/10'
        },
        {
            title: 'Project Management',
            icon: Briefcase,
            color: 'text-yellow-700',
            bg: 'bg-yellow-500/10'
        },
        {
            title: 'Flutter Development',
            icon: Smartphone,
            color: 'text-sky-600',
            bg: 'bg-sky-500/10'
        }
    ];

    return (
        <section id="expertise" className="relative py-24 container mx-auto px-6 overflow-visible">

            <div className="text-center mb-16">
                <FloatingElement duration={4} yOffset={5}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="text-slate-950">Areas of</span> <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-slate-700 max-w-xl mx-auto font-medium">
                        Specialized technical domains and professional disciplines within my ecosystem.
                    </p>
                </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {expertises.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <div className="h-full bg-slate-100/25 backdrop-blur-xl border border-slate-300 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col items-center text-center">

                                {/* Status Indicator */}
                                <div className="absolute top-4 right-4 text-primary-600 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 size={16} />
                                </div>

                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                                    <div className={`absolute inset-0 rounded-2xl ${item.bg} blur-md opacity-0 group-hover:opacity-50 transition-opacity`} />
                                    <item.icon size={32} className={`${item.color} relative z-10`} />
                                </div>

                                <h3 className="text-lg font-bold text-slate-950 group-hover:text-primary-600 transition-colors uppercase tracking-tight">
                                    {item.title}
                                </h3>

                                <div className="mt-4 w-12 h-1 bg-primary-500/20 rounded-full group-hover:w-20 group-hover:bg-primary-500 transition-all duration-500" />
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default ExpertiseSection;
