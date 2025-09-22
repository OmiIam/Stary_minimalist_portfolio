
import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Minimal Dashboard",
      description: "A clean, intuitive dashboard interface built with modern web technologies. Features real-time data visualization and responsive design principles.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/OmiIam/minimal-dashboard",
      liveUrl: "https://minimal-dashboard-demo.vercel.app"
    },
    {
      title: "Interactive Portfolio",
      description: "A motion-driven portfolio experience showcasing creative development skills. Features smooth animations and engaging user interactions.",
      tech: ["Next.js", "Framer Motion", "TypeScript", "GSAP"],
      githubUrl: "https://github.com/OmiIam/interactive-portfolio",
      liveUrl: "https://interactive-portfolio.vercel.app"
    },
    {
      title: "Law Firm Website",
      description: "Professional website design for a law firm, featuring clean typography, modern layout, and client-focused user experience.",
      tech: ["React", "shadcn/ui", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/OmiIam/law-firm-website",
      liveUrl: "https://ejewekelegal.com"
    }
  ];

  return (
    <SectionWrapper>
      <SectionHeader 
        title="Projects"
        subtitle="A collection of my recent work, showcasing expertise in modern web development and design."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            More projects available on{' '}
            <a 
              href="https://github.com/OmiIam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
