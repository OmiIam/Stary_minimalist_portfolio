import React, { useMemo } from 'react';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const sections = useMemo(() => [
    { id: 'about', component: AboutSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'contact', component: ContactSection },
  ], []);

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen pl-0 md:pl-40" role="main">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        <div className="relative">
          {sections.map(({ id, component: Component }) => (
            <div
              key={id}
              className={`transition-all duration-700 ease-in-out ${
                activeSection === id
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none absolute inset-0'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
