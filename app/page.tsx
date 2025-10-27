import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andrés B.R - Web Developer",
  description:
    "Based in Spain, I specialize in smooth animations and interactive components. My work centers on interfaces that feel intuitive and adapt to tomorrow's standards.",
  keywords:
    "web developer, React developer, Next.js, JavaScript, TypeScript, web animations, web development",
  authors: [{ name: "Andrés B.R" }],
};

export default function Home() {
  return (
    <div className="h-screen px-6 py-12 text-base text-foreground leading-relaxed md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="inline-block bg-primary px-3 py-1 font-medium text-3xl text-primary-foreground tracking-tight md:text-4xl">
              andrés b.r
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            I use code to turn ideas into seamless web experiences. I specialize in smooth
            animations and interactive components.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="mb-4 font-light text-sm text-zinc-600 uppercase tracking-[0.2em]">
                experience
              </h2>
              <div className="space-y-4">
                <div className="bg-card text-sm">
                  <a
                    href="https://vidext.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                  >
                    vidext.io
                  </a>{" "}
                  <span className="text-xs text-zinc-600">[2024-present]</span>
                  <br />
                  <span className="text-muted-foreground">
                    full stack developer. built vidext.io site and contributed to boost product
                    development.
                  </span>
                </div>

                <div className="bg-card text-sm">
                  <a
                    href="https://chekin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                  >
                    chekin.com
                  </a>{" "}
                  <span className="text-xs text-zinc-600">[2023-2024]</span>
                  <br />
                  <span className="text-muted-foreground">
                    front-end developer. developed guestapp with react
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-light text-sm text-zinc-600 uppercase tracking-[0.2em]">
                projects
              </h2>
              <div className="bg-card text-sm">
                <a
                  href="https://palette.andresbr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                >
                  palette
                </a>
                <br />
                <span className="text-muted-foreground">
                  color design application that combines the creative freedom of an infinite canvas
                  with advanced color management features.
                </span>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-light text-sm text-zinc-600 uppercase tracking-[0.2em]">
                craft ☺
              </h2>
              <div className="space-y-3">
                <div className="bg-card text-sm">
                  <Link
                    href="/craft"
                    prefetch
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                  >
                    micro animations
                  </Link>
                  <br />
                  <span className="text-muted-foreground">
                    playground for creative coding, motion, and visual experiments.
                  </span>
                </div>
                <div className="bg-card text-sm">
                  <Link
                    href="/creative-code"
                    prefetch
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                  >
                    fluid simulation
                  </Link>
                  <br />
                  <span className="text-muted-foreground">experimenting creative coding</span>
                </div>
                <div className="bg-card text-sm">
                  <Link
                    href="/creative-code/tunnel"
                    prefetch
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
                  >
                    infinite tunnel
                  </Link>
                  <br />
                  <span className="text-muted-foreground">endless depth canvas animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground">based in spain</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="mailto:contact@andresbr.com"
              className="text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
            >
              mail
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://github.com/Andresuito"
              className="text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
            >
              github
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://www.linkedin.com/in/andres-br"
              className="text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
            >
              linkedin
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://x.com/andresuiito"
              className="text-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-primary hover:no-underline"
            >
              x
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
