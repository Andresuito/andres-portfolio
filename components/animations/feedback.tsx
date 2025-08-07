"use client";

import { Frown, Meh, Smile } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FeedbackAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

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
            className="relative flex h-10 items-center rounded-lg shadow px-3 font-medium outline-none"
            layoutId="feedback-container"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.span
              className="block text-sm text-neutral-800 select-none"
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
                  className="absolute text-sm select-none text-neutral-800 opacity-100 z-40 left-[calc(50%-134px)] sm:left-[calc(50%-154px)] lg:left-[calc(50%-166px)] top-[calc(50%-79px)]"
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
                className="absolute w-[300px] sm:w-[340px] lg:w-[364px] max-w-[calc(100vw-2rem)] rounded-xl bg-stone-50 p-1 shadow-sm outline-none h-[192px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
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
                    <div className="flex items-center justify-between w-full">
                      <motion.div
                        className="flex gap-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.button
                          type="button"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                          onClick={() =>
                            setSelectedFace(
                              selectedFace === "happy" ? null : "happy"
                            )
                          }
                          className={`p-1 rounded-md transition-colors ${
                            selectedFace === "happy"
                              ? "bg-green-100 text-green-600"
                              : "text-neutral-400 hover:text-green-500"
                          }`}
                        >
                          <Smile size={14} />
                        </motion.button>
                        <motion.button
                          type="button"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.3 }}
                          onClick={() =>
                            setSelectedFace(
                              selectedFace === "neutral" ? null : "neutral"
                            )
                          }
                          className={`p-1 rounded-md transition-colors ${
                            selectedFace === "neutral"
                              ? "bg-yellow-100 text-yellow-600"
                              : "text-neutral-400 hover:text-yellow-500"
                          }`}
                        >
                          <Meh size={14} />
                        </motion.button>
                        <motion.button
                          type="button"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.4 }}
                          onClick={() =>
                            setSelectedFace(
                              selectedFace === "sad" ? null : "sad"
                            )
                          }
                          className={`p-1 rounded-md transition-colors ${
                            selectedFace === "sad"
                              ? "bg-red-100 text-red-600"
                              : "text-neutral-400 hover:text-red-500"
                          }`}
                        >
                          <Frown size={14} />
                        </motion.button>
                      </motion.div>
                      <button
                        type="button"
                        className="flex !h-6 !w-[104px] items-center justify-center rounded-md px-2 !text-xs bg-black text-white hover:bg-neutral-800 transition-colors"
                        onClick={() => {
                          setIsExpanded(false);
                          setHasText(false);
                          setSelectedFace(null);
                        }}
                      >
                        <span style={{ opacity: 1 }}>
                          <span>Send feedback</span>
                        </span>
                      </button>
                    </div>
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
