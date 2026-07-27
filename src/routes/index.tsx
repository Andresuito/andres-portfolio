import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { seo } from "@/lib/utils/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => {
    const s = seo({
      title: "Andrés b.r",
      description:
        "Web developer with a focus on polished interfaces, thoughtful animations, and design-driven frontend work.",
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

const ownThing = [
  {
    role: "Founder",
    company: "abari.ph",
    href: "https://abari.ph",
    period: "Now",
  },
  {
    role: "Co-founder",
    company: "anticommon.com",
    href: "https://anticommon.com",
    period: "Now",
  },
];

const pastWorks = [
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

const timezones = [
  { label: "PH", timezone: "Asia/Manila" },
  { label: "ES", timezone: "Europe/Madrid" },
];

function formatLocalTime(timezone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).format(new Date());
}

function HomePage() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      setTimes(
        Object.fromEntries(timezones.map((zone) => [zone.label, formatLocalTime(zone.timezone)])),
      );
    };

    updateTimes();

    const interval = window.setInterval(updateTimes, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto flex min-h-svh max-w-160 flex-col px-6 py-8">
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
      <section className="mt-10 max-w-2xl">
        <p className="text-foreground text-sm leading-7">
          I'm a web developer with experience in creating digital products for the web, working
          across design, frontend, and the small details that shape how things feel.
        </p>
        <p className="mt-4 text-muted-foreground text-sm leading-7">
          Based between Spain and the Philippines, I'm currently building{" "}
          <a href="https://abari.ph/" className="bg-green-50 p-px">
            abari.ph
          </a>
          . I care about making websites feel clear, useful, and easy to use.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-muted-foreground text-sm">Projects</h2>
        <div className="space-y-3">
          {ownThing.map((own) => {
            return (
              <a
                key={`${own.company}`}
                href={own.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 border-border border-b pb-3 hover:opacity-70"
              >
                <div>
                  <p className="text-sm">{own.company}</p>
                  <p className="text-muted-foreground text-sm">{own.role}</p>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">{own.period}</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-muted-foreground text-sm">Past works</h2>
        <div className="space-y-3">
          {pastWorks.map((work) => {
            return (
              <a
                key={`${work.company}-${work.period}`}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 border-border border-b pb-3 hover:opacity-70"
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
      <section className="mt-auto pt-12">
        <div className="flex flex-wrap items-end justify-end gap-x-6 gap-y-2 text-muted-foreground text-xs">
          {timezones.map((zone) => (
            <div key={zone.label} className="flex items-center gap-2">
              <span>{zone.label}</span>
              <span>{times[zone.label] ?? "--:--"}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
