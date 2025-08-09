import CheckAnimated from "@/components/animations/check-animated";
import CopyAnimated from "@/components/animations/copy-animated";
import FeedbackAnimation from "@/components/animations/feedback";
import NotificationAnimation from "@/components/animations/notification";
import RippleAnimation from "@/components/animations/ripple";
import { Navigation } from "@/components/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Animations - Andrés B.R",
  description:
    "Collection of interactive web animations including feedback, notification, and ripple effects built with React and modern CSS.",
  openGraph: {
    title: "Web Animations - Andrés B.R",
    description:
      "Collection of interactive web animations including feedback, notification, and ripple effects built with React and modern CSS.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Web Animations - Andrés B.R",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Animations - Andrés B.R",
    description:
      "Collection of interactive web animations including feedback, notification, and ripple effects built with React and modern CSS.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Web Animations - Andrés B.R",
      },
    ],
  },
};

export default function AnimationsPage() {
  return (
    <div className="min-h-screen relative p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-stretch">
          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Feedback</h2>
            <div className="w-full relative py-20 outline outline-neutral-100 bg-neutral-50 flex-1 flex justify-center items-center min-h-[400px]">
              <div className="absolute top-4 right-4 z-50">
                <CopyAnimated
                  code={`"use client";

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
                          className={\`p-1 rounded-md transition-colors \${
                            selectedFace === "happy"
                              ? "bg-green-100 text-green-600"
                              : "text-neutral-400 hover:text-green-500"
                          }\`}
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
                          className={\`p-1 rounded-md transition-colors \${
                            selectedFace === "neutral"
                              ? "bg-yellow-100 text-yellow-600"
                              : "text-neutral-400 hover:text-yellow-500"
                          }\`}
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
                          className={\`p-1 rounded-md transition-colors \${
                            selectedFace === "sad"
                              ? "bg-red-100 text-red-600"
                              : "text-neutral-400 hover:text-red-500"
                          }\`}
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
}`}
                  disabled
                />
              </div>
              <FeedbackAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Notification</h2>
            <div className="w-full relative py-20 outline outline-neutral-100 bg-neutral-50 flex-1 flex justify-center items-center min-h-[400px]">
              <div className="absolute top-4 right-4 z-50">
                <CopyAnimated
                  code={`"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationAnimation() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isCountAnimating, setIsCountAnimating] = useState(false);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  const addNotification = () => {
    setNotificationCount((prev) => {
      const newCount = prev + 1;
      if (newCount > 1 && newCount <= 10 && !isCountAnimating) {
        setIsCountAnimating(true);
        setTimeout(() => setIsCountAnimating(false), 600);
      }
      return newCount;
    });
    setShowBadge(true);
    setIsExiting(false);

    if (!isShaking) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 600);
    }

    setShowNotification(true);

    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowNotification(false);
        setIsExiting(false);
      }, 350);
      setCloseTimeoutId(null);
    }, 2000);

    setCloseTimeoutId(newTimeoutId);
  };

  return (
    <>
      <style jsx>{\`
        .shake {
          animation: shake 0.6s ease-in-out;
        }

        @keyframes shake {
          0%,
          100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-10deg);
          }
          40% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-10deg);
          }
          80% {
            transform: rotate(10deg);
          }
        }

        .badge-enter {
          animation: scaleIn 0.2s ease-out forwards;
          transform: scale(0);
        }

        @keyframes scaleIn {
          to {
            transform: scale(1);
          }
        }

        .number-up {
          animation: flipCounter 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes flipCounter {
          0% {
            transform: rotateX(90deg) translateY(50%) scale(0.3);
            opacity: 0;
            filter: blur(2px);
          }
          25% {
            transform: rotateX(45deg) translateY(20%) scale(0.7);
            opacity: 0.3;
            filter: blur(1px);
          }
          50% {
            transform: rotateX(0deg) translateY(-15%) scale(1.2);
            opacity: 0.8;
            filter: blur(0px);
          }
          75% {
            transform: rotateX(-10deg) translateY(-5%) scale(1.05);
            opacity: 0.95;
          }
          100% {
            transform: rotateX(0deg) translateY(0%) scale(1);
            opacity: 1;
          }
        }

        .text-enter {
          animation: slideIn 0.35s ease-in-out forwards;
          opacity: 0;
          width: 0;
          margin-left: 0;
          overflow: hidden;
        }

        .text-exit {
          animation: slideOut 0.35s ease-in-out forwards;
          opacity: 1;
          width: auto;
          margin-left: 12px;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            width: 0;
            margin-left: 0;
          }
          100% {
            opacity: 1;
            width: 120px;
            margin-left: 12px;
          }
        }

        @keyframes slideOut {
          0% {
            opacity: 1;
            width: 120px;
            margin-left: 12px;
          }
          100% {
            opacity: 0;
            width: 0;
            margin-left: 0;
          }
        }
      \`}</style>

      <div className="relative flex flex-col items-center justify-center space-y-4">
        <div className="flex h-10 relative items-center rounded-lg bg-black shadow px-3 font-medium outline-none transition-colors">
          {notificationCount > 0 && showBadge && (
            <div className="absolute -top-1 -left-1 select-none bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-4 px-1 flex items-center justify-center badge-enter overflow-hidden">
              <span className={isCountAnimating ? "number-up" : ""}>
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            </div>
          )}
          <div className="relative">
            <div
              className={\`text-white flex-shrink-0 \${isShaking ? "shake" : ""}\`}
            >
              <Bell size={16} />
            </div>
          </div>

          {showNotification && (
            <span
              className={\`text-white select-none text-sm whitespace-nowrap \${
                isExiting ? "text-exit" : "text-enter"
              }\`}
            >
              New notification!
            </span>
          )}
        </div>

        <button
          onClick={addNotification}
          className="px-2 py-1.5 mt-5 border border-neutral-200 rounded-sm text-xs"
        >
          Send Notification
        </button>
      </div>
    </>
  );
}`}
                  disabled
                />
              </div>
              <NotificationAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Ripple</h2>
            <div className="w-full relative py-20 outline outline-neutral-100 bg-neutral-50 flex-1 flex justify-center items-center min-h-[400px]">
              <div className="absolute top-4 right-4 z-50">
                <CopyAnimated
                  code={`"use client";

import { useState } from "react";

export default function RippleAnimation() {
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [rippleId, setRippleId] = useState(0);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: rippleId, x, y };
    setRipples((prev) => [...prev, newRipple]);
    setRippleId((prev) => prev + 1);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 800);
  };

  return (
    <>
      <style jsx>{\`
        .ripple-container {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(147, 51, 234, 0.4) 0%,
            rgba(147, 51, 234, 0.2) 40%,
            rgba(147, 51, 234, 0.1) 60%,
            transparent 80%
          );
          transform: translate(-50%, -50%);
          animation: ripple-animation 0.8s ease-out forwards;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
      \`}</style>

      <div className="flex flex-col items-center space-y-6">
        <div
          className="ripple-container hover-glow w-fit h-10  rounded-lg shadow px-3 flex items-center justify-center"
          onClick={createRipple}
        >
          <span className="text-neutral-700 text-sm font-medium select-none">
            Click anywhere
          </span>

          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}`}
                  disabled
                />
              </div>
              <RippleAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Checkbox</h2>
            <div className="w-full relative py-20 outline outline-neutral-100 bg-neutral-50 flex-1 flex justify-center items-center min-h-[400px]">
              <div className="absolute top-4 right-4 z-50">
                <CopyAnimated
                  code={`"use client";

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
        className={\`w-5 h-5 border-2 rounded transition-all duration-200 ease-in-out flex items-center justify-center \${
          isChecked
            ? "border-black bg-black"
            : "border-neutral-300 bg-white hover:border-neutral-400"
        }\`}
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
}`}
                  disabled
                />
              </div>
              <CheckAnimated />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
