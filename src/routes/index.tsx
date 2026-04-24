import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => {
    const s = seo({
      title: "Andrés b.r",
      description: "I'm just a web developer",
      keywords:
        "Andres B.R, portfolio, web developer, frontend developer, full stack developer, anticommon, vidext",
      url: "https://andresbr.com",
    });

    return {
      meta: [...s.meta],
      links: [...(s.links || [])],
    };
  },
});

const ownThing = {
  role: "Founder / Developer",
  company: "anticommon.com",
  href: "https://anticommon.com",
  period: "Now",
};

const moneyFarming = [
  {
    role: "Full Stack Developer",
    company: "vidext.io",
    href: "https://vidext.io",
    period: "2024-2025",
  },
  {
    role: "Frontend Developer",
    company: "chekin.com",
    href: "https://chekin.com",
    period: "2023-2024",
  },
];

const socials = [
  {
    label: "X",
    href: "https://x.com/andresuiito",
    icon: IconBrandX,
  },
  {
    label: "GitHub",
    href: "https://github.com/Andresuito",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andres-br/",
    icon: IconBrandLinkedin,
  },
];

function HomePage() {
  return (
    <main className="max-w-160 px-6 py-8">
      <div className="flex w-fit items-center gap-10 border-border border-b">
        <h1 className="text-sm">andrés b.r</h1>

        <div>
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex size-8 items-center justify-center rounded-full text-foreground"
              >
                <Icon className="size-3" />
              </a>
            );
          })}
        </div>
      </div>
      <section className="mt-10">
        <h2 className="mb-4 text-muted-foreground text-sm">my little scheme</h2>
        <div className="space-y-3">
          <a
            href={ownThing.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-baseline justify-between gap-4 border-border border-b pb-3 transition-opacity hover:opacity-70"
          >
            <div>
              <p className="text-sm">{ownThing.company}</p>
              <p className="text-muted-foreground text-sm">{ownThing.role}</p>
            </div>
            <span className="shrink-0 text-muted-foreground text-xs">{ownThing.period}</span>
          </a>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-muted-foreground text-sm">past works</h2>
        <div className="space-y-3">
          {moneyFarming.map((work) => {
            return (
              <a
                key={`${work.company}-${work.period}`}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 border-border border-b pb-3 transition-opacity hover:opacity-70"
              >
                <div>
                  <p className="text-sm">{work.company}</p>
                  <p className="text-muted-foreground text-sm">{work.role}</p>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">{work.period}</span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
