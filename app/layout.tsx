import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andres B.R",
  description: "Frontend Developer",
  metadataBase: new URL(
    `https://${process.env.VERCEL_URL || "localhost:3000"}`
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Andres B.R",
    type: "website",
    locale: "en_US",
    url: "https://andresbr.com",
    title: "Andres B.R",
    description: "Frontend Developer",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Andres B.R",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres B.R",
    description: "Frontend Developer",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Andres B.R",
      },
    ],
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
        className={`${lato.className} bg-white relative antialiased scroll-smooth`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
