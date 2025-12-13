import { useEffect, useRef } from 'react';
const MovingGridBackground = () => {
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
    // Grid properties
    const gridSize = 30;
    const dotSize = 1;
    let angle = 0;
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(203, 213, 225, 0.7)'; // Light gray color
      // Calculate the number of dots based on canvas size
      const numDotsX = Math.ceil(canvas.width / gridSize);
      const numDotsY = Math.ceil(canvas.height / gridSize);
      // Draw the grid with slight movement
      for (let x = 0; x <= numDotsX; x++) {
        for (let y = 0; y <= numDotsY; y++) {
          // Add some movement based on sine wave
          const offsetX = Math.sin(angle + y * 0.1) * 5;
          const offsetY = Math.cos(angle + x * 0.1) * 5;
          // Calculate position
          const posX = x * gridSize + offsetX;
          const posY = y * gridSize + offsetY;
          // Draw dot
          ctx.beginPath();
          ctx.arc(posX, posY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Update angle for next frame
      angle += 0.01;
      requestAnimationFrame(animate);
    };
    // Start animation
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-gray-200" style={{
    opacity: 0.7
  }} />;
};
export default MovingGridBackground;