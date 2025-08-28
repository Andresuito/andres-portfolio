import AnimatedSection from "@/components/animated-section";
import CheckAnimated from "@/components/animations/check-animated";
import FeedbackAnimation from "@/components/animations/feedback";
import NotificationAnimation from "@/components/animations/notification";
import RippleAnimation from "@/components/animations/ripple";
import ProjectLayout from "@/components/project-layout";
import { projects } from "@/lib/projects";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

const projectDetails = {
  palette: {
    timeline: "August - Ongoing 2025",
    role: "Product Designer & Frontend Engineer",
    team: ["1 Designer (me!)", "1 Engineer (me!)"],
    skills: [
      "Product Design",
      "Frontend Engineering",
      "Color Theory",
      "Canvas API",
    ],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "initial-observations", title: "Initial Observations" },
      { id: "technical-architecture", title: "Technical Architecture" },
      { id: "core-features", title: "Core Features" },
      { id: "interaction-design", title: "Interaction Design" },
      { id: "visual-design", title: "Visual Design" },
      { id: "performance-optimization", title: "Performance Optimization" },
      { id: "final-designs", title: "Final Designs" },
      { id: "reflection", title: "Reflection" },
    ],
  },
  ggsalt: {
    timeline: "Jun - Jun 2025",
    role: "Frontend Developer & Designer",
    team: ["1 Developer (me!)"],
    skills: ["Next.js", "React", "Design Systems"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "architecture", title: "Architecture" },
      { id: "design-system", title: "Design System" },
      { id: "development", title: "Development" },
      { id: "reflection", title: "Reflection" },
    ],
  },
  animations: {
    timeline: "Jul - Ongoing 2025",
    role: "Frontend Developer",
    team: ["1 Developer (me!)"],
    skills: ["Framer Motion", "CSS Animations", "React"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "feedback", title: "Feedback Animation" },
      { id: "notification", title: "Notification System" },
      { id: "ripple", title: "Ripple Effect" },
      { id: "checkbox", title: "Animated Checkbox" },
      { id: "technical", title: "Technical Details" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  const details = projectDetails[slug as keyof typeof projectDetails];

  if (!project || !details) {
    return {
      title: "Project Not Found - Andrés B.R",
      description: "The requested project could not be found.",
    };
  }

  const getProjectDescription = (slug: string): string => {
    switch (slug) {
      case "palette":
        return "The world's first infinite canvas color tool. Professional color design with advanced features for modern workflows.";
      case "animations":
        return "A collection of micro-interactions designed to enhance user experience through purposeful motion and smooth animations.";
      case "ggsalt":
        return "A modern design portfolio showcasing creative work with clean aesthetics and thoughtful interactions.";
      default:
        return `${project.title} - A showcase of modern web development and design.`;
    }
  };

  const description = getProjectDescription(slug);
  const title = `${project.title}`;

  return {
    title,
    description,
    keywords: [
      project.title.toLowerCase(),
      ...details.skills.map((skill) => skill.toLowerCase()),
      "web development",
      "design",
      "portfolio",
      "Andrés B.R",
    ],
    authors: [{ name: "Andrés B.R" }],
    creator: "Andrés B.R",
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://andresbr.com/projects/${slug}`,
      siteName: "Andrés B.R",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: `${project.title}`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Andrés B.R`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const project = projects.find((p) => p.id === slug);
  const details = projectDetails[slug as keyof typeof projectDetails];

  if (!project || !details) {
    notFound();
  }

  return (
    <main>
      <ProjectLayout sections={details.sections}>
        <AnimatedSection>
          <div className="flex flex-col gap-8">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-4">
                <h4 className="text-base md:text-lg font-medium">
                  {slug === "palette"
                    ? `${project.title} • Shipped ${project.year}`
                    : project.year}
                </h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
                  {slug === "palette"
                    ? "The world's first infinite canvas color tool"
                    : project.title}
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="w-full aspect-[16/9] border-1 border-foreground/10">
                <div
                  className="relative w-full aspect-[16/9] overflow-hidden"
                  role="img"
                >
                  {project.media.type === "video" ? (
                    <video
                      poster={project.media.poster}
                      className="w-full h-full object-cover scale-102 transition-opacity duration-500 ease-in-out opacity-100"
                      loop
                      autoPlay
                      playsInline
                      data-inline-autoplay="true"
                      preload="metadata"
                      aria-label={project.media.alt}
                      style={{ backgroundColor: project.media.backgroundColor }}
                    >
                      <source src={project.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      alt={project.media.alt}
                      fill
                      className="object-cover scale-102 transition-opacity duration-500 opacity-100"
                      src={project.media.src}
                    />
                  )}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                    style={{
                      backgroundColor: project.media.backgroundColor,
                      opacity: 0,
                      zIndex: 10,
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="flex w-full flex-col gap-2">
                  <h4 className="!opacity-100">Role</h4>
                  <p>
                    {"role" in details ? details.role : "Designer & Developer"}
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h4 className="!opacity-100">Timeline</h4>
                  <p>{details.timeline}</p>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h4 className="!opacity-100">Team</h4>
                  <div className="flex flex-col gap-0">
                    {"team" in details ? (
                      details.team.map((member: string, index: number) => (
                        <p key={index}>{member}</p>
                      ))
                    ) : (
                      <p>Solo project</p>
                    )}
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h4 className="!opacity-100">Skills</h4>
                  <div className="flex flex-col gap-0">
                    {details.skills.map((skill, index) => (
                      <p key={index}>{skill}</p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col gap-12 md:gap-16">
            {details.sections.map((section, index) => (
              <AnimatedSection key={section.id} delay={0.1 * index}>
                <section id={section.id} className="flex flex-col gap-4">
                  <h4 className="!opacity-100 mb-1 text-base md:text-lg font-medium">
                    {section.title}
                  </h4>
                  {section.id === "overview" && slug === "animations" && (
                    <div className="space-y-6">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        A collection of micro-interactions designed to enhance
                        user experience through purposeful motion.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        Each animation serves a specific function - from
                        providing feedback to guiding attention - while
                        maintaining performance and accessibility standards.
                        These components demonstrate how thoughtful animation
                        can make interfaces feel more responsive and intuitive.
                      </p>
                    </div>
                  )}
                  {section.id === "feedback" && slug === "animations" && (
                    <div className="space-y-8">
                      <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-8 md:p-20 flex justify-center items-center min-h-[280px] md:min-h-[320px]">
                        <FeedbackAnimation />
                      </div>
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Expandable feedback form with shared layout animations.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        This component demonstrates layout animations using
                        Framer Motion's shared layout IDs. When clicked, the
                        button smoothly morphs into a full feedback form
                        complete with a textarea and emoji selection. The
                        animation maintains visual continuity by animating the
                        same element through different states, creating a
                        cohesive user experience.
                      </p>
                    </div>
                  )}
                  {section.id === "notification" && slug === "animations" && (
                    <div className="space-y-8">
                      <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-8 md:p-20 flex justify-center items-center min-h-[280px] md:min-h-[320px]">
                        <NotificationAnimation />
                      </div>
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Multi-layered notification system with coordinated
                        animations.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        This notification bell demonstrates multiple animation
                        layers working together. When triggered, the bell icon
                        shakes to draw attention, a numbered badge appears with
                        a scaling animation, and notification text slides in
                        from the right. The notification automatically dismisses
                        after 2 seconds with a reverse animation, and multiple
                        notifications increment the badge counter with a 3D flip
                        effect.
                      </p>
                    </div>
                  )}
                  {section.id === "ripple" && slug === "animations" && (
                    <div className="space-y-8">
                      <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-8 md:p-20 flex justify-center items-center min-h-[280px] md:min-h-[320px]">
                        <RippleAnimation />
                      </div>
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Material Design ripple effect with precise click
                        tracking.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        This ripple effect creates expanding circles from the
                        exact click point. Each click generates a new ripple
                        with a radial gradient background that scales from 0 to
                        200px while fading out over 0.8 seconds. Multiple
                        ripples can exist simultaneously, and old ones are
                        automatically cleaned up to prevent memory leaks.
                      </p>
                    </div>
                  )}
                  {section.id === "checkbox" && slug === "animations" && (
                    <div className="space-y-8">
                      <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-8 md:p-20 flex justify-center items-center min-h-[280px] md:min-h-[320px]">
                        <CheckAnimated />
                      </div>
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        SVG path animation with progressive checkmark drawing.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        This animated checkbox uses SVG path drawing to create a
                        checkmark that traces from start to finish. The
                        animation combines multiple effects: the checkbox
                        background transitions from white to black, the
                        checkmark path animates using pathLength, and the entire
                        element has a subtle tap animation. The unchecking
                        animation reverses the sequence naturally.
                      </p>
                    </div>
                  )}
                  {section.id === "technical" && slug === "animations" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Performance-optimized animations built with modern web
                        standards.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        All animations are built with Framer Motion and
                        optimized for performance. They use hardware-accelerated
                        transforms, respect prefers-reduced-motion settings, and
                        include proper cleanup to prevent memory leaks. Each
                        component is self-contained with its own state
                        management and can be easily integrated into any React
                        application.
                      </p>
                    </div>
                  )}
                  {section.id === "overview" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Palette started with the goal of creating a powerful yet
                        intuitive color design tool that bridges the gap between
                        creative exploration and professional workflow.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        Traditional color tools are either too simplistic for
                        serious design work or overly complex for creative
                        exploration. This gap in the market for a tool that
                        combines professional features with an intuitive
                        interface was the starting point for Palette.
                      </p>
                      <div className="mt-8">
                        <h4 className="!opacity-100 mb-4">Solution</h4>
                        <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                          Palette: An infinite canvas color tool with advanced
                          features for modern designers.
                        </h2>
                      </div>
                      <div className="mt-8">
                        <h4 className="!opacity-100 mb-4">Outcomes</h4>
                        <p className="text-muted-foreground text-base leading-7">
                          Palette is live and has been gaining traction in the
                          design community for its unique approach to color
                          exploration.
                        </p>
                        <div className="h-[1px] w-full bg-foreground/10 mt-16 mb-8"></div>
                      </div>
                    </div>
                  )}

                  {section.id === "initial-observations" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                          There is no convenient and feature-rich solution for
                          modern color design workflows.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Existing color tools either lack professional features
                          or have steep learning curves. Initial research with
                          designers and developers led us to uncover 2 key pain
                          points:
                        </p>
                        <div className="mt-8">
                          <h4 className="!opacity-100 mb-4">Pain Points</h4>
                          <div className="flex w-full flex-col md:flex-row gap-6 mt-4">
                            <div className="flex flex-col gap-1 w-full">
                              <h3>1. Limited Creative Freedom</h3>
                              <p className="text-muted-foreground">
                                Existing tools constrain exploration with rigid
                                interfaces and limited canvas space.
                              </p>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                              <h3>2. Missing Professional Features</h3>
                              <p className="text-muted-foreground">
                                Simple color pickers lack advanced features like
                                gradient generation and image extraction.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mt-8">
                          <h3 className="italic py-0 my-6 pl-4 border-l-2 border-foreground-light">
                            Key Insight: Designers need a tool that combines the
                            creative freedom of an infinite canvas with
                            professional color management features!
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-7">
                          These pain points validated our solution and unique
                          position in the market, as well as confirmed the need
                          for a modern, web-based color design tool.
                        </p>
                      </div>
                    )}

                  {section.id === "technical-architecture" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                          Built with modern web technologies for performance and
                          scalability.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Palette is architected as a Single Page Application
                          using Next.js 15 with React 19, featuring a custom
                          state management system and dual storage strategy for
                          reliability.
                        </p>
                        <div className="space-y-4">
                          <h4 className="!opacity-100">Core Technologies</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                              <h5 className="font-medium mb-2">Frontend</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>Next.js 15 App Router</li>
                                <li>React 19 with Hooks</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                              <h5 className="font-medium mb-2">
                                State Management
                              </h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>Custom Redux-like Store</li>
                                <li>Typed Actions/Reducers</li>
                                <li>React Context Bridge</li>
                                <li>Optimized Selectors</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                              <h5 className="font-medium mb-2">Storage</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>IndexedDB Primary</li>
                                <li>localStorage Fallback</li>
                                <li>Auto-save System</li>
                                <li>Background Sync</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {section.id === "core-features" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Professional color tools designed for modern workflows.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7 mt-6">
                        Core features include infinite canvas workspace,
                        multi-selection system, advanced color extraction from
                        images, and intelligent gradient generation with linear
                        and radial patterns.
                      </p>
                    </div>
                  )}

                  {section.id === "interaction-design" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                          Intuitive interactions that feel natural and
                          responsive.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Every interaction is carefully crafted to provide
                          immediate feedback and maintain creative flow. The
                          interface adapts to user actions without interrupting
                          the design process.
                        </p>
                      </div>
                    )}

                  {section.id === "visual-design" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Clean, focused interface that puts colors first.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        The visual design prioritizes the colors being worked
                        with, using a minimal interface that provides powerful
                        tools without visual clutter.
                      </p>
                    </div>
                  )}

                  {section.id === "performance-optimization" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                          Optimized for smooth performance even with complex
                          color operations.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Performance is critical for creative tools. Every
                          interaction is optimized using techniques like
                          viewport culling, memoization, and hardware
                          acceleration.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="!opacity-100">
                              Rendering Optimizations
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>
                                • Viewport culling for off-screen elements
                              </li>
                              <li>• Hardware-accelerated transforms</li>
                              <li>• Efficient re-rendering with React.memo</li>
                              <li>• Debounced updates during interactions</li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="!opacity-100">Memory Management</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• Automatic cleanup of unused elements</li>
                              <li>• Lazy loading of complex operations</li>
                              <li>• Efficient storage with IndexedDB</li>
                              <li>• Background save operations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                  {section.id === "final-designs" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        The complete color design experience.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        The final design brings together all features in a
                        cohesive interface that supports both creative
                        exploration and professional workflow.
                      </p>
                    </div>
                  )}

                  {section.id === "reflection" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 text-xl md:text-2xl font-serif leading-tight">
                        Lessons learned and future opportunities.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        Building Palette was an intensive journey into modern
                        web application architecture, performance optimization,
                        and user experience design. The project pushed the
                        boundaries of what's possible with web technologies.
                      </p>
                      <div className="space-y-6">
                        <div>
                          <h4 className="!opacity-100 mb-3">Key Learnings</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • Performance optimization is critical for
                              creative tools - every interaction must feel
                              instant
                            </li>
                            <li>
                              • State management at scale requires careful
                              architecture and optimization
                            </li>
                            <li>
                              • Canvas-based applications need specialized
                              approaches to common web patterns
                            </li>
                            <li>
                              • User testing early reveals assumptions about
                              creative workflows
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="!opacity-100 mb-3">
                            Future Opportunities
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • Collaborative editing with real-time
                              synchronization
                            </li>
                            <li>
                              • AI-powered color suggestions and palette
                              generation
                            </li>
                            <li>
                              • Integration with design tools like Figma and
                              Sketch
                            </li>
                            <li>
                              • Advanced color harmony and accessibility
                              analysis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "overview" &&
                    slug !== "animations" &&
                    slug !== "palette" && (
                      <p className="text-muted-foreground">
                        This project showcases my work on{" "}
                        {project.title.toLowerCase()}, demonstrating key skills
                        in {details.skills.join(", ").toLowerCase()}.
                      </p>
                    )}
                </section>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </ProjectLayout>

      <div className="p-6 py-12"></div>
    </main>
  );
}
