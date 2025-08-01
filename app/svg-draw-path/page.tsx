"use client";

import SvgDraw from "@/components/svg-draw";
import Link from "next/link";

export default function SvgDrawPage() {
  return (
    <main className="min-h-screen">
      <div className="pb-20 grid p-4 grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
        <div className="flex justify-center sm:justify-start items-start">
          <Link href="/">
            <span className="border-neutral-300 border rounded-full p-2 px-4 text-sm sm:text-base">
              Home
            </span>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base">
            SvgDraw animation using{" "}
            <span className="bg-[#fff42b] p-1">Motion</span>
          </p>
        </div>

        <div className="hidden sm:block"></div>
      </div>

      <div className="hidden sm:block">
        <SvgDraw />
      </div>
    </main>
  );
}
