import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlowingCursor from './components/GlowingCursor';
import Chatbot from './components/Chatbot';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function App() {
  return (
    <div className="relative w-full min-h-screen bg-dark-950 text-dark-50 overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" style={{ zIndex: -20 }} />
      
      <div className="fixed inset-0 opacity-30" style={{ zIndex: -15 }}>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* All content - no z-index wrapper needed */}
      <NavBar />
      
      <AnimatePresence mode="wait">
        <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
          <motion.div variants={sectionVariants}><Hero /></motion.div>
          <motion.div variants={sectionVariants}><About /></motion.div>
          <motion.div variants={sectionVariants}><Skills /></motion.div>
          <motion.div variants={sectionVariants}><Projects /></motion.div>
          <motion.div variants={sectionVariants}><Contact /></motion.div>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      
      {/* Cursor Glow - high z-index so it appears above sections */}
      <GlowingCursor />
      
      {/* Chatbot - highest z-index */}
      <Chatbot />
    </div>
  );
}