import React from 'react';

interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  index: number;
}

const ContactLink = ({ label, value, href, index }: ContactLinkProps) => {
  return (
    <a
      href={href}
      className="group block p-4 glass-card hover-lift transition-all duration-500 hover:shadow-lg hover:shadow-white/5 animate-stagger"
      style={{
        animationDelay: `${index * 100}ms`
      }}
      aria-label={`Contact via ${label}`}
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm uppercase tracking-wide group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </span>
        <span className="text-white font-light group-hover:text-gray-300 transition-colors duration-300">
          {value}
        </span>
      </div>
    </a>
  );
};

export default ContactLink;
