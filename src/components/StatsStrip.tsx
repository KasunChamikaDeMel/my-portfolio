import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import FloatingElement from './background/FloatingElement';
import { Trophy, Users, Briefcase, Star } from 'lucide-react';

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
            const suffix = value.replace(/[0-9]/g, '');

            const controls = animate(0, numericValue, {
                duration: duration,
                ease: "easeOut",
                onUpdate(latest) {
                    setDisplayValue(Math.floor(latest) + suffix);
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{displayValue}</span>;
};

const StatsStrip = () => {
    const stats = [
        { label: 'Projects Completed', value: '10+', icon: Briefcase, color: 'text-blue-600' },
        { label: 'Happy Clients', value: '10+', icon: Users, color: 'text-green-600' },
        { label: 'Years Experience', value: '3+', icon: Trophy, color: 'text-purple-600' },
        { label: 'Client Satisfaction', value: '100%', icon: Star, color: 'text-orange-500' },
    ];

    return (
        <section className="container mx-auto px-6 py-12 relative z-10">
            <FloatingElement yOffset={5} duration={6}>
                <div className="bg-slate-100/20 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl shadow-slate-300/50 flex flex-wrap justify-between items-center gap-8 md:gap-4 scroll-mt-20">

                    {stats.map((stat) => (
                        <div key={stat.label} className="flex-1 min-w-[150px] flex flex-col items-center text-center group cursor-default">
                            <div className={`mb-3 p-3 bg-slate-100/20 border border-slate-200 rounded-2xl shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">
                                <CountUp value={stat.value} />
                            </h3>
                            <p className="text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </FloatingElement>
        </section>
    );
};

export default StatsStrip;
