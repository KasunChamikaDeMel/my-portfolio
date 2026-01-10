import { motion } from 'framer-motion';
import { Layout, Server, Database, PenTool, Figma, Monitor, Smartphone, Code2 } from 'lucide-react';
import TiltCard from './background/TiltCard';
import FloatingElement from './background/FloatingElement';

const ServicesSection = () => {

    const services = [
        {
            title: 'Frontend Development',
            description: 'Building responsive, high-performance user interfaces with modern React ecosystems.',
            icon: Layout,
            tools: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            title: 'Backend Development',
            description: 'Architecting robust server-side logic, API integrations, and database management.',
            icon: Server,
            tools: ['Node.js', 'Express.js', 'Python', 'Flask', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
            color: 'text-green-600',
            bg: 'bg-green-50'
        },
        {
            title: 'Fullstack Solutions',
            description: 'End-to-end application development, seamlessly connecting client and server.',
            icon: Database,
            tools: ['MERN Stack', 'Next.js API', 'MySQL', 'Docker', 'AWS'],
            color: 'text-purple-600',
            bg: 'bg-purple-50'
        },
        {
            title: 'UI/UX & Design',
            description: 'Designing intuitive digital experiences and high-fidelity prototypes.',
            icon: PenTool,
            tools: ['Figma', 'Canva', 'Adobe Photoshop', 'Prototyping', 'Wireframing'],
            color: 'text-orange-600',
            bg: 'bg-orange-50'
        }
    ];

    return (
        <section id="services" className="relative py-24 container mx-auto px-6 overflow-visible">

            <div className="text-center mb-16">
                <FloatingElement duration={4} yOffset={5}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="text-slate-950">Freelance</span> <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-slate-700 max-w-xl mx-auto font-medium">
                        Comprehensive technical solutions tailored to your digital needs.
                    </p>
                </FloatingElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="h-full">
                            <div className="h-full bg-slate-100/25 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-start relative overflow-hidden">

                                {/* Background Gradient Blob */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-20 ${service.bg.replace('50', '400')}`} />

                                <div className={`p-3 rounded-2xl ${service.bg.replace('50', '400/25')} border border-slate-200 mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon size={28} className={`${service.color} opacity-70`} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-950 mb-3">{service.title}</h3>
                                <p className="text-slate-800 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                    {service.description}
                                </p>

                                <div className="w-full pt-6 border-t border-slate-200">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tools.map(tool => (
                                            <span key={tool} className="text-xs font-mono py-1 px-2 bg-black/5 border border-black/10 rounded-md text-slate-800 font-medium">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* Additional Design Tools Line */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-90">
                <div className="flex items-center gap-2 text-slate-700 font-mono text-sm font-bold">
                    <Figma size={18} /> Figma
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-mono text-sm font-bold">
                    <Monitor size={18} /> Web Design
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-mono text-sm font-bold">
                    <Smartphone size={18} /> Responsive
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-mono text-sm font-bold">
                    <Code2 size={18} /> Clean Code
                </div>
            </div>

        </section>
    );
};

export default ServicesSection;
