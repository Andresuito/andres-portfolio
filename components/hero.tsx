"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.section
      className="mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-10">
          <motion.p
            className="text-6xl max-w-[700px] font-sans leading-[1.18]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            I'm{" "}
            <span className="font-serif font-medium italic bg-yellow-100 ">
              Andres
            </span>
            , I use <span className="bg-red-100">code</span> to turn ideas into
            seamless <br /> <span className="bg-sky-100 ">web experiences</span>
            .
          </motion.p>
          <motion.p
            className="text-lg text-[#6b7280] leading-[1.6] max-w-[550px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            Based in Spain, I specialize in smooth animations and interactive
            components. My work centers on interfaces that feel intuitive and
            adapt to tomorrow's standards.
          </motion.p>
        </div>
        <div className="flex items-start justify-start lg:justify-end">
          <motion.div 
            className="flex flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <a
              href="https://x.com/andresuiito"
              target="_blank"
              className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white text-center text-lg"
            >
              <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">X</span>
            </a>
            <a
              href="mailto:contact@andresbr.com"
              target="_blank"
              className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white text-center text-lg"
            >
              <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">Email</span>
            </a>
            <a
              href="https://github.com/Andresuito"
              target="_blank"
              className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white text-center text-lg"
            >
              <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andres-br"
              target="_blank"
              className="relative px-2 py-1 overflow-hidden group transition-colors duration-500 hover:text-white text-center text-lg"
            >
              <span className="absolute inset-0 bg-black transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
