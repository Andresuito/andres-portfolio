import { createFileRoute, Link } from "@tanstack/react-router";
import FluidSimulation from "@/components/fluid-simulation";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/creative-code")({
  component: CreativeCode,
  head: () => {
    const s = seo({
      title: "Andrés B.R - Creative Code",
      description: "Playground for creative coding, motion, and visual experiments.",
      keywords:
        "web developer, React developer, JavaScript, TypeScript, web animations, web development",
      url: "https://andresbr.com/creative-code",
    });

    return {
      meta: [...s.meta],
      links: [...(s.links || [])],
    };
  },
});

function CreativeCode() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <FluidSimulation />

      <div className="pointer-events-none fixed top-8 left-8 z-50">
        <Link
          to="/"
          className="pointer-events-auto mb-4 inline-block bg-primary px-3 py-1 font-medium text-3xl text-primary-foreground tracking-tight md:text-4xl"
        >
          ↫ home
        </Link>
        <h1 className="mb-2 font-light text-sm text-zinc-800 uppercase tracking-[0.3em]">
          Navier-Stokes Fluid Simulation
        </h1>
        <p className="font-mono text-xs text-zinc-600 leading-relaxed">
          Real-time 2D viscous flow solver
          <span className="mt-1 block text-zinc-500">
            Move cursor to interact with the fluid field
          </span>
        </p>
      </div>
    </div>
  );
}
