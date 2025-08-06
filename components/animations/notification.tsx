"use client";

import { Bell } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function NotificationAnimation() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );

  const addNotification = () => {
    setNotificationCount((prev) => prev + 1);

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
      setShowNotification(false);
      setCloseTimeoutId(null);
    }, 2000);

    setCloseTimeoutId(newTimeoutId);
  };

  return (
    <div className="relative flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="flex h-10 relative items-center rounded-lg bg-black shadow px-3 font-medium outline-none hover:bg-gray-800 transition-colors fit-content"
        transition={{
          width: {
            duration: 0.35,
            ease: "easeInOut",
            delay: showNotification ? 0 : 0.2,
          },
        }}
      >
        {notificationCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -left-1 select-none bg-red-500 text-white text-[10px] rounded-full min-w-[18px] h-4 px-1 flex items-center justify-center"
          >
            {notificationCount > 9 ? "9+" : notificationCount}
          </motion.div>
        )}
        <div className="relative">
          <motion.div
            className="text-white flex-shrink-0"
            animate={
              isShaking
                ? {
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: {
                      duration: 0.6,
                      repeat: 0,
                    },
                  }
                : {}
            }
          >
            <Bell size={16} />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {showNotification && (
            <motion.span
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "fit-content", marginLeft: 12 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{
                opacity: { duration: 0.2, ease: "easeInOut" },
                width: { duration: 0.35, ease: "easeInOut" },
                marginLeft: { duration: 0.35, ease: "easeInOut" },
              }}
              className="text-white select-none text-sm whitespace-nowrap"
            >
              New notification!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={addNotification}
        className="px-2 py-1.5 mt-5 border border-neutral-200 rounded-sm text-xs"
      >
        Send Notification
      </button>
    </div>
  );
}
