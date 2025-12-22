import { createFileRoute, Link } from "@tanstack/react-router";
import CheckAnimated from "@/components/check-animated";
import FeedbackAnimation from "@/components/feedback";
import NotificationAnimation from "@/components/notification";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/craft")({
  component: Craft,
  head: () => {
    const s = seo({
      title: "Andrés B.R - Craft",
      description: "Playground for creative coding, motion, and visual experiments.",
      keywords:
        "web developer, React developer, Next.js, JavaScript, TypeScript, web animations, web development",
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
    <div className="min-h-screen bg-background px-6 py-12 text-base text-foreground leading-relaxed md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block max-w-2xl bg-primary px-3 py-1 font-medium text-3xl text-primary-foreground tracking-tight md:text-4xl"
          >
            ↫ home
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16">
          <FeedbackAnimation />
          <CheckAnimated />
          <NotificationAnimation />
        </div>
      </div>
    </div>
  );
}
