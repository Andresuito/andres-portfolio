import { createFileRoute, Link } from "@tanstack/react-router";
import CheckAnimated from "@/components/check-animated";
import FeedbackAnimation from "@/components/feedback";
import NotificationAnimation from "@/components/notification";
import { ThemeFooter } from "@/components/theme-footer";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/craft")({
  component: Craft,
  head: () => {
    const s = seo({
      title: "UI Microinteractions & Animation Components | Andrés B.R",
      description:
        "Explore interactive UI components including feedback forms, animated checkboxes, and notification systems. A collection of React micro-interactions built with Framer Motion.",
      keywords:
        "UI components, React animations, microinteractions, Framer Motion, feedback UI, notification components, checkbox animation, frontend components",
      url: "https://andresbr.com/craft",
    });

    return {
      meta: [...s.meta],
      links: [...(s.links || [])],
    };
  },
});

function Craft() {
  return (
    <div className="relative mx-auto min-h-screen max-w-361">
      <div className="relative z-10 flex min-h-screen flex-col px-8 py-8">
        <div className="flex gap-25">
          <div className="relative">
            <Link
              to="/"
              className="relative inline-block w-fit text-nowrap text-2xl before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
            >
              Go back
            </Link>
          </div>

          <div className="w-full">
            <div className="pointer-events-none">
              <h1 className="mb-2 font-light bucket:text-[#FF9A9A] text-2xl text-foreground tracking-tight dark:text-foreground">
                Microinteractions
              </h1>
              <p className="bucket:text-[#ffb3b3] text-5xl dark:text-primary">
                An interactive sandbox exploring UI feedback patterns such as toggles, checkboxes,
                and notification states.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="rounded-xl border border-border bucket:border-[#FF9A9A]/20 bg-card bucket:bg-[#7a1a1a]/30 p-8 dark:border-border dark:bg-card">
                <h2 className="mb-4 font-medium bucket:text-[#FF9A9A] text-foreground text-xl dark:text-foreground">
                  Feedback Component
                </h2>
                <FeedbackAnimation />
              </div>

              <div className="rounded-xl border border-border bucket:border-[#FF9A9A]/20 bg-card bucket:bg-[#7a1a1a]/30 p-8 dark:border-border dark:bg-card">
                <h2 className="mb-4 font-medium bucket:text-[#FF9A9A] text-foreground text-xl dark:text-foreground">
                  Check Animation
                </h2>
                <CheckAnimated />
              </div>

              <div className="rounded-xl border border-border bucket:border-[#FF9A9A]/20 bg-card bucket:bg-[#7a1a1a]/30 p-8 dark:border-border dark:bg-card">
                <h2 className="mb-4 font-medium bucket:text-[#FF9A9A] text-foreground text-xl dark:text-foreground">
                  Notification Animation
                </h2>
                <NotificationAnimation />
              </div>
            </div>
          </div>
        </div>

        <ThemeFooter />
      </div>
    </div>
  );
}
