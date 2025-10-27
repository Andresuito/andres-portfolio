import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-mono",
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
      "Based in Spain, I specialize in smooth animations and interactive components. My work centers on interfaces that feel intuitive and adapt to tomorrow’s standards.",
    images: [
      {
        url: "/api/og?title=Web Developer",
        width: 1200,
        height: 630,
        alt: "Andrés B.R - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés B.R - Web Developer",
    description:
      "Based in Spain, I specialize in smooth animations and interactive components. My work centers on interfaces that feel intuitive and adapt to tomorrow’s standards.",
    images: [
      {
        url: "/api/og?title=Web Developer",
        width: 1200,
        height: 630,
        alt: "Andrés B.R - Web Developer",
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
        className={`${geistMono.className} relative scroll-smooth bg-background text-[#32404f] antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
