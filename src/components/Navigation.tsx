import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const Navigation = ({ activeSection, setActiveSection, isOpen, onClose, isMobile }: NavigationProps) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Desktop sidebar
  if (!isMobile) {
    return (
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden sm:block">
        <div className="flex flex-col space-y-5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`group relative text-left transition-colors duration-300 ${
                activeSection === section.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="text-sm font-light tracking-wide uppercase relative">
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white transition-all duration-300"></span>
                )}
              </span>
            </button>
          ))}
        </div>
      </nav>
    );
  }

  // Mobile sidebar (drawer)
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 transition-opacity duration-300 sm:hidden"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}
      {/* Sidebar drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-black/80 backdrop-blur-sm z-30 transform transition-transform duration-300 sm:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div className="flex flex-col space-y-4 mt-20 px-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                if (onClose) onClose();
              }}
              className={`group relative text-left transition-colors duration-300 py-2 ${
                activeSection === section.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="text-sm font-light tracking-wide uppercase relative">
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white transition-all duration-300"></span>
                )}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
