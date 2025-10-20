import { Metadata } from "next";
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
    <div className="h-screen py-12 px-6 md:py-24 md:px-8 text-base leading-relaxed bg-background text-foreground">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight bg-primary text-primary-foreground px-3 py-1 inline-block">
              andrés b.r
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            I use code to turn ideas into seamless web experiences. I specialize
            in smooth animations and interactive components.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-zinc-600 mb-4">
                experience
              </h2>
              <div className="space-y-4">
                <div className="bg-card text-sm">
                  <a
                    href="https://vidext.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
                  >
                    vidext.io
                  </a>{" "}
                  <span className="text-xs text-zinc-600">[2024-present]</span>
                  <br />
                  <span className="text-muted-foreground">
                    full stack developer. built vidext.io site and contributed
                    to boost product development.
                  </span>
                </div>

                <div className="bg-card text-sm">
                  <a
                    href="https://chekin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
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
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-zinc-600 mb-4">
                projects
              </h2>
              <div className="bg-card text-sm">
                <a
                  href="https://palette.andresbr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
                >
                  palette
                </a>
                <br />
                <span className="text-muted-foreground">
                  color design application that combines the creative freedom of
                  an infinite canvas with advanced color management features.
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-light tracking-[0.2em] uppercase text-zinc-600 mb-4">
                craft ☺
              </h2>
              <div className="space-y-3">
                <div className="bg-card text-sm">
                  <Link
                    href="/craft"
                    prefetch
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
                  >
                    micro animations
                  </Link>
                  <br />
                  <span className="text-muted-foreground">
                    playground for creative coding, motion, and visual
                    experiments.
                  </span>
                </div>
                <div className="bg-card text-sm">
                  <Link
                    href="/creative-code"
                    prefetch
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
                  >
                    fluid simulation
                  </Link>
                  <br />
                  <span className="text-muted-foreground">
                    experimenting creative coding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-20 flex-col text-sm md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-muted-foreground">based in spain</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="mailto:contact@andresbr.com"
              className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
            >
              mail
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://github.com/Andresuito"
              className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
            >
              github
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://www.linkedin.com/in/andres-br"
              className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
            >
              linkedin
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href="https://x.com/andresuiito"
              className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-2 hover:no-underline"
            >
              x
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
