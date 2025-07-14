import React, { useEffect, useRef } from 'react';
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1
      });
    }
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Set background
      ctx.fillStyle = 'rgba(235, 244, 255, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        // Wrap around edges
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      }
      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance / 500})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    // Start animation
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  }} />;
};
export default ParticleBackground;