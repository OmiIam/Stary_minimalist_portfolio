
import React from 'react';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-8">
        <div className="relative">
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeSection === 'about'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
            }`}
          >
            <AboutSection />
          </div>
          
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeSection === 'projects'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
            }`}
          >
            <ProjectsSection />
          </div>
          
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeSection === 'contact'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
            }`}
          >
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
