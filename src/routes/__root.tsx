import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound";
import { seo } from "@/lib/utils/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => {
    const s = seo({
      title: "Andrés B.R - Web Developer",
      description:
        "Experienced web developer specializing in React, Next.js, Tanstack and modern web technologies. Creating beautiful, interactive web experiences and animations.",
    });

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...s.meta,
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        ...(s.links || []),
      ],
    };
  },
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
