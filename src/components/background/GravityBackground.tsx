import React, { useEffect, useRef } from 'react';

const GravityBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -9999, y: -9999 };

        // Configuration
        const PARTICLE_COUNT = 80;
        const CONNECTION_DISTANCE = 150;
        const MOUSE_RADIUS = 200;
        // Custom Color Theme
        const BG_COLOR = '#ccd5ae'; // Moss Green Theme
        const PARTICLE_COLOR = 'rgba(15, 23, 42, 0.9)'; // Darker Slate
        const LINE_COLOR = 'rgba(255, 255, 255, 0.3)'; // Light lines for contrast on darker background

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 1.5; // Velocity
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            update(w: number, h: number) {
                // Mouse Interaction (Antigravity/Gravity Effect)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                // Physics: Particles move away from cursor (Repulsion) or towards (Attraction)
                // Let's go with a gentle repulsion to simulate "pushing" the particles
                const maxDistance = MOUSE_RADIUS;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;

                const directionX = (forceDirectionX * force * this.density);
                const directionY = (forceDirectionY * force * this.density);

                if (distance < MOUSE_RADIUS) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Return to natural movement
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }

                // Normal Movement
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Fill Background
            ctx.fillStyle = BG_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Particles & Connections
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(canvas.width, canvas.height);
                particles[i].draw();

                // Draw Lines using Nested Loop (Constellation)
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.strokeStyle = LINE_COLOR;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        // Setup
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-50"
        />
    );
};

export default GravityBackground;
