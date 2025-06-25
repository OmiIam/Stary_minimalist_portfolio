
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  baseOpacity: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 12000);
      starsRef.current = [];
      
      for (let i = 0; i < numStars; i++) {
        const baseOpacity = Math.random() * 0.3 + 0.1; // Much lower base opacity
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3, // Smaller stars
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          twinkleSpeed: Math.random() * 0.01 + 0.003,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star) => {
        // Reset to base opacity
        star.opacity = star.baseOpacity;
        
        // Subtle twinkle effect
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed) * 0.05;
        star.opacity += twinkle;
        
        // Mouse interaction - much more responsive
        const dx = mousePos.current.x - star.x;
        const dy = mousePos.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          // Stronger interaction effect
          star.opacity = Math.min(0.8, star.opacity + influence * 0.6);
          star.size = Math.min(2.5, star.size + influence * 1.2);
          
          // Add subtle movement towards mouse
          star.x += (dx / distance) * influence * 0.3;
          star.y += (dy / distance) * influence * 0.3;
        }
        
        // Clamp opacity to prevent complete invisibility
        star.opacity = Math.max(0.05, Math.min(0.8, star.opacity));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${star.opacity})`; // Slightly warmer white
        ctx.fill();
        
        // Add subtle glow for stars near mouse
        if (distance < maxDistance) {
          const glowInfluence = (maxDistance - distance) / maxDistance;
          if (glowInfluence > 0.5) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size + 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${glowInfluence * 0.1})`;
            ctx.fill();
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default StarryBackground;
