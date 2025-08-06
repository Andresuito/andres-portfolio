"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FeedbackAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasText, setHasText] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {isExpanded && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            setIsExpanded(false);
            setHasText(false);
          }}
        />
      )}
      <div className="relative z-20 flex items-center justify-center">
        {!isExpanded && (
          <motion.button
            onClick={() => {
              setIsExpanded(true);
            }}
            className="relative flex h-10 items-center rounded-lg bg-white shadow px-3 font-medium outline-none hover:bg-gray-50 transition-colors"
            layoutId="feedback-container"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.span
              className="block text-sm text-gray-800"
              layoutId="feedback-text"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              Feedback
            </motion.span>
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          {isExpanded && (
            <>
              {!hasText && (
                <motion.h2
                  className="absolute text-sm text-gray-800 opacity-100 z-40"
                  style={{
                    left: "calc(50% - 182px + 16px)",
                    top: "calc(50% - 96px + 17px)",
                  }}
                  layoutId="feedback-text"
                  exit={{ opacity: 0, scale: 0.1 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  Feedback
                </motion.h2>
              )}
              <motion.div
                className="absolute w-[364px] max-w-[90vw] rounded-xl bg-[#F5F6F7] p-1 shadow-sm outline-none h-[192px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                layoutId="feedback-container"
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
              >
                <form className="rounded-lg bg-white w-full">
                  <textarea
                    autoFocus
                    className="h-32 w-full resize-none rounded-t-lg bg-white p-3 text-sm text-black !outline-none"
                    placeholder=""
                    onChange={(e) => setHasText(e.target.value.length > 0)}
                  />
                  <div className="relative flex h-12 items-center px-2.5">
                    <svg
                      className="absolute left-0 right-0 top-[-1px] w-full"
                      height="2"
                      viewBox="0 0 352 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 1H352"
                        stroke="#E6E7E8"
                        strokeDasharray="4 4"
                      ></path>
                    </svg>
                    <button
                      type="submit"
                      className="ml-auto flex !h-6 !w-[104px] items-center justify-center rounded-md px-2 !text-xs bg-black text-white hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setIsExpanded(false);
                        setHasText(false);
                      }}
                    >
                      <span style={{ opacity: 1 }}>
                        <span>Send feedback</span>
                      </span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
