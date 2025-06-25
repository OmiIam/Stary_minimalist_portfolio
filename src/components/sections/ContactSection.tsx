
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
    <div className="text-center space-y-12">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-extralight text-white tracking-tight">
          Contact
        </h1>
        <div className="w-24 h-px bg-gray-400 mx-auto"></div>
      </div>
      
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
          Let's create something beautiful together.
        </p>
        
        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group block p-4 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  {contact.label}
                </span>
                <span className="text-white font-light group-hover:text-gray-300 transition-colors">
                  {contact.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
