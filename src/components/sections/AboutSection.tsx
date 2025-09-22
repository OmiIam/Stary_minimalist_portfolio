
import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

const AboutSection = () => {
  const skills = [
    { 
      category: 'Focus', 
      value: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    { 
      category: 'Passion', 
      value: 'Motion Design',
      description: 'Bringing interfaces to life with smooth animations'
    },
    { 
      category: 'Approach', 
      value: 'Minimalism',
      description: 'Less is more - clean, purposeful design'
    }
  ];

  return (
    <SectionWrapper>
      <SectionHeader 
        title="About Me"
        subtitle="I'm Godson Igoniwari, a creative developer with a passion for elegant UIs and motion design. I believe in the power of thoughtful design to create meaningful digital experiences."
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group space-y-2 p-4 glass-card hover-lift transition-all duration-500 hover:shadow-lg hover:shadow-white/5 animate-stagger"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="space-y-1">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                  {skill.category}
                </h3>
                <p className="text-white text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                  {skill.value}
                </p>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            With a background in both design and development, I bridge the gap between 
            beautiful aesthetics and functional code.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Every project is an opportunity to push boundaries and create something 
            truly exceptional.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
