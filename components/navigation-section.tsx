"use client";

import { motion } from "motion/react";

interface NavigationSectionProps {
  sections: { id: string; title: string }[];
}

export default function NavigationSection({ sections }: NavigationSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav 
      className="mt-4 md:mt-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <div className="flex md:flex-col items-start gap-2 md:gap-2 flex-wrap md:flex-nowrap">
        {sections.map((section, index) => (
          <motion.button 
            key={section.id} 
            className="flex items-start"
            onClick={() => scrollToSection(section.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + (index * 0.1) }}
          >
            <p className="transition-colors cursor-pointer text-left hover:text-foreground text-sm md:text-base">
              {section.title}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}