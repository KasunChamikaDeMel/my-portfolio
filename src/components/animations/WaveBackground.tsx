import React, { useEffect, useRef } from 'react';
const WaveBackground = () => {
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
    // Wave properties
    const waves = [{
      y: 0.3,
      length: 0.5,
      amplitude: 20,
      speed: 0.01
    }, {
      y: 0.5,
      length: 0.7,
      amplitude: 15,
      speed: 0.015
    }, {
      y: 0.7,
      length: 0.3,
      amplitude: 25,
      speed: 0.02
    }];
    let time = 0;
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw background
      ctx.fillStyle = 'rgba(229, 231, 235, 0.8)'; // gray-200 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw each wave
      waves.forEach((wave, index) => {
        // Wave color based on index
        const colors = ['rgba(219, 234, 254, 0.4)', 'rgba(191, 219, 254, 0.3)', 'rgba(147, 197, 253, 0.2)' // blue-300
        ];
        ctx.fillStyle = colors[index];
        // Start drawing wave path
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * wave.y);
        // Draw wave points
        for (let x = 0; x < canvas.width; x++) {
          const dx = x / canvas.width * wave.length * Math.PI * 2;
          const y = Math.sin(dx + time * wave.speed) * wave.amplitude + canvas.height * wave.y;
          ctx.lineTo(x, y);
        }
        // Complete the wave shape
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      });
      // Update time for animation
      time += 0.05;
      requestAnimationFrame(animate);
    };
    // Start animation
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-gray-200" />;
};
export default WaveBackground;