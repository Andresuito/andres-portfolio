"use client";

import FeedbackAnimation from "@/components/animations/feedback";
import NotificationAnimation from "@/components/animations/notification";
import RippleAnimation from "@/components/animations/ripple";
import { Navigation } from "@/components/navigation";

export default function AnimationsPage() {
  return (
    <div className="min-h-screen relative p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-stretch">
          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Feedback</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center min-h-[400px]">
              <FeedbackAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Notification</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center min-h-[400px]">
              <NotificationAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Ripple</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center min-h-[400px]">
              <RippleAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
