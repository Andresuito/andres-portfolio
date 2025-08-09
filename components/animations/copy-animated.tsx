"use client";

import { LockIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface CopyAnimatedProps {
  code: string;
  disabled?: boolean;
}

export default function CopyAnimated({
  code,
  disabled = false,
}: CopyAnimatedProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled) return;

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <motion.div
      onClick={handleCopy}
      className={`${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className={`size-7 border-2 rounded transition-all duration-200 ease-in-out flex items-center justify-center ${
          isCopied && !disabled
            ? "border-black bg-black"
            : disabled
            ? "border-neutral-50"
            : "border-neutral-100 bg-white hover:border-neutral-200"
        }`}
        whileTap={!disabled ? { scale: 0.9 } : {}}
        transition={{ duration: 0.1 }}
      >
        <LockIcon size={12} />

        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isCopied && !disabled ? 1 : 0,
            scale: isCopied && !disabled ? 1 : 0.5,
          }}
          transition={{
            duration: 0.2,
            delay: isCopied && !disabled ? 0.1 : 0,
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
            animate={{ pathLength: isCopied && !disabled ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
