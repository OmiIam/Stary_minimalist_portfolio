
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
  pulsePhase: number;
  rotation: number;
  rotationSpeed: number;
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
  color: string;
  trail: { x: number; y: number; opacity: number }[];
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  pulsePhase: number;
  driftX: number;
  driftY: number;
}

interface Dust {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  driftX: number;
  driftY: number;
  rotation: number;
  rotationSpeed: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundStarsRef = useRef<Star[]>([]);
  const midgroundStarsRef = useRef<Star[]>([]);
  const foregroundStarsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const nebulaeRef = useRef<Nebula[]>([]);
  const dustRef = useRef<Dust[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
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
      initNebulae();
      initDust();
    };

    const createStarLayer = (count: number, sizeRange: [number, number], opacityRange: [number, number], speedRange: [number, number]) => {
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        const baseOpacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
        const colors = ['rgba(255,255,255,', 'rgba(200,220,255,', 'rgba(255,220,200,', 'rgba(220,255,220,', 'rgba(255,200,255,', 'rgba(200,255,255,'];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 200 + 1,
          size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          twinkleSpeed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          glowIntensity: Math.random() * 0.7 + 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
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
      for (let i = 0; i < 30; i++) {
        const colors = ['rgba(150,200,255,', 'rgba(255,200,150,', 'rgba(200,255,200,', 'rgba(255,150,255,'];
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 100 + 1,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          velocityX: (Math.random() - 0.5) * 0.8,
          velocityY: (Math.random() - 0.5) * 0.8,
          life: Math.random() * 1000,
          maxLife: 1000 + Math.random() * 3000,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: [],
        });
      }
    };

    const initNebulae = () => {
      nebulaeRef.current = [];
      for (let i = 0; i < 5; i++) {
        const colors = ['rgba(30,20,60,', 'rgba(60,20,40,', 'rgba(20,40,60,', 'rgba(40,20,40,'];
        nebulaeRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.05 + 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    const initDust = () => {
      dustRef.current = [];
      const dustCount = Math.floor((canvas.width * canvas.height) / 8000); // Density based on screen size
      
      for (let i = 0; i < dustCount; i++) {
        dustRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 150 + 1, // Depth for parallax
          size: Math.random() * 0.8 + 0.2, // Very small dust particles
          opacity: Math.random() * 0.15 + 0.05, // Very subtle
          velocityX: (Math.random() - 0.5) * 0.05, // Very slow movement
          velocityY: (Math.random() - 0.5) * 0.05,
          driftX: (Math.random() - 0.5) * 0.02, // Even slower drift
          driftY: (Math.random() - 0.5) * 0.02,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005, // Very slow rotation
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.002 + 0.001, // Very slow twinkle
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
        // Enhanced parallax with scroll
        const parallaxX = (mousePos.current.x - canvas.width / 2) * parallaxFactor + scrollY.current * 0.1;
        const parallaxY = (mousePos.current.y - canvas.height / 2) * parallaxFactor + scrollY.current * 0.05;
        
        // Enhanced drift with rotation
        star.x += star.velocityX;
        star.y += star.velocityY;
        star.rotation += star.rotationSpeed;
        star.pulsePhase += 0.01;
        
        // Wrap around screen
        if (star.x < -100) star.x = canvas.width + 100;
        if (star.x > canvas.width + 100) star.x = -100;
        if (star.y < -100) star.y = canvas.height + 100;
        if (star.y > canvas.height + 100) star.y = -100;
        
        // Calculate final position with enhanced parallax
        const finalX = star.x + parallaxX / star.z;
        const finalY = star.y + parallaxY / star.z;
        
        // Enhanced twinkle with pulse
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.x + star.y) * 0.4;
        const pulse = Math.sin(star.pulsePhase) * 0.2;
        star.opacity = Math.max(0.05, star.baseOpacity + twinkle + pulse);
        
        // Enhanced mouse interaction
        const dx = mousePos.current.x - finalX;
        const dy = mousePos.current.y - finalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 400;
        
        let currentSize = star.size;
        let currentOpacity = star.opacity;
        
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          currentOpacity = Math.min(0.95, star.opacity + influence * star.glowIntensity);
          currentSize = star.size * (1 + influence * 3);
        }
        
        // Enhanced star drawing with 3D effects
        if (currentSize > 0.5) {
          // Multiple glow layers for depth
          const glowLayers = [
            { radius: currentSize * 5, opacity: currentOpacity * 0.1 },
            { radius: currentSize * 3, opacity: currentOpacity * 0.2 },
            { radius: currentSize * 1.5, opacity: currentOpacity * 0.3 }
          ];
          
          glowLayers.forEach(layer => {
            const glowGradient = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, layer.radius);
            glowGradient.addColorStop(0, star.color + layer.opacity + ')');
            glowGradient.addColorStop(0.5, star.color + (layer.opacity * 0.5) + ')');
            glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(finalX, finalY, layer.radius, 0, Math.PI * 2);
            ctx.fill();
          });
        }
        
        // Core star with rotation
        ctx.save();
        ctx.translate(finalX, finalY);
        ctx.rotate(star.rotation);
        
        // Draw star shape for larger stars
        if (currentSize > 2) {
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const x = Math.cos(angle) * currentSize;
            const y = Math.sin(angle) * currentSize;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fillStyle = star.color + currentOpacity + ')';
          ctx.fill();
        } else {
          // Simple circle for smaller stars
          ctx.beginPath();
          ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = star.color + currentOpacity + ')';
          ctx.fill();
        }
        
        // Bright center
        if (currentSize > 1) {
          ctx.beginPath();
          ctx.arc(0, 0, currentSize * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.min(0.9, currentOpacity * 1.2) + ')';
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
        if (particle.trail.length > 8) particle.trail.shift();
        
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life++;
        
        // Enhanced fade out
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = (1 - lifeRatio) * 0.5;
        
        if (particle.life > particle.maxLife) {
          // Respawn particle
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.velocityX = (Math.random() - 0.5) * 0.8;
          particle.velocityY = (Math.random() - 0.5) * 0.8;
          particle.trail = [];
        }
        
        // Draw trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * 0.3;
          const trailSize = particle.size * (trailIndex / particle.trail.length);
          
          const gradient = ctx.createRadialGradient(trailPoint.x, trailPoint.y, 0, trailPoint.x, trailPoint.y, trailSize * 2);
          gradient.addColorStop(0, particle.color + trailOpacity + ')');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(trailPoint.x, trailPoint.y, trailSize * 2, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Draw main particle
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
        gradient.addColorStop(0, particle.color + particle.opacity + ')');
        gradient.addColorStop(0.5, particle.color + (particle.opacity * 0.5) + ')');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawNebulae = () => {
      nebulaeRef.current.forEach((nebula) => {
        nebula.x += nebula.driftX;
        nebula.y += nebula.driftY;
        nebula.pulsePhase += 0.005;
        
        // Wrap around
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius;
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;
        
        const pulse = Math.sin(nebula.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = nebula.opacity * pulse;
        
        // Create nebula gradient
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius);
        gradient.addColorStop(0, nebula.color + currentOpacity + ')');
        gradient.addColorStop(0.3, nebula.color + (currentOpacity * 0.5) + ')');
        gradient.addColorStop(0.7, nebula.color + (currentOpacity * 0.2) + ')');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDust = () => {
      dustRef.current.forEach((dust) => {
        // Enhanced parallax with scroll and mouse
        const parallaxX = (mousePos.current.x - canvas.width / 2) * 0.001 + scrollY.current * 0.02;
        const parallaxY = (mousePos.current.y - canvas.height / 2) * 0.001 + scrollY.current * 0.01;
        
        // Update position with multiple movement types
        dust.x += dust.velocityX + dust.driftX;
        dust.y += dust.velocityY + dust.driftY;
        dust.rotation += dust.rotationSpeed;
        dust.twinklePhase += dust.twinkleSpeed;
        
        // Wrap around screen
        if (dust.x < -50) dust.x = canvas.width + 50;
        if (dust.x > canvas.width + 50) dust.x = -50;
        if (dust.y < -50) dust.y = canvas.height + 50;
        if (dust.y > canvas.height + 50) dust.y = -50;
        
        // Calculate final position with parallax
        const finalX = dust.x + parallaxX / dust.z;
        const finalY = dust.y + parallaxY / dust.z;
        
        // Subtle twinkle effect
        const twinkle = Math.sin(dust.twinklePhase) * 0.1;
        const currentOpacity = Math.max(0.02, dust.opacity + twinkle);
        
        // Mouse interaction - dust particles get slightly brighter when mouse is near
        const dx = mousePos.current.x - finalX;
        const dy = mousePos.current.y - finalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        let finalOpacity = currentOpacity;
        if (distance < maxDistance) {
          const influence = (maxDistance - distance) / maxDistance;
          finalOpacity = Math.min(0.3, currentOpacity + influence * 0.1);
        }
        
        // Draw dust particle with subtle glow
        ctx.save();
        ctx.translate(finalX, finalY);
        ctx.rotate(dust.rotation);
        
        // Very subtle glow for larger dust particles
        if (dust.size > 0.5) {
          const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, dust.size * 2);
          glowGradient.addColorStop(0, `rgba(200, 200, 255, ${finalOpacity * 0.3})`);
          glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(0, 0, dust.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Main dust particle - very subtle
        ctx.beginPath();
        ctx.arc(0, 0, dust.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 180, 200, ${finalOpacity})`;
        ctx.fill();
        
        ctx.restore();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula background
      drawNebula();
      
      // Draw dynamic nebulae
      drawNebulae();
      
      // Draw dust particles (behind stars for depth)
      drawDust();
      
      // Draw star layers with enhanced parallax factors
      drawStarLayer(backgroundStarsRef.current, 0.002); // Enhanced minimal parallax
      drawStarLayer(midgroundStarsRef.current, 0.005);  // Enhanced medium parallax
      drawStarLayer(foregroundStarsRef.current, 0.012); // Enhanced strong parallax
      
      // Draw enhanced floating particles
      drawParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
