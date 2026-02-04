import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound";
import { ThemeProvider } from "@/components/theme-provider";
import { useGlobalClickSounds } from "@/hooks/useSounds";
import { getThemeServerFn } from "@/lib/theme";
import { personSchema, seo } from "@/lib/utils/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => {
    const s = seo({
      title: "Andrés B.R | Web Developer",
      description:
        "I'm a web developer specializing in building attractive, dynamic and functional websites. I use code to turn ideas into seamless web experiences, specializing in smooth animations and interactive components.",
      keywords:
        "web developer, React developer, Next.js, TypeScript, frontend developer, full stack developer, JavaScript, web animations, portfolio",
    });

    const schema = personSchema();

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#111111" },
        ...s.meta,
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/klu5mct.css",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        ...(s.links || []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ],
    };
  },
  loader: () => getThemeServerFn(),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = Route.useLoaderData();

  useGlobalClickSounds({
    preset: "click",
    volume: 0.4,
    enabled: true,
  });

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider serverTheme={theme}>{children}</ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
