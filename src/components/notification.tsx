import { Bell } from "lucide-react";
import { useState } from "react";

export default function NotificationAnimation() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isCountAnimating, setIsCountAnimating] = useState(false);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(null);

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
          display: grid;
          grid-template-columns: 0fr;
          margin-left: 0;
        }

        .text-exit {
          animation: slideOut 0.35s ease-in-out forwards;
          display: grid;
          grid-template-columns: 1fr;
          margin-left: 12px;
        }

        @keyframes slideIn {
          0% {
            grid-template-columns: 0fr;
            margin-left: 0;
          }
          100% {
            grid-template-columns: 1fr;
            margin-left: 12px;
          }
        }

        @keyframes slideOut {
          0% {
            grid-template-columns: 1fr;
            margin-left: 12px;
          }
          100% {
            grid-template-columns: 0fr;
            margin-left: 0;
          }
        }

        .text-inner {
          overflow: hidden;
          white-space: nowrap;
        }
      `}</style>

      <div className="relative flex min-h-50 flex-col items-center justify-center space-y-4">
        <div className="relative flex h-10 items-center rounded-lg bg-black px-3 font-medium shadow outline-none transition-colors">
          {notificationCount > 0 && showBadge && (
            <div className="badge-enter absolute -top-1 -left-1 flex h-4 min-w-4.5 select-none items-center justify-center overflow-hidden rounded-full bg-red-500 px-1 text-[10px] text-white">
              <span className={isCountAnimating ? "number-up" : ""}>
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            </div>
          )}
          <div className="relative">
            <div className={`shrink-0 text-white ${isShaking ? "shake" : ""}`}>
              <Bell size={16} />
            </div>
          </div>

          {showNotification && (
            <span
              className={`select-none text-white text-xs ${isExiting ? "text-exit" : "text-enter"}`}
            >
              <span className="text-inner">New notification!</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={addNotification}
          className="mt-5 select-none rounded-sm border border-neutral-200 px-2 py-1.5 text-xs"
        >
          Send Notification
        </button>
      </div>
    </>
  );
}
