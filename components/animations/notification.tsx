"use client";

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
      <style jsx>{`
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
      `}</style>

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
              className={`text-white flex-shrink-0 ${isShaking ? "shake" : ""}`}
            >
              <Bell size={16} />
            </div>
          </div>

          {showNotification && (
            <span
              className={`text-white select-none text-sm whitespace-nowrap ${
                isExiting ? "text-exit" : "text-enter"
              }`}
            >
              New notification!
            </span>
          )}
        </div>

        <button
          onClick={addNotification}
          className="px-2 py-1.5 mt-5 border select-none border-neutral-200 rounded-sm text-xs"
        >
          Send Notification
        </button>
      </div>
    </>
  );
}
