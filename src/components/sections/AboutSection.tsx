
import React from 'react';

const AboutSection = () => {
  return (
    <div className="text-center space-y-12 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight leading-none">
          Godson Igoniwari
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
          Creative Developer & UI Designer
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          Crafting elegant digital experiences through minimalist design and 
          motion-driven interfaces. Passionate about creating seamless user journeys 
          that balance aesthetics with functionality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        <div className="space-y-4 group">
          <div className="w-12 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto group-hover:from-white group-hover:to-white/50 transition-all duration-500"></div>
          <h3 className="text-gray-500 text-xs uppercase tracking-widest font-medium">Expertise</h3>
          <p className="text-white text-xl font-light">UI/UX Design</p>
        </div>
        <div className="space-y-4 group">
          <div className="w-12 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto group-hover:from-white group-hover:to-white/50 transition-all duration-500"></div>
          <h3 className="text-gray-500 text-xs uppercase tracking-widest font-medium">Focus</h3>
          <p className="text-white text-xl font-light">Motion Design</p>
        </div>
        <div className="space-y-4 group">
          <div className="w-12 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto group-hover:from-white group-hover:to-white/50 transition-all duration-500"></div>
          <h3 className="text-gray-500 text-xs uppercase tracking-widest font-medium">Philosophy</h3>
          <p className="text-white text-xl font-light">Minimalism</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
