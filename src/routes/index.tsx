import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
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
    <main className="portfolio">
      <div className="portfolio-header">
        <h1 className="text-small">andrés b.r</h1>

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
                className="social-link"
              >
                <Icon className="social-icon" />
              </a>
            );
          })}
        </div>
      </div>
      <section className="intro">
        <p className="intro-copy">
          I'm a web developer with experience in creating digital products for the web, working
          across design, frontend, and the small details that shape how things feel.
        </p>
        <p className="intro-copy intro-copy-following">
          Based between Spain and the Philippines, I launched{" "}
          <a href="https://abari.ph/" className="highlight-link">
            abari.ph
          </a>
          .
        </p>
      </section>
      <section className="work-section">
        <h2 className="section-title">Projects</h2>
        <div className="work-list">
          {ownThing.map((own) => {
            return (
              <a
                key={`${own.company}`}
                href={own.href}
                target="_blank"
                rel="noreferrer"
                className="work-link"
              >
                <div>
                  <p className="text-small">{own.company}</p>
                  <p className="work-role">{own.role}</p>
                </div>
                <span className="work-period">{own.period}</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="work-section">
        <h2 className="section-title">Past works</h2>
        <div className="work-list">
          {pastWorks.map((work) => {
            return (
              <a
                key={`${work.company}-${work.period}`}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="work-link"
              >
                <div>
                  <p className="text-small">{work.company}</p>
                  <p className="work-role">{work.role}</p>
                </div>
                <span className="work-period">{work.period}</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="portfolio-footer">
        <div className="timezones">
          {timezones.map((zone) => (
            <div key={zone.label} className="timezone">
              <span>{zone.label}</span>
              <span>{times[zone.label] ?? "--:--"}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
