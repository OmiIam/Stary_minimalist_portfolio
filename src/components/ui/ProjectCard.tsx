import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  githubUrl, 
  liveUrl, 
  index 
}: ProjectCardProps) => {
  return (
    <article 
      className="group relative p-4 glass-card hover-lift transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-white/5 animate-stagger"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      <div className="space-y-3">
        <h3 className="text-lg text-white font-light group-hover:text-gray-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-xs leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 pt-1">
          {tech.map((techItem, techIndex) => (
            <span 
              key={techIndex}
              className="text-xs text-gray-500 uppercase tracking-wide px-2 py-1 border border-gray-700 rounded-sm group-hover:border-gray-600 group-hover:text-gray-400 transition-colors duration-300"
            >
              {techItem}
            </span>
          ))}
        </div>
        
        {(githubUrl || liveUrl) && (
          <div className="flex gap-2 pt-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-xs"
                aria-label={`View ${title} on GitHub`}
              >
                GitHub →
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-xs"
                aria-label={`View live demo of ${title}`}
              >
                Live Demo →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
