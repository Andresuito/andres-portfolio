import { Frown, Meh, Smile } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FeedbackAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

  return (
    <div className="relative flex min-h-50 items-center justify-center">
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
            className="relative flex h-10 items-center rounded-lg bg-muted bucket:bg-[#8b2e2e] px-3 font-medium shadow outline-none dark:bg-muted"
            layoutId="feedback-container"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.span
              className="block select-none bucket:text-[#FF9A9A] text-foreground text-xs dark:text-foreground"
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
                  className="absolute top-[calc(50%-80px)] left-[calc(50%-130px)] z-40 select-none text-nowrap bucket:text-[#FF9A9A] text-foreground text-xs opacity-100 sm:left-[calc(50%-100px)] lg:left-[calc(50%-133px)] dark:text-foreground"
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
                className="absolute top-1/2 left-1/2 z-30 h-[192px] w-[260px] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-card bucket:bg-[#7a1a1a] p-1 shadow-sm outline-none sm:w-[280px] lg:w-[300px] dark:bg-card"
                layoutId="feedback-container"
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
              >
                <form className="w-full rounded-lg bg-background bucket:bg-[#620000] dark:bg-background">
                  <textarea
                    autoFocus
                    className="!outline-none h-32 w-full resize-none rounded-t-lg bg-background bucket:bg-[#620000] p-3 bucket:text-[#FF9A9A] text-foreground text-xs dark:bg-background dark:text-foreground"
                    placeholder=""
                    onChange={(e) => setHasText(e.target.value.length > 0)}
                  />
                  <div className="relative flex h-12 items-center px-2.5">
                    <svg
                      className="absolute top-[-1px] right-0 left-0 w-full"
                      height="2"
                      viewBox="0 0 352 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 1H352"
                        stroke="currentColor"
                        strokeDasharray="4 4"
                        className="bucket:text-[#FF9A9A]/20 text-border dark:text-border"
                      ></path>
                    </svg>
                    <div className="flex w-full items-center justify-between">
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
                          onClick={() => setSelectedFace(selectedFace === "happy" ? null : "happy")}
                          className={`rounded-md p-1 transition-colors ${
                            selectedFace === "happy"
                              ? "bg-green-100 bucket:bg-green-900/30 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                              : "bucket:text-[#ffb3b3] text-muted-foreground hover:text-green-500 dark:text-muted-foreground"
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
                            setSelectedFace(selectedFace === "neutral" ? null : "neutral")
                          }
                          className={`rounded-md p-1 transition-colors ${
                            selectedFace === "neutral"
                              ? "bg-yellow-100 bucket:bg-yellow-900/30 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bucket:text-[#ffb3b3] text-muted-foreground hover:text-yellow-500 dark:text-muted-foreground"
                          }`}
                        >
                          <Meh size={14} />
                        </motion.button>
                        <motion.button
                          type="button"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.4 }}
                          onClick={() => setSelectedFace(selectedFace === "sad" ? null : "sad")}
                          className={`rounded-md p-1 transition-colors ${
                            selectedFace === "sad"
                              ? "bg-red-100 bucket:bg-red-900/30 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : "bucket:text-[#ffb3b3] text-muted-foreground hover:text-red-500 dark:text-muted-foreground"
                          }`}
                        >
                          <Frown size={14} />
                        </motion.button>
                      </motion.div>
                      <button
                        type="button"
                        className="flex min-h-6 min-w-[104px] items-center justify-center rounded-md bg-primary bucket:bg-[#FF9A9A] px-2 bucket:text-[#620000] text-primary-foreground text-xs transition-colors bucket:hover:bg-[#ffb3b3] hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground"
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
