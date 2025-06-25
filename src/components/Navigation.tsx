
import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`group relative px-6 py-3 border transition-all duration-500 ${
              activeSection === section.id
                ? 'border-white/30 bg-white/5 text-white shadow-lg shadow-white/10'
                : 'border-gray-600/50 bg-gray-900/20 text-gray-400 hover:border-gray-400/70 hover:bg-gray-800/30 hover:text-gray-300 hover:shadow-md hover:shadow-gray-400/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white shadow-sm shadow-white/50'
                    : 'bg-gray-500 group-hover:bg-gray-400'
                }`}
              />
              <span className="text-sm font-medium tracking-wide uppercase">
                {section.label}
              </span>
            </div>
            
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-sm opacity-0 transition-opacity duration-500 ${
              activeSection === section.id 
                ? 'opacity-20 bg-gradient-to-r from-white/10 to-transparent' 
                : 'group-hover:opacity-10 group-hover:bg-gradient-to-r group-hover:from-gray-300/10 group-hover:to-transparent'
            }`} />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
