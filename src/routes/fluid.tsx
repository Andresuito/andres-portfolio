import { createFileRoute, Link } from "@tanstack/react-router";
import { FluidSimulation } from "@/components/fluid-simulation";
import { ThemeFooter } from "@/components/theme-footer";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/fluid")({
  component: CreativeCode,
  head: () => {
    const s = seo({
      title: "Fluid Simulation with Navier-Stokes | Andrés B.R",
      description:
        "Interactive 2D fluid dynamics simulation using Navier-Stokes equations. A creative coding experiment with real-time particle flow and mouse interaction built with React and Canvas API.",
      keywords:
        "fluid simulation, Navier-Stokes, creative coding, generative art, canvas animation, particle system, webGL, React canvas, interactive simulation",
      url: "https://andresbr.com/fluid",
    });

    return {
      meta: [...s.meta],
      links: [...(s.links || [])],
    };
  },
});

function CreativeCode() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-361 flex-col">
      <div className="relative z-10 flex flex-1 flex-col py-8">
        <div className="flex flex-1 gap-25">
          <div className="relative">
            <Link
              to="/"
              className="relative inline-block w-fit text-2xl before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
            >
              Go back
            </Link>
          </div>

          <div className="flex w-full flex-1 flex-col">
            <div className="pointer-events-none">
              <h1 className="mb-2 bucket:text-[#FF9A9A] text-2xl text-foreground tracking-tight dark:text-foreground">
                Creative coding playground
              </h1>
              <p className="bucket:text-[#ffb3b3] text-5xl dark:text-primary">
                An interactive experiment exploring fluid-like motion through real-time 2D
                Navier–Stokes simulation.
              </p>
            </div>
            <div className="mt-8 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bucket:border-[#FF9A9A]/20 bg-card bucket:bg-[#7a1a1a]/30 dark:border-border dark:bg-card">
              <FluidSimulation />
            </div>
          </div>
        </div>
      </div>

      <ThemeFooter />
    </div>
  );
}
