import { createFileRoute, Link } from "@tanstack/react-router";
import { Moon, PaintBucket, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

function useSpainTime() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export const Route = createFileRoute("/")({ component: App });

type Section = "about" | "work" | "play" | "contact";

function App() {
  const spainTime = useSpainTime();
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [pill, setPill] = useState({ top: 0, left: 0, width: 95.83, height: 46 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<Section, HTMLButtonElement>>(new Map());

  const sections: { id: Section; label: string }[] = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "play", label: "Play" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const updatePill = () => {
      const btn = buttonRefs.current.get(activeSection);
      const container = containerRef.current;
      if (!btn || !container) return;

      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setPill({
        top: btnRect.top - containerRect.top,
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        height: btnRect.height,
      });
    };

    updatePill();

    const resizeObserver = new ResizeObserver(updatePill);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [activeSection]);

  const workItems = [
    {
      role: "Lead Developer",
      company: "anticommon.com",
      url: "https://anticommon.com",
      period: "Present",
      description: "Founded and build website for anticommon.com",
    },
    {
      role: "FullStack Developer",
      company: "vidext.io",
      url: "https://vidext.io",
      period: "2024-2025",
      description: "Buildt vidext.io and contributed to product development",
    },
    {
      role: "Frontend Developer",
      company: "chekin.com",
      url: "https://chekin.com",
      period: "2023-2024",
      description: "Developed guestapp with React",
    },
  ];

  const sectionContent: Record<Section, { title: string; description: string }> = {
    about: {
      title: "About",
      description:
        "I'm a full stack web developer specializing in building attractive, dynamic and functional websites. I use code to turn ideas into seamless web experiences, specializing in smooth animations and interactive components.",
    },
    work: {
      title: "Work",
      description:
        "Selected projects and collaborations showcasing creative development and technical expertise.",
    },
    play: {
      title: "Play",
      description:
        "Experiments and creative coding projects exploring the boundaries of web technology.",
    },
    contact: {
      title: "Contact",
      description: "Let's work together. Get in touch to discuss your next project.",
    },
  };

  return (
    <div className="relative mx-auto min-h-screen max-w-361">
      <div className="relative z-10 flex min-h-screen flex-col px-8 py-8">
        <motion.h1
          className="relative cursor-pointer text-[240px]"
          initial="initial"
          whileHover="hover"
        >
          <span className="inline-block">A</span>
          <motion.span
            className="absolute top-0 left-0 z-10 ml-[0.65em] inline-block will-change-[opacity,transform]"
            variants={{
              initial: { opacity: 0, x: -20 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            ndrés
          </motion.span>
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              initial: { x: 0, opacity: 1 },
              hover: { x: 580, opacity: 1 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            BR
          </motion.span>
        </motion.h1>

        <div className="mt-25 flex flex-1 items-start gap-30">
          <div ref={containerRef} className="relative inline-flex flex-col gap-4 text-2xl">
            <motion.div
              className="absolute -z-10 rounded-full border border-secondary bucket:border-[#FF9A9A] bg-secondary/10 bucket:bg-[#FF9A9A]/10 dark:border-muted dark:bg-muted/10"
              initial={false}
              animate={{
                top: pill.top,
                left: pill.left,
                width: pill.width,
                height: pill.height,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
            />

            {sections.map((section) => (
              <motion.button
                key={section.id}
                ref={(el) => {
                  if (el) buttonRefs.current.set(section.id, el);
                }}
                onClick={() => {
                  setActiveSection(section.id);
                }}
                className={`w-fit cursor-pointer rounded-full border px-4 py-1.5 text-2xl transition-colors duration-300 ${
                  activeSection === section.id
                    ? "border-transparent text-foreground"
                    : "border-transparent text-foreground/30"
                }`}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          <div className="flex-1 pb-8 text-2xl">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={false}
                animate={{
                  opacity: activeSection === section.id ? 1 : 0,
                  y: activeSection === section.id ? 0 : 40,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={activeSection === section.id ? "block" : "hidden"}
              >
                {section.id === "work" ? (
                  <div className="grid grid-cols-3 justify-between space-y-2">
                    {workItems.map((item: (typeof workItems)[0], index: number) => (
                      <div key={index} className="flex max-w-71.75 flex-col gap-2">
                        <div className="flex items-center gap-2">
                          {index === 0 ? (
                            <div className="size-4 animate-pulse rounded-full bg-[#77FFB8]" />
                          ) : (
                            <div className="size-4 rounded-full bg-muted-foreground/50" />
                          )}

                          <p className="leading-tight">{item.role}</p>
                        </div>
                        <a
                          href={item.url}
                          className="relative inline-block w-fit before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                        >
                          {item.company}
                        </a>
                        <p>{item.period}</p>
                        <p className="text-foreground/50">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : section.id === "play" ? (
                  <div className="grid grid-cols-3 gap-6">
                    <a
                      href="https://ggsalt.work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3"
                    >
                      <div className="h-76.25 w-77.75 overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/bg-1.png"
                          alt="Custom portfolio website"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[24px] leading-tight">
                          Custom portfolio website for a multidisciplinary designer
                        </p>
                        <p className="text-foreground/50">ggsalt.work</p>
                      </div>
                    </a>

                    <Link to="/craft" className="flex flex-col gap-5">
                      <div className="h-76.25 w-77.75 overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/bg-2.png"
                          alt=""
                          className="h-full w-full select-none object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[24px] leading-tight">
                          Sandbox for microanimation explorations
                        </p>
                      </div>
                    </Link>

                    <Link to="/fluid" className="flex flex-col gap-3">
                      <div className="h-76.25 w-77.75 overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/bg-3.png"
                          alt=""
                          className="h-full w-full select-none object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[24px] leading-tight">
                          Creative coding playground Fluid simulation
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : section.id === "contact" ? (
                  <div className="flex flex-col space-y-2 text-2xl">
                    <a
                      href="mailto:barrancorios@gmail.com"
                      className="relative inline-block w-fit before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                    >
                      Email
                    </a>
                    <a
                      href="https://www.linkedin.com/in/andres-br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block w-fit before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Andresuito"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block w-fit before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                    >
                      Github
                    </a>
                    <a
                      href="https://x.com/andresuiito"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block w-fit before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                    >
                      X
                    </a>
                  </div>
                ) : (
                  <p className="w-full text-[48px]">{sectionContent[section.id].description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between text-xl">
          <div className="flex items-center gap-4">
            <p>Based in Spain</p>
            <p>{spainTime}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`cursor-pointer transition-opacity duration-200 ${
                theme === "light" ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label="Light mode"
            >
              <Sun className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`cursor-pointer transition-opacity duration-200 ${
                theme === "dark" ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label="Dark mode"
            >
              <Moon className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("bucket")}
              className={`cursor-pointer transition-opacity duration-200 ${
                theme === "bucket" ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label="Bucket mode"
            >
              <PaintBucket className="size-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="size-4 animate-pulse rounded-full bg-[#77FFB8]" />
            <span>Available for projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
