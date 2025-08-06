"use client";

import FeedbackAnimation from "@/components/animations/feedback";
import NotificationAnimation from "@/components/animations/notification";
import { Navigation } from "@/components/navigation";

export default function AnimationsPage() {
  return (
    <div className="min-h-screen relative p-8">
      <Navigation />

      <div className="max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Feedback</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center">
              <FeedbackAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">Notification</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center">
              <NotificationAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="font-light opacity-65">soon</h2>
            <div className="w-full flex justify-center py-20 outline outline-neutral-100 bg-neutral-50 flex-1 items-center">
              <span className="text-neutral-400 text-sm">soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
