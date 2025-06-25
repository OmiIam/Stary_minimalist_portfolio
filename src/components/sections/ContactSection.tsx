
import React from 'react';

const ContactSection = () => {
  const contacts = [
    {
      label: "Email",
      value: "hello@godson.dev",
      href: "mailto:hello@godson.dev"
    },
    {
      label: "LinkedIn", 
      value: "godson-igoniwari",
      href: "https://linkedin.com/in/godson-igoniwari"
    },
    {
      label: "GitHub",
      value: "godsonigoniwari", 
      href: "https://github.com/godsonigoniwari"
    }
  ];

  return (
    <div className="text-center space-y-16 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          Let's Connect
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-gray-400 font-light leading-relaxed mb-16">
          Ready to bring your digital vision to life? Let's create something 
          extraordinary together.
        </p>
        
        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group block p-6 border border-gray-800/50 bg-gray-900/10 hover:border-gray-600/50 hover:bg-gray-800/20 transition-all duration-700 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <span className="text-gray-500 text-xs uppercase tracking-widest font-medium block">
                    {contact.label}
                  </span>
                  <span className="text-white font-light text-lg group-hover:text-gray-300 transition-colors duration-500 mt-1 block">
                    {contact.value}
                  </span>
                </div>
                <div className="w-6 h-px bg-white/20 group-hover:w-12 group-hover:bg-white/40 transition-all duration-700"></div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
