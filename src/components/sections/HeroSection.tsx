import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Creative Developer',
    'UI/UX Designer',
    'Motion Designer',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
        {/* Greeting with enhanced styling */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-medium animate-fade-in-up">
            Hello, I'm
          </p>
        </div>

        {/* Refined Name with balanced typography */}
        <h1 className="relative z-20 text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 animate-fade-in-up leading-tight drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent relative z-20 drop-shadow-lg">
            Godson Igoniwari
          </span>
        </h1>

        {/* Refined Animated Title */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I'm a{' '}
            <span className="text-white font-medium relative inline-block">
              {currentText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </h2>
        </div>

        {/* Refined Description */}
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Crafting beautiful digital experiences through thoughtful design and clean code. 
          I specialize in creating interfaces that are both functional and delightful.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => onNavigate?.('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-500 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:border-white/40 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
          >
            <span className="relative z-10 text-lg">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <button 
            onClick={() => onNavigate?.('contact')}
            className="group relative px-10 py-4 border-2 border-white/30 rounded-full text-white font-medium transition-all duration-500 hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
          >
            <span className="relative z-10 text-lg">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Stats or Quick Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-light text-white mb-1">3+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-light text-white mb-1">50+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-light text-white mb-1">100%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
