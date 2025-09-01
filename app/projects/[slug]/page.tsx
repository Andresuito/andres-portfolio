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
    sections: [
      { id: "overview", title: "Overview" },
      { id: "infinite-canvas", title: "Infinite Canvas Workspace" },
      { id: "color-management", title: "Advanced Color Management" },
      { id: "professional-tools", title: "Professional Color Tools" },
      { id: "image-extraction", title: "Image Color Extraction" },
      { id: "gradient-generation", title: "Gradient Generation" },
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
        return "Palette is a professional color design application combining infinite canvas freedom with advanced color management. Originally created as a fun color experimentation tool, it evolved into a comprehensive platform for designers, developers, and color enthusiasts.";
      case "animations":
        return "A collection of micro-interactions designed to enhance user experience through purposeful motion and smooth animations.";
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
      ...("skills" in details
        ? details.skills.map((skill: string) => skill.toLowerCase())
        : []),
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
                {"role" in details && (
                  <div className="flex w-full flex-col gap-2">
                    <h4 className="!opacity-100">Role</h4>
                    <p>{details.role}</p>
                  </div>
                )}
                <div className="flex w-full flex-col gap-2">
                  <h4 className="!opacity-100">Timeline</h4>
                  <p>{details.timeline}</p>
                </div>
                {"team" in details && (
                  <div className="flex w-full flex-col gap-2">
                    <h4 className="!opacity-100">Team</h4>
                    <div className="flex flex-col gap-0">
                      {details.team.map((member: string, index: number) => (
                        <p key={index}>{member}</p>
                      ))}
                    </div>
                  </div>
                )}
                {"skills" in details && (
                  <div className="flex w-full flex-col gap-2">
                    <h4 className="!opacity-100">Skills</h4>
                    <div className="flex flex-col gap-0">
                      {details.skills.map((skill: string, index: number) => (
                        <p key={index}>{skill}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col gap-12 md:gap-16">
            {details.sections.map((section, index) => (
              <AnimatedSection key={section.id} delay={0.1 * index}>
                <section id={section.id} className="flex flex-col gap-4">
                  <h4 className="!opacity-100 text-xl md:text-2xl font-serif leading-tight">
                    {section.title}
                  </h4>
                  {section.id === "overview" && slug === "animations" && (
                    <div className="space-y-6">
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
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
                      <h2 className="pb-1 ">
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
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
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
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
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
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
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
                  {section.id === "overview" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
                        Palette is a professional color design application that
                        combines the creative freedom of an infinite canvas with
                        advanced color management features.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        Originally created as a fun color experimentation tool
                        for my girlfriend who wanted something to play with
                        colors and test different combinations.
                      </p>
                      <div className="mt-8">
                        <h4 className="!opacity-100 mb-4">Core Concept</h4>
                        <p className="text-muted-foreground text-base leading-7">
                          The unique combination of infinite canvas freedom with
                          professional color management features makes it stand
                          out from both simple color picker tools and complex
                          design software. It's designed for users who need more
                          than basic color pickers but want an intuitive
                          interface.
                        </p>
                      </div>
                      <div className="h-[1px] w-full bg-foreground/10 mt-16 mb-8"></div>
                    </div>
                  )}

                  {section.id === "infinite-canvas" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
                        Unlimited workspace that adapts to your creative needs.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        The infinite canvas workspace provides unlimited zoomable and pannable space where colors can be arranged freely without constraints. A clean, minimal interface that puts colors first with intuitive drag-and-drop interactions for seamless creative exploration.
                      </p>
                    </div>
                  )}

                  {section.id === "color-management" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
                        Advanced color picker panel with professional format
                        support.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        When colors are selected, the advanced color picker
                        panel appears with support for multiple color formats
                        and both bulk and individual editing modes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="!opacity-100">Color Formats</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• HEX - Web standard format</li>
                            <li>• RGB - Red, Green, Blue values</li>
                            <li>• HSL - Hue, Saturation, Lightness</li>
                            <li>• OKLCH - Perceptually uniform color space</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="!opacity-100">Editing Modes</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Bulk editing for all selected colors</li>
                            <li>• Individual color editing</li>
                            <li>• Compact format display on swatches</li>
                            <li>• Full format display for clipboard copying</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "professional-tools" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 mb-1 text-base md:text-lg">
                          Professional-grade color tools for modern workflows.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Comprehensive suite of color tools including harmony
                          generation, blending, mixing, accessibility analysis,
                          and professional color utilities.
                        </p>
                        <div className="space-y-6">
                          <div>
                            <h4 className="!opacity-100 mb-3">
                              Color Harmonies
                            </h4>
                            <p className="text-muted-foreground text-sm mb-3">
                              Generate professional color harmonies with smart
                              positioning
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                Complementary
                              </div>
                              <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                Triadic
                              </div>
                              <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                Analogous
                              </div>
                              <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                                Tetradic
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="!opacity-100 mb-3">
                              Color Analysis
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>
                                • WCAG contrast ratio calculator with AA/AAA
                                ratings
                              </li>
                              <li>
                                • Color accessibility information and compliance
                              </li>
                              <li>
                                • Brand color matching with popular brand
                                palettes
                              </li>
                              <li>
                                • Eyedropper tool using browser's native
                                EyeDropper API
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="!opacity-100 mb-3">
                              Advanced Features
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>
                                • Real-time color blending with dashed border
                                overlay
                              </li>
                              <li>
                                • Color mixer tool with adjustable percentage
                                slider
                              </li>
                              <li>
                                • Color blindness simulation (Protanopia,
                                Deuteranopia, Tritanopia)
                              </li>
                              <li>
                                • Human-readable color names and temperature
                                adjustment
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                  {section.id === "image-extraction" && slug === "palette" && (
                    <div className="space-y-8">
                      <h2 className="pb-1 mb-1 text-base md:text-lg">
                        Intelligent color extraction from images with advanced
                        clustering.
                      </h2>
                      <p className="text-muted-foreground text-base leading-7">
                        Upload any image to extract dominant colors using
                        intelligent clustering algorithms that group similar
                        colors and filter out uninteresting ones.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="!opacity-100">Smart Processing</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Intelligent color clustering algorithms</li>
                            <li>
                              • Filters out colors that are too bright, dark, or
                              unsaturated
                            </li>
                            <li>• Groups similar colors automatically</li>
                            <li>• Selectable extracted colors with preview</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="!opacity-100">Output</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • Grid layout arrangement when added to canvas
                            </li>
                            <li>• Dominant color extraction</li>
                            <li>• Preview of extracted palette</li>
                            <li>• Direct integration with canvas workflow</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "gradient-generation" &&
                    slug === "palette" && (
                      <div className="space-y-8">
                        <h2 className="pb-1 mb-1 text-base md:text-lg">
                          Professional gradient generation with linear and
                          radial patterns.
                        </h2>
                        <p className="text-muted-foreground text-base leading-7">
                          Generate smooth color transitions between selected
                          elements with configurable step counts and smart
                          positioning to avoid overlap.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="!opacity-100">Linear Gradients</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>
                                • Creates colors between 2 selected elements
                              </li>
                              <li>
                                • Smooth transitions with configurable steps
                              </li>
                              <li>• Smart positioning to avoid overlap</li>
                              <li>• Professional gradient algorithms</li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="!opacity-100">Radial Gradients</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>
                                • Circular color transitions from multiple
                                elements
                              </li>
                              <li>• Intelligent spacing and positioning</li>
                              <li>• Configurable step counts</li>
                              <li>• Maintains original color relationships</li>
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
