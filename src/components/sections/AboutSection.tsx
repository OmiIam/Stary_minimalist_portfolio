
import React from 'react';

const AboutSection = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-extralight text-white tracking-tight">
          About Me
        </h1>
        <div className="w-24 h-px bg-gray-400 mx-auto"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
          I'm Godson Igoniwari, a creative developer with a passion for elegant UIs and 
          motion design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="space-y-2">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Focus</h3>
          <p className="text-white text-lg font-light">UI/UX Design</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Passion</h3>
          <p className="text-white text-lg font-light">Motion Design</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Approach</h3>
          <p className="text-white text-lg font-light">Minimalism</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
