"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function CheckAnimated() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <motion.div
      onClick={() => setIsChecked(!isChecked)}
      className="flex items-center gap-3 cursor-pointer"
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className={`w-5 h-5 border-2 rounded transition-all duration-200 ease-in-out flex items-center justify-center ${
          isChecked
            ? "border-black bg-black"
            : "border-neutral-300 bg-white hover:border-neutral-400"
        }`}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isChecked ? 1 : 0 }}
          transition={{ 
            duration: isChecked ? 0.1 : 0.3, 
            delay: isChecked ? 0 : 0.3,
            ease: "easeInOut" 
          }}
        >
          <motion.path
            d="M4 12l5 5L20 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            pathLength={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isChecked ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
      <span className="text-sm text-neutral-800 select-none">
        I agree to the terms and conditions
      </span>
    </motion.div>
  );
}
