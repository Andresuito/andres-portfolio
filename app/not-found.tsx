import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 my-6 sm:my-8 lg:my-10">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-12">
          <h1 className="text-8xl bg-black text-white w-fit p-1 px-3 mx-auto sm:text-9xl font-bold mb-8 leading-none">
            404
          </h1>
        </div>

        <div className="group">
          <Link
            href="/"
            className="inline-block text-base sm:text-lg ml-1 relative overflow-hidden"
          >
            <div className="relative">
              <span className="block text-base sm:text-lg group-hover:-translate-y-full transition-transform duration-500 ease-out delay-200">
                Go back home
              </span>
              <span className="absolute top-0 left-0 text-base sm:text-lg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200">
                Take me home →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
