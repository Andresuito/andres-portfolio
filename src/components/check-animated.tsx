import { motion } from "motion/react";
import { useState } from "react";

export function CheckAnimated() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <motion.div
      onClick={() => setIsChecked(!isChecked)}
      className="flex min-h-50 cursor-pointer items-center justify-center gap-3"
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className="flex h-5 w-5 items-center justify-center rounded border-2 border-foreground transition-all duration-200 ease-in-out"
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.02 }}
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="text-foreground"
          role="img"
          aria-label="Checkmark"
          initial={{ opacity: 0 }}
          animate={{ opacity: isChecked ? 1 : 0 }}
          transition={{
            duration: isChecked ? 0.1 : 0.3,
            delay: isChecked ? 0 : 0.3,
            ease: "easeInOut",
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
      <span className="select-none text-xs">I agree to the terms and conditions</span>
    </motion.div>
  );
}
