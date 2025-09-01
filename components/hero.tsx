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
      <div className="max-w-[700px]">
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
      </div>
    </motion.section>
  );
}
