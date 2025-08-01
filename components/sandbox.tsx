import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export function Sandbox() {
  return (
    <section className="projects-section">
      <header>
        <h2 className="font-semibold text-lg animate-item bg-black text-white w-fit p-1 px-3">
          Sandbox
        </h2>
      </header>

      <article className="flex flex-col sm:flex-row mt-5 sm:justify-between sm:items-center animate-item">
        <Link
          className="group flex items-center hover:translate-x-3 transition duration-150"
          href="/scroll-carousel"
          prefetch
        >
          <p className="text-base sm:text-lg">Scroll carousel</p>
          <ArrowIcon />
        </Link>

        <div className="flex items-center mt-1 sm:mt-0">
          <div className="relative group inline-block text-sm sm:text-base text-black p-1">
            Motion 01
          </div>
        </div>
      </article>

      <article className="flex flex-col sm:flex-row mt-5 sm:justify-between sm:items-center animate-item">
        <Link
          className="group flex items-center hover:translate-x-3 transition duration-150"
          href="/svg-draw-path"
          prefetch
        >
          <p className="text-base sm:text-lg">Animate SVG Path</p>
          <ArrowIcon />
        </Link>

        <div className="flex items-center mt-1 sm:mt-0">
          <div className="relative group inline-block text-sm sm:text-base text-black p-1">
            Motion 02
          </div>
        </div>
      </article>
    </section>
  );
}
