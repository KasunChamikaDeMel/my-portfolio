import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    enabled?: boolean;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
    children,
    delay = 0,
    duration = 6,
    yOffset = 15,
    className = "",
    enabled = true
}) => {
    if (!enabled) return <div className={className}>{children}</div>;

    return (
        <motion.div
            className={className}
            animate={{
                y: [-yOffset, yOffset, -yOffset],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;
