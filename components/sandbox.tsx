import Link from "next/link";

export function Sandbox() {
  return (
    <section className="projects-section">
      <header>
        <h2 className="font-semibold text-lg animate-item bg-black text-white w-fit p-1 px-3">
          Sandbox
        </h2>
      </header>

      <Link
        className="flex flex-row mt-5 justify-between animate-item group"
        href="/animations"
        prefetch
      >
        <div className="flex items-center relative overflow-hidden">
          <div className="relative">
            <span className="block text-base sm:text-lg group-hover:-translate-y-full transition-transform duration-500 ease-out delay-200">
              Animations collection
            </span>
            <span className="absolute top-0 left-0 text-base sm:text-lg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200">
              Explore animations
            </span>
          </div>
        </div>

        <div className="flex items-center mt-1 sm:mt-0">
          <div className="relative inline-block text-sm sm:text-base text-black p-1">
            Motion 02
          </div>
        </div>
      </Link>
    </section>
  );
}
