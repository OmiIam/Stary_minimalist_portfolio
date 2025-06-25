
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Minimal Dashboard",
      description: "Clean interface design",
      tech: "React, TypeScript"
    },
    {
      title: "Interactive Portfolio",
      description: "Motion-driven experience",
      tech: "Next.js, Framer Motion"
    },
    {
      title: "Brand Identity",
      description: "Visual system design",
      tech: "Figma, After Effects"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-extralight text-white tracking-tight">
          Projects
        </h1>
        <div className="w-24 h-px bg-gray-400 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer"
          >
            <div className="space-y-4">
              <h3 className="text-xl text-white font-light group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {project.description}
              </p>
              <div className="pt-2">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {project.tech}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
