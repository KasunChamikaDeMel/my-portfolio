import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    strength = 30,
    className = "",
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (clientX - centerX) / width;
        const deltaY = (clientY - centerY) / height;

        setPosition({
            x: deltaX * strength,
            y: deltaY * strength
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            className={`inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...props as any}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
