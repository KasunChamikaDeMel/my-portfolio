import { useEffect, useRef } from 'react';
const GradientBackground = () => {
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
    // Animation properties
    let time = 0;
    const colors = [{
      r: 239,
      g: 246,
      b: 255
    }, {
      r: 219,
      g: 234,
      b: 254
    }, {
      r: 243,
      g: 244,
      b: 246
    }, {
      r: 229,
      g: 231,
      b: 235
    } // gray-200
    ];
    // Create gradient animation
    const animate = () => {
      time += 0.005;
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      // Animate gradient stops
      const colorIndex1 = Math.floor(time) % colors.length;
      const colorIndex2 = (colorIndex1 + 1) % colors.length;
      const colorIndex3 = (colorIndex1 + 2) % colors.length;
      const color1 = colors[colorIndex1];
      const color2 = colors[colorIndex2];
      const color3 = colors[colorIndex3];
      gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, 0.8)`);
      gradient.addColorStop(0.5, `rgba(${color2.r}, ${color2.g}, ${color2.b}, 0.8)`);
      gradient.addColorStop(1, `rgba(${color3.r}, ${color3.g}, ${color3.b}, 0.8)`);
      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw some circles for added effect
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
        const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
        const radius = Math.sin(time * 0.5) * 50 + 100;
        const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient2.addColorStop(0, `rgba(${color2.r}, ${color2.g}, ${color2.b}, 0.1)`);
        gradient2.addColorStop(1, `rgba(${color3.r}, ${color3.g}, ${color3.b}, 0)`);
        ctx.fillStyle = gradient2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
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
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-gray-100" />;
};
export default GradientBackground;