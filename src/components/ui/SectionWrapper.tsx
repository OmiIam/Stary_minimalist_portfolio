import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  return (
    <section className={`text-center space-y-6 md:space-y-8 ${className}`} role="main">
      {children}
    </section>
  );
};

export default SectionWrapper;
