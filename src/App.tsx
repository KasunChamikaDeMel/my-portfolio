import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import OrbitingHero from './components/OrbitingHero';
import AboutSection from './components/AboutSection';
import StatsStrip from './components/StatsStrip';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import AssistantChatbot from './components/AssistantChatbot';
import Background from './components/background/Background';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function App() {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-slate-900 overflow-x-hidden">
      {/* Background gradient layers */}
      {/* Antigravity Background */}
      <Background />

      {/* Main content */}
      <Navigation />

      <AnimatePresence mode="wait">
        <motion.main variants={pageTransition} initial="initial" animate="animate" exit="exit">
          <motion.div variants={sectionAnimation}><OrbitingHero /></motion.div>
          <motion.div variants={sectionAnimation}><AboutSection /></motion.div>
          <motion.div variants={sectionAnimation}><StatsStrip /></motion.div>
          <motion.div variants={sectionAnimation}><SkillsSection /></motion.div>
          <motion.div variants={sectionAnimation}><ServicesSection /></motion.div>
          <motion.div variants={sectionAnimation}><ProjectsSection /></motion.div>
          <motion.div variants={sectionAnimation}><CertificationsSection /></motion.div>
          <motion.div variants={sectionAnimation}><ContactSection /></motion.div>
        </motion.main>
      </AnimatePresence>

      <FooterSection />

      {/* Interactive elements */}
      {/* Interactive elements */}
      <AssistantChatbot />
    </div>
  );
}