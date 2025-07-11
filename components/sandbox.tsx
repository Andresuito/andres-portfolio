import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

export function Sandbox() {
  return (
    <section className="projects-section">
      <header>
        <h2 className="font-semibold text-lg animate-item">Sandbox</h2>
      </header>

      <article className="flex mt-5 justify-between items-center animate-item">
        <Link
          className="group flex items-center hover:translate-x-3 transition duration-150"
          href="/scroll-carousel"
          prefetch
        >
          <p className="text-lg">Scroll carousel</p>
          <ArrowIcon />
        </Link>

        <div className="flex items-center">
          <div className="relative group inline-block text-base text-black">
            GSAP 01
          </div>
        </div>
      </article>
    </section>
  );
}
