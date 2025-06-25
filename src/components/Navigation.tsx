
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
      <div className="flex flex-col space-y-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`group relative text-left transition-all duration-300 ${
              activeSection === section.id
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white scale-100'
                    : 'bg-gray-600 scale-75 group-hover:bg-gray-400 group-hover:scale-90'
                }`}
              />
              <span className="text-sm font-light tracking-wider uppercase">
                {section.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
