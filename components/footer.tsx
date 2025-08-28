'use client';

import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer 
      className="flex flex-row mt-5 justify-between border-t border-opacity-40 mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 text-base sm:text-lg items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
    >
      <div className="flex items-center">
        {/* Empty left side to match hero layout */}
      </div>
      
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
      >
        <a
          href="https://x.com/andresuiito"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">X</span>
        </a>
        <span className="mx-1 sm:mx-2">/</span>
        <a
          href="https://www.linkedin.com/in/andres-br"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">LinkedIn</span>
        </a>
        <span className="mx-1 sm:mx-2">/</span>
        <a
          href="https://github.com/Andresuito"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">GitHub</span>
        </a>
        <span className="mx-1 sm:mx-2">/</span>
        <a
          href="mailto:contact@andresbr.com"
          target="_blank"
          className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white"
        >
          <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10">Email</span>
        </a>
      </motion.div>
    </motion.footer>
  );
}
