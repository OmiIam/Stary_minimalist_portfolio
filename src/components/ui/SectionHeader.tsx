import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = '' }: SectionHeaderProps) => {
  return (
    <header className={`space-y-2 ${className}`}>
      <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-px bg-gray-400 mx-auto"></div>
    </header>
  );
};

export default SectionHeader;
