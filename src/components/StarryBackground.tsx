
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number; // depth for parallax
  size: number;
  opacity: number;
  twinkleSpeed: number;
  baseOpacity: number;
  velocityX: number;
  velocityY: number;
  color: string;
  glowIntensity: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundStarsRef = useRef<Star[]>([]);
  const midgroundStarsRef = useRef<Star[]>([]);
  const foregroundStarsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
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
      initParticles();
    };

    const createStarLayer = (count: number, sizeRange: [number, number], opacityRange: [number, number], speedRange: [number, number]) => {
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
        const colors = ['rgba(255,255,255,', 'rgba(200,220,255,', 'rgba(255,220,200,', 'rgba(220,255,220,'];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 100 + 1,
          size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          twinkleSpeed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
          velocityX: (Math.random() - 0.5) * 0.2,
          velocityY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          glowIntensity: Math.random() * 0.5 + 0.3,
        });
      }
      return stars;
    };

    const initStars = () => {
      const density = (canvas.width * canvas.height) / 15000;
      // Background layer - many small, dim stars
      backgroundStarsRef.current = createStarLayer(
        Math.floor(density * 2), 
        [0.2, 0.8], 
        [0.1, 0.3], 
        [0.001, 0.005]
      );
      
      // Midground layer - medium stars
      midgroundStarsRef.current = createStarLayer(
        Math.floor(density * 0.7), 
        [0.8, 1.8], 
        [0.2, 0.5], 
        [0.003, 0.008]
      );
      
      // Foreground layer - fewer, larger, brighter stars
      foregroundStarsRef.current = createStarLayer(
        Math.floor(density * 0.3), 
        [1.5, 3], 
        [0.3, 0.7], 
        [0.005, 0.012]
      );
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 20; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 50 + 1,
          size: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          velocityX: (Math.random() - 0.5) * 0.5,
          velocityY: (Math.random() - 0.5) * 0.5,
          life: Math.random() * 1000,
          maxLife: 1000 + Math.random() * 2000,
        });
      }
    };

    const drawNebula = () => {
      // Create subtle nebula gradients
      const gradient1 = ctx.createRadialGradient(canvas.width * 0.2, canvas.height * 0.3, 0, canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.8);
      gradient1.addColorStop(0, 'rgba(30, 20, 60, 0.03)');
      gradient1.addColorStop(0.5, 'rgba(20, 30, 80, 0.02)');
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(canvas.width * 0.8, canvas.height * 0.7, 0, canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.6);
      gradient2.addColorStop(0, 'rgba(60, 20, 40, 0.02)');
      gradient2.addColorStop(0.5, 'rgba(80, 30, 20, 0.015)');
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStarLayer = (stars: Star[], parallaxFactor: number) => {
      stars.forEach((star) => {
        // Parallax movement based on mouse
        const parallaxX = (mousePos.current.x - canvas.width / 2) * parallaxFactor;
        const parallaxY = (mousePos.current.y - canvas.height / 2) * parallaxFactor;
        
        // Subtle drift
        star.x += star.velocityX;
        star.y += star.velocityY;
        
        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        // Calculate final position with parallax
        const finalX = star.x + parallaxX / star.z;
        const finalY = star.y + parallaxY / star.z;
        
        // Twinkle effect
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.x + star.y) * 0.3;
        star.opacity = Math.max(0.05, star.baseOpacity + twinkle);
        
        // Mouse interaction
        const dx = mousePos.current.x - finalX;
        const dy = mousePos.current.y - finalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;
        
        let currentSize = star.size;
        let currentOpacity = star.opacity;
        
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          currentOpacity = Math.min(0.9, star.opacity + influence * star.glowIntensity);
          currentSize = star.size * (1 + influence * 2);
        }
        
        // Draw star with glow
        if (currentSize > 1) {
          // Outer glow
          const glowGradient = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, currentSize * 3);
          glowGradient.addColorStop(0, star.color + (currentOpacity * 0.3) + ')');
          glowGradient.addColorStop(0.3, star.color + (currentOpacity * 0.1) + ')');
          glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(finalX, finalY, currentSize * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Core star
        ctx.beginPath();
        ctx.arc(finalX, finalY, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color + currentOpacity + ')';
        ctx.fill();
        
        // Bright center for larger stars
        if (currentSize > 1.5) {
          ctx.beginPath();
          ctx.arc(finalX, finalY, currentSize * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.min(0.8, currentOpacity * 1.5) + ')';
          ctx.fill();
        }
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life++;
        
        // Fade out over time
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = (1 - lifeRatio) * 0.3;
        
        if (particle.life > particle.maxLife) {
          // Respawn particle
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.velocityX = (Math.random() - 0.5) * 0.5;
          particle.velocityY = (Math.random() - 0.5) * 0.5;
        }
        
        // Draw glowing particle
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
        gradient.addColorStop(0, `rgba(150, 200, 255, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 150, 255, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula background
      drawNebula();
      
      // Draw star layers with different parallax factors
      drawStarLayer(backgroundStarsRef.current, 0.001); // Minimal parallax
      drawStarLayer(midgroundStarsRef.current, 0.003);  // Medium parallax
      drawStarLayer(foregroundStarsRef.current, 0.008); // Strong parallax
      
      // Draw floating particles
      drawParticles();
      
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
