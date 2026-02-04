import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound";
import { ThemeProvider } from "@/components/theme-provider";
import { useGlobalClickSounds } from "@/hooks/useSounds";
import { getThemeServerFn } from "@/lib/theme";
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
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/klu5mct.css",
        },
        ...(s.links || []),
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
