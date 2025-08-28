"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}