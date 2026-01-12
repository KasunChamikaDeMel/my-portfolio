'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../src/components/Navigation';
import OrbitingHero from '../src/components/OrbitingHero';
import AboutSection from '../src/components/AboutSection';
import ExpertiseSection from '../src/components/ExpertiseSection';
import StatsStrip from '../src/components/StatsStrip';
import SkillsSection from '../src/components/SkillsSection';
import ServicesSection from '../src/components/ServicesSection';
import ProjectsSection from '../src/components/ProjectsSection';
import CertificationsSection from '../src/components/CertificationsSection';
import ContactSection from '../src/components/ContactSection';
import FooterSection from '../src/components/FooterSection';
import AssistantChatbot from '../src/components/AssistantChatbot';
import Background from '../src/components/background/Background';

const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
    return (
        <div className="relative w-full min-h-screen bg-transparent text-slate-900 overflow-x-hidden">
            <Background />
            <Navigation />
            <AnimatePresence mode="wait">
                <motion.main variants={pageTransition} initial="initial" animate="animate" exit="exit">
                    <motion.div variants={sectionAnimation}><OrbitingHero /></motion.div>
                    <motion.div variants={sectionAnimation}><AboutSection /></motion.div>
                    <motion.div variants={sectionAnimation}><ExpertiseSection /></motion.div>
                    <motion.div variants={sectionAnimation}><StatsStrip /></motion.div>
                    <motion.div variants={sectionAnimation}><SkillsSection /></motion.div>
                    <motion.div variants={sectionAnimation}><ServicesSection /></motion.div>
                    <motion.div variants={sectionAnimation}><ProjectsSection /></motion.div>
                    <motion.div variants={sectionAnimation}><CertificationsSection /></motion.div>
                    <motion.div variants={sectionAnimation}><ContactSection /></motion.div>
                </motion.main>
            </AnimatePresence>
            <FooterSection />
            <AssistantChatbot />
        </div>
    );
}
