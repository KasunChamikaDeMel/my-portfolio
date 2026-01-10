import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ExternalLink, Trophy, Medal, X, FileText, Cloud, Layers, Cpu, Server, Zap, Globe, ChevronDown, ChevronUp, Target } from 'lucide-react';
import TiltCard from './background/TiltCard';
import FloatingElement from './background/FloatingElement';
import MagneticButton from './background/MagneticButton';

const CertificationsSection = () => {
    const [selectedCert, setSelectedCert] = useState<null | any>(null);
    const [showAll, setShowAll] = useState(false);

    const certifications = [
        {
            title: "Amazon EKS Knowledge Badge",
            issuer: "Amazon Web Services",
            date: "2025",
            icon: ShieldCheck,
            color: "text-blue-600",
            bg: "bg-blue-400/25",
            file: "/certifications/aws-knowledge-amazon-eks-training-badge.png"
        },
        {
            title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "2025",
            icon: Cpu,
            color: "text-red-600",
            bg: "bg-red-400/25",
            file: "/certifications/eCertificate - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf"
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "2025",
            icon: Cloud,
            color: "text-orange-600",
            bg: "bg-orange-400/25",
            file: "/certifications/AWS Cloud Practitioner Essentials.pdf"
        },
        {
            title: "Getting Started with DevOps on AWS",
            issuer: "Amazon Web Services",
            date: "2025",
            icon: Zap,
            color: "text-yellow-600",
            bg: "bg-yellow-400/25",
            file: "/certifications/Getting Started with DevOps on AWS.pdf"
        },
        {
            title: "Amazon EKS Deployment Options",
            issuer: "Amazon Web Services",
            date: "2025",
            icon: Layers,
            color: "text-blue-600",
            bg: "bg-blue-400/25",
            file: "/certifications/Amazon EKS Deployment Options.pdf"
        },
        // Hidden items
        {
            title: "Introduction to Generative AI",
            issuer: "Amazon Web Services",
            date: "2025",
            icon: Cpu,
            color: "text-purple-600",
            bg: "bg-purple-400/25",
            file: "/certifications/Introduction to Generative AI - Art of the Possible.pdf"
        },
        {
            title: "Elastic Kubernetes Service (EKS)",
            issuer: "AWS",
            date: "2025",
            icon: Server,
            color: "text-sky-600",
            bg: "bg-sky-400/25",
            file: "/certifications/Elastic Kubernetes Service (EKS).pdf"
        },
        {
            title: "Amazon EKS Security",
            issuer: "AWS",
            date: "2025",
            icon: ShieldCheck,
            color: "text-red-500",
            bg: "bg-red-400/25",
            file: "/certifications/Amazon EKS Security.pdf"
        },
        {
            title: "Amazon EKS Networking",
            issuer: "AWS",
            date: "2025",
            icon: Globe,
            color: "text-blue-400",
            bg: "bg-blue-400/25",
            file: "/certifications/Amazon EKS Networking.pdf"
        },
        {
            title: "Introduction to Container Basics",
            issuer: "AWS",
            date: "2025",
            icon: Server,
            color: "text-indigo-600",
            bg: "bg-indigo-400/25",
            file: "/certifications/Introduction to Container Basics.pdf"
        },
        {
            title: "Introduction to Kubernetes Core Concepts",
            issuer: "AWS",
            date: "2025",
            icon: Layers,
            color: "text-blue-700",
            bg: "bg-blue-400/25",
            file: "/certifications/Introduction to Kubernetes Core Concepts.pdf"
        },
        {
            title: "The Amazon EKS Cluster",
            issuer: "AWS",
            date: "2025",
            icon: Cpu,
            color: "text-slate-700",
            bg: "bg-slate-400/25",
            file: "/certifications/The Amazon EKS Cluster.pdf"
        },
        {
            title: "Deploying Microservices to Amazon EKS",
            issuer: "AWS",
            date: "2025",
            icon: Server,
            color: "text-orange-700",
            bg: "bg-orange-400/25",
            file: "/certifications/Deploying Microservices to Amazon EKS.pdf"
        },
        {
            title: "GitOps for Amazon EKS Automation",
            issuer: "AWS",
            date: "2025",
            icon: Zap,
            color: "text-green-600",
            bg: "bg-green-400/25",
            file: "/certifications/GitOps for Amazon EKS Automation.pdf"
        },
        {
            title: "Autoscaling and Cost Optimization",
            issuer: "AWS",
            date: "2025",
            icon: ShieldCheck,
            color: "text-amber-600",
            bg: "bg-amber-400/25",
            file: "/certifications/Autoscaling and Cost Optimization.pdf"
        },
        {
            title: "Basic Observability for Amazon EKS",
            issuer: "AWS",
            date: "2025",
            icon: FileText,
            color: "text-cyan-600",
            bg: "bg-cyan-400/25",
            file: "/certifications/Basic Observability for Amazon EKS.pdf"
        },
        {
            title: "Amazon EKS - Knowledge Badge Readiness Path",
            issuer: "AWS",
            date: "2025",
            icon: Medal,
            color: "text-blue-800",
            bg: "bg-blue-400/25",
            file: "/certifications/Amazon EKS - Knowledge Badge Readiness Path.pdf"
        },
        {
            title: "Build a free website with WordPress",
            issuer: "Coursera",
            date: "2025",
            icon: Globe,
            color: "text-sky-500",
            bg: "bg-sky-400/25",
            file: "/certifications/Coursera L10M59FXYYBJ - Build a free website with WordPress.pdf"
        },
        {
            title: "Introduction to Project Management with ClickUp",
            issuer: "Coursera",
            date: "2025",
            icon: FileText,
            color: "text-purple-600",
            bg: "bg-purple-400/25",
            file: "/certifications/Coursera KH6T0D48JJDZ - Introduction to Project Management with ClickUp.pdf"
        },
        {
            title: "Google Ads for Beginners",
            issuer: "Google (Coursera)",
            date: "2025",
            icon: Target,
            color: "text-blue-500",
            bg: "bg-blue-400/25",
            file: "/certifications/Coursera 39GOWH0O1XGM - Google Ads for Beginners.pdf"
        },
        {
            title: "Increase SEO Traffic with WordPress",
            issuer: "Coursera",
            date: "2025",
            icon: ShieldCheck,
            color: "text-green-600",
            bg: "bg-green-400/25",
            file: "/certifications/Coursera 4TUDCXY7MII5 - Increase SEO Traffic with WordPress.pdf"
        }
    ];

    const displayedCerts = showAll ? certifications : certifications.slice(0, 4);

    return (
        <section id="certifications" className="relative py-24 container mx-auto px-6 overflow-visible">

            <div className="text-center mb-16">
                <FloatingElement duration={4} yOffset={5}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="text-slate-950">Verified</span> <span className="gradient-text">Credentials</span>
                    </h2>
                    <p className="text-slate-700 max-w-xl mx-auto font-bold opacity-80">
                        A comprehensive log of technical validations and cloud architecture proficiencies.
                    </p>
                </FloatingElement>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence mode='popLayout'>
                    {displayedCerts.map((cert) => (
                        <motion.div
                            key={cert.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <div className="h-full bg-slate-100/25 backdrop-blur-xl border border-slate-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center relative overflow-hidden">

                                    <div className={`p-4 rounded-2xl ${cert.bg} border border-slate-200 mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                                        <cert.icon size={32} className={cert.color} />
                                    </div>

                                    <h3 className="text-md font-bold text-slate-900 mb-2 relative z-10 leading-tight min-h-[3rem] flex items-center">
                                        {cert.title}
                                    </h3>

                                    <div className="flex flex-col items-center gap-1 mb-6 relative z-10">
                                        <span className="text-xs font-mono text-primary-600 font-bold uppercase tracking-wider">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-[10px] font-mono text-slate-800 bg-black/5 px-2 py-0.5 rounded-full border border-black/10">
                                            VERIFIED_{cert.date}
                                        </span>
                                    </div>

                                    <div className="mt-auto w-full pt-6 border-t border-slate-200/50 flex justify-center">
                                        <MagneticButton>
                                            <button
                                                onClick={() => setSelectedCert(cert)}
                                                className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-primary-600 transition-colors uppercase tracking-widest no-underline"
                                            >
                                                View System Log <ExternalLink size={12} />
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* View More Button */}
            <div className="mt-12 flex justify-center">
                <MagneticButton>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-3 bg-black/5 border border-black/20 rounded-xl font-bold flex items-center gap-2 hover:bg-black/10 transition-all text-slate-900 hover:border-primary-600 group"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                View All Certifications <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </MagneticButton>
            </div>

            {/* Modal / Popup Banner */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-primary-950/60 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl h-[85vh] bg-slate-100 border border-slate-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-[101]"
                        >
                            {/* Modal Header */}
                            <div className="p-4 md:p-6 bg-slate-100/80 backdrop-blur-md border-b border-slate-300 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-xl ${selectedCert.bg} border border-slate-200`}>
                                        <selectedCert.icon size={24} className={selectedCert.color} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-950 leading-tight">{selectedCert.title}</h3>
                                        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">{selectedCert.issuer} // {selectedCert.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 hover:text-slate-950"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* PDF/Image Viewer */}
                            <div className="flex-grow bg-slate-200 relative overflow-hidden flex items-center justify-center">
                                {selectedCert.file.endsWith('.png') ? (
                                    <img
                                        src={selectedCert.file}
                                        alt={selectedCert.title}
                                        className="max-w-full max-h-full object-contain p-8 md:p-12"
                                    />
                                ) : (
                                    <iframe
                                        src={`${selectedCert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                                        className="w-full h-full border-none"
                                        title={selectedCert.title}
                                    />
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 bg-slate-50 border-t border-slate-300 flex items-center justify-between">
                                <p className="text-[10px] font-mono text-slate-500 uppercase">Secure Link // Verified by {selectedCert.issuer}</p>
                                <a
                                    href={selectedCert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-primary-700 hover:text-primary-800 flex items-center gap-1 uppercase tracking-tighter"
                                >
                                    Open Full System <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Achievement Bar */}
            <div className="mt-16 bg-black/5 border border-slate-300 rounded-2xl p-6 backdrop-blur-md flex flex-wrap items-center justify-around gap-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-600">
                        <Trophy size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-900 font-bold uppercase">20+ Technical Validations</span>
                </div>
                <div className="h-6 w-px bg-black/10 hidden md:block" />
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-400/20 rounded-lg text-primary-600">
                        <Medal size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-900 font-bold uppercase">Multi-Cloud Certified</span>
                </div>
                <div className="h-6 w-px bg-black/10 hidden md:block" />
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-400/20 rounded-lg text-green-600">
                        <ShieldCheck size={20} />
                    </div>
                    <span className="text-xs font-mono text-slate-900 font-bold uppercase">System Architect Verified</span>
                </div>
            </div>

        </section>
    );
};

export default CertificationsSection;
