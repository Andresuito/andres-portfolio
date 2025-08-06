"use client";

import FeedbackAnimation from "@/components/animations/feedback";
import NotificationAnimation from "@/components/animations/notification";

export default function AnimationsPage() {
  return (
    <div className="min-h-screen relative p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-6">
            <h2 className="font-light opacity-65">Feedback</h2>
            <div className="w-full flex justify-center py-20">
              <FeedbackAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="font-light opacity-65">Notification</h2>
            <div className="w-full flex justify-center py-20">
              <NotificationAnimation />
            </div>
          </div>

          <div className="flex flex-col space-y-6"> </div>
        </div>
      </div>
    </div>
  );
}
