import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0" style={{ zIndex: 9998 }}>
      <motion.div
        className="absolute"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.5,
        }}
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, rgba(147, 51, 234, 0.075) 30%, rgba(147, 51, 234, 0.04) 50%, transparent 70%)',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default GlowingCursor;