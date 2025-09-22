import React, { useState, useEffect } from 'react';
import StarryBackground from '../components/StarryBackground';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';
import HeroSection from '../components/sections/HeroSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile with proper resize handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <StarryBackground />
      
      {/* Hamburger for mobile */}
      {isMobile && (
        <button
          className="fixed top-6 left-6 z-30 bg-black/60 rounded-full p-2 text-white focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      )}
      
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isMobile={isMobile}
      />
      
      {/* Hero Section */}
      {activeSection === 'hero' && <HeroSection onNavigate={setActiveSection} />}
      
      {/* Main Content for other sections */}
      {activeSection !== 'hero' && <MainContent activeSection={activeSection} />}
    </div>
  );
};

export default Index;
