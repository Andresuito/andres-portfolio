import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <section className="mx-auto my-6 max-w-2xl px-4 sm:my-8 sm:px-6 md:px-8 lg:my-10">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-12">
          <h1 className="mx-auto mb-8 w-fit p-1 px-3 font-bold text-8xl text-foreground leading-none sm:text-9xl">
            404
          </h1>
        </div>

        <div className="group">
          <Link
            to="/"
            className="relative ml-1 inline-block overflow-hidden text-base text-foreground sm:text-lg"
          >
            <div className="relative">
              <span className="block text-base transition-transform delay-200 duration-500 ease-out group-hover:-translate-y-full sm:text-lg">
                Go back home
              </span>
              <span className="absolute top-0 left-0 translate-y-full text-base transition-transform delay-200 duration-500 ease-out group-hover:translate-y-0 sm:text-lg">
                Take me home →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
