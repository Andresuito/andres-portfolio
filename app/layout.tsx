import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geist = Geist({
  style: "normal",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-mono",
});

const sourceSerif = Source_Serif_4({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Andrés B.R - Web Developer",
  description:
    "Experienced web developer specializing in React, Next.js, and modern web technologies. Creating beautiful, interactive web experiences and animations.",
  keywords: [
    "web developer",
    "React developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "web animations",
    "web development",
  ],
  authors: [{ name: "Andrés B.R" }],
  creator: "Andrés B.R",
  metadataBase: new URL("https://andresbr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Andrés B.R",
    type: "website",
    locale: "en_US",
    url: "https://andresbr.com",
    title: "Andrés B.R - Web Developer",
    description:
      "Experienced web developer specializing in React, Next.js, and modern web technologies. Creating beautiful, interactive web experiences and animations.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Andrés B.R - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés B.R - Web Developer",
    description:
      "Experienced web developer specializing in React, Next.js, and modern web technologies. Creating beautiful, interactive web experiences and animations.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Andrés B.R - Web Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.variable} ${sourceSerif.variable} bg-[#fafcfd] text-[#32404f] relative antialiased scroll-smooth`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
