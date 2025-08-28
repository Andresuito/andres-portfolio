"use client";

import { motion } from "motion/react";
import NavigationSection from "./navigation-section";
import Image from "next/image";
import Link from "next/link";

interface ProjectLayoutProps {
  children: React.ReactNode;
  sections: { id: string; title: string }[];
}

export default function ProjectLayout({ children, sections }: ProjectLayoutProps) {
  return (
    <div className="grid max-w-[1600px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 px-4 md:px-0">
      <motion.aside 
        className="md:sticky md:top-0 md:h-fit px-0 pt-6 pb-4 md:pt-12 md:pb-0 md:py-12 min-w-40"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          data-cursor="pointer" 
          className="w-full text-left" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Link href="/" className="hover:!text-foreground hover:cursor-pointer">
            <div className="flex items-center gap-2 hover:!opacity-100 group">
              <Image
                alt="Back"
                loading="lazy"
                width="18"
                height="18"
                decoding="async"
                data-nimg="1"
                className="opacity-50 group-hover:!opacity-100"
                src="/arrow-left.svg"
                style={{ color: "transparent" }}
              />
              Back
            </div>
          </Link>
        </motion.div>
        <NavigationSection sections={sections} />
      </motion.aside>

      <motion.div 
        className="w-full md:max-w-3xl lg:max-w-4xl py-6 md:py-12 flex flex-col gap-8 md:gap-12 lg:gap-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        {children}
      </motion.div>
      </div>
  );
}