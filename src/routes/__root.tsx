import {
  createRootRoute,
  type ErrorComponentProps,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { NotFound } from "@/components/not-found";
import { personSchema, seo } from "@/lib/utils/seo";

import appCss from "../styles.css?url";

function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div style={{ padding: "20px", fontFamily: "var(--font-sans)" }}>
      <h1>Something went wrong</h1>
      <p>{error instanceof Error ? error.message : "An unexpected error occurred."}</p>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => {
    const s = seo({
      title: "Andrés b.r",
      url: "https://andresbr.com",
      description: "I build things for the web.",
      keywords:
        "Andrés B.R, portfolio, web developer, frontend developer, full stack developer, anticommon, vidext",
    });

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#f5f1e8" },
        ...s.meta,
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/site.webmanifest" },
        ...s.links,
      ],
    };
  },
  notFoundComponent: () => <NotFound />,
  errorComponent: ErrorComponent,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const schema = personSchema();

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
