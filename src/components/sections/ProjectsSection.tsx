
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Neural Dashboard",
      description: "AI-powered analytics interface with real-time data visualization",
      tech: "React • TypeScript • D3.js",
      year: "2024"
    },
    {
      title: "Quantum Portfolio",
      description: "Interactive 3D portfolio experience with physics-based animations",
      tech: "Three.js • GSAP • WebGL",
      year: "2024"
    },
    {
      title: "Void Design System",
      description: "Comprehensive design system for enterprise applications",
      tech: "Figma • Storybook • React",
      year: "2023"
    }
  ];

  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          Selected Works
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-8 border border-gray-800/50 bg-gray-900/10 hover:border-gray-600/50 hover:bg-gray-800/20 transition-all duration-700 cursor-pointer backdrop-blur-sm"
          >
            {/* Project number */}
            <div className="absolute top-6 right-6 text-gray-600 text-sm font-mono">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl text-white font-medium group-hover:text-gray-300 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                </div>
                <div className="w-12 h-px bg-white/20 group-hover:w-24 group-hover:bg-white/40 transition-all duration-700"></div>
              </div>
              
              <p className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  {project.tech}
                </span>
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
