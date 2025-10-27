import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Andrés B.R",
  description:
    "The page you're looking for doesn't exist. Return to the homepage to explore my web development portfolio and projects.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "404 - Page Not Found | Andrés B.R",
    description:
      "The page you're looking for doesn't exist. Return to the homepage to explore my web development portfolio and projects.",
    url: "https://andresbr.com/404",
    siteName: "Andrés B.R",
    images: [
      {
        url: "/api/og?title=Web Developer&subtitle=Andrés B.R",
        width: 1200,
        height: 630,
        alt: "404 - Page Not Found | Andrés B.R",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 - Page Not Found | Andrés B.R",
    description:
      "The page you're looking for doesn't exist. Return to the homepage to explore my web development portfolio and projects.",
    images: [
      {
        url: "/api/og?title=Web Developer&subtitle=Andrés B.R",
        width: 1200,
        height: 630,
        alt: "404 - Page Not Found | Andrés B.R",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto my-6 max-w-2xl px-4 sm:my-8 sm:px-6 md:px-8 lg:my-10">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-12">
          <h1 className="mx-auto mb-8 w-fit bg-black p-1 px-3 font-bold text-8xl text-white leading-none sm:text-9xl">
            404
          </h1>
        </div>

        <div className="group">
          <Link
            prefetch
            href="/"
            className="relative ml-1 inline-block overflow-hidden text-base sm:text-lg"
          >
            <div className="relative">
              <span className="group-hover:-translate-y-full block text-base transition-transform delay-200 duration-500 ease-out sm:text-lg">
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
