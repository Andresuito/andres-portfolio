"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function InfiniteTunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;
    const TIME_INCREMENT = 0.015;
    const TIME_MULTIPLIER = 0.8;
    const ROTATION_SPEED = 0.15;
    const NUM_RINGS = 80;
    const SEGMENTS = 16;
    const BASE_HUE = 200;
    const HUE_RANGE = 120;
    const HUE_SHIFT = 40;
    const MAX_RADIUS_MULTIPLIER = 3;
    const MIN_RADIUS = 5;
    const RING_WIDTH_RATIO = 0.15;
    const FADE_START = 1.5;
    const FADE_THRESHOLD = 0.05;

    const animate = () => {
      time += TIME_INCREMENT;

      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDim = Math.max(canvas.width, canvas.height);

      for (let i = NUM_RINGS - 1; i >= 0; i--) {
        const depth = ((i + time * TIME_MULTIPLIER) % NUM_RINGS) / NUM_RINGS;
        const scale = 1 / (depth + 0.01);
        const radius = scale * (maxDim * 0.015);

        if (radius > maxDim * MAX_RADIUS_MULTIPLIER || radius < MIN_RADIUS)
          continue;

        const hue = BASE_HUE + ((depth * HUE_RANGE + time * 10) % HUE_RANGE);
        const brightness = 75 - depth * 30;

        for (let j = 0; j < SEGMENTS; j++) {
          const angleStart =
            (j / SEGMENTS) * Math.PI * 2 + time * ROTATION_SPEED;
          const angleEnd =
            ((j + 1) / SEGMENTS) * Math.PI * 2 + time * ROTATION_SPEED;
          const isEven = j % 2 === 0;

          let alpha = Math.min(1, depth * 2);

          if (radius > maxDim * FADE_START) {
            const fadeOut = Math.max(
              0,
              1 - (radius - maxDim * FADE_START) / (maxDim * FADE_START)
            );
            alpha *= fadeOut;
          }

          if (depth < FADE_THRESHOLD) {
            alpha *= depth / FADE_THRESHOLD;
          }

          const ringWidth = radius * RING_WIDTH_RATIO;
          const innerRadius = Math.max(0, radius - ringWidth);

          ctx.fillStyle = isEven
            ? `hsla(${hue}, 45%, ${brightness}%, ${alpha})`
            : `hsla(${hue + HUE_SHIFT}, 45%, ${brightness}%, ${alpha})`;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
          ctx.arc(centerX, centerY, innerRadius, angleEnd, angleStart, true);
          ctx.closePath();
          ctx.fill();

          ctx.strokeStyle = `hsla(${hue}, 60%, 60%, ${alpha * 0.3})`;
          ctx.lineWidth = Math.max(1, scale * 0.5);
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
          ctx.stroke();
        }
      }

      const vignette = ctx.createRadialGradient(
        centerX,
        centerY,
        maxDim * 0.4,
        centerX,
        centerY,
        maxDim * 0.9
      );
      vignette.addColorStop(0, "rgba(255, 255, 255, 0)");
      vignette.addColorStop(0.6, "rgba(255, 255, 255, 0.2)");
      vignette.addColorStop(1, "rgba(255, 255, 255, 0.7)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="fixed top-8 left-8 z-50 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto text-3xl md:text-4xl font-medium tracking-tight bg-primary text-primary-foreground px-3 py-1 inline-block mb-4"
        >
          ↫ home
        </Link>
        <h1 className="text-sm font-light tracking-[0.3em] text-zinc-800 uppercase mb-2">
          Infinite Tunnel
        </h1>
        <p className="text-xs text-zinc-600 font-mono leading-relaxed">
          Endless depth experience
          <span className="block text-zinc-500 mt-1">
            Canvas animation experiment
          </span>
        </p>
      </div>
    </div>
  );
}
