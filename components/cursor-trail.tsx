"use client";

import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

export function CursorTrail() {
  const [trails, setTrails] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let animationId: number;
    let trailId = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle para mejor performance
      if (now - lastTime < 30) return;
      lastTime = now;

      const newTrail: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
        timestamp: now,
      };

      setTrails((prev) => [...prev, newTrail].slice(-20));
    };

    const cleanupTrails = () => {
      const now = Date.now();
      setTrails((prev) => prev.filter((trail) => now - trail.timestamp < 1500));
      animationId = requestAnimationFrame(cleanupTrails);
    };

    document.addEventListener("mousemove", handleMouseMove);
    cleanupTrails();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const progress = age / 1500;
        
        // Curvas de animación más suaves
        const opacity = Math.max(0, (1 - progress) * 0.7);
        const scale = Math.max(0.1, 1 - progress * 0.9);
        const rotation = progress * 180;
        const blur = progress * 2;

        return (
          <div
            key={trail.id}
            className="absolute select-none"
            style={{
              left: trail.x - 8,
              top: trail.y - 8,
              opacity,
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              filter: `blur(${blur}px)`,
              transition: "opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              zIndex: 1000 - index,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M8 2V14M2 8H14" 
                stroke="#32404f" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                strokeOpacity={Math.max(0, 1 - progress * 1.2)}
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
