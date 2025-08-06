"use client";

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
      <style jsx>{`
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
      `}</style>

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
}
