import CheckAnimated from "@/components/check-animated";
import FeedbackAnimation from "@/components/feedback";
import NotificationAnimation from "@/components/notification";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andrés B.R - Craft",
  description:
    "Playground for creative coding, motion, and visual experiments.",
  keywords:
    "web developer, React developer, Next.js, JavaScript, TypeScript, web animations, web development",
  authors: [{ name: "Andrés B.R" }],
};

export default function Craft() {
  return (
    <div className="min-h-screen py-12 px-6 md:py-24 md:px-8 text-base leading-relaxed bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <Link
            href="/"
            className="max-w-2xl text-3xl md:text-4xl font-medium tracking-tight bg-primary text-primary-foreground px-3 py-1 inline-block"
          >
            ↫ home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-16">
          <FeedbackAnimation />
          <CheckAnimated />
          <NotificationAnimation />
        </div>
      </div>
    </div>
  );
}
