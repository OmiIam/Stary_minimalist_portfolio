
import React, { useState } from 'react';
import StarryBackground from '../components/StarryBackground';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      <StarryBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent activeSection={activeSection} />
    </div>
  );
};

export default Index;
