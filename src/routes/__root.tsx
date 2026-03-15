import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { personSchema, seo } from "@/lib/utils/seo";
import appCss from "../styles.css?url";

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div style={{ padding: "20px", fontFamily: '"Geist Mono"' }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => {
    const s = seo({
      title: "Andrés b.r",
      description:
        "Portfolio of Andrés B.R. Currently building anticommon.com and previously worked on vidext.io.",
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
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;700&display=swap",
        },
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/site.webmanifest" },
        ...(s.links || []),
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
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <is not dangerous>
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
