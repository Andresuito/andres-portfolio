"use client";

import FluidSimulation from "@/components/fluid-simulation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <FluidSimulation />

      <div className="fixed top-8 left-8 z-50 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto text-3xl md:text-4xl font-medium tracking-tight bg-primary text-primary-foreground px-3 py-1 inline-block mb-4"
        >
          ↫ home
        </Link>
        <h1 className="text-sm font-light tracking-[0.3em] text-zinc-800 uppercase mb-2">
          Navier-Stokes Fluid Simulation
        </h1>
        <p className="text-xs text-zinc-600 font-mono leading-relaxed">
          Real-time 2D viscous flow solver
          <span className="block text-zinc-500 mt-1">
            Move cursor to interact with the fluid field
          </span>
        </p>
      </div>
    </div>
  );
}
