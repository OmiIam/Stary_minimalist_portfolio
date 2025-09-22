
import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

const ContactSection = () => {
  const contacts = [
    {
      label: "Email",
      value: "hello@godson.dev",
      href: "mailto:hello@godson.dev"
    },
    {
      label: "LinkedIn",
      value: "godson-igoniwari",
      href: "https://linkedin.com/in/godson-igoniwari"
    },
    {
      label: "GitHub",
      value: "godsonigoniwari",
      href: "https://github.com/OmiIam"
    }
  ];

  return (
    <SectionWrapper>
      <SectionHeader 
        title="Contact"
        subtitle="Let's create something beautiful together."
      />
      
      <div className="max-w-3xl mx-auto">
        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group p-4 glass-card hover-lift transition-all duration-500 hover:shadow-lg hover:shadow-white/5 animate-stagger text-center"
              style={{
                animationDelay: `${index * 100}ms`
              }}
              aria-label={`Contact via ${contact.label}`}
            >
              <div className="space-y-2">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                  {contact.label}
                </h3>
                <p className="text-white text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm leading-relaxed mb-2">
            I'm always excited to collaborate on new projects and discuss opportunities.
          </p>
          <p className="text-gray-500 text-xs">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
