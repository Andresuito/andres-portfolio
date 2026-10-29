import { IconBrandGithub, IconBrandLinkedin, IconMoon, IconSun } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Ink } from "@/components/ink";
import { PreviewLink } from "@/components/preview-link";

export const Route = createFileRoute("/")({
  component: HomePage,
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
        <h1 className="text-small">
          <Ink>andrés b.r</Ink>
        </h1>

        <div>
          <a
            href="https://github.com/Andresuito"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <IconBrandGithub className="social-icon" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-br/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <IconBrandLinkedin className="social-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
      <section className="intro">
        <p className="intro-copy">
          I'm a web developer with experience in creating digital products for the web, working
          across design, frontend, and the small details that shape how things feel.
        </p>
        <p className="intro-copy intro-copy-following">
          Based between Spain and the Philippines, I launched{" "}
          <PreviewLink href="https://abari.ph/" className="highlight-link">
            abari.ph
          </PreviewLink>
          .
        </p>
      </section>
      <section className="work-section">
        <h2 className="section-title">Projects</h2>
        <div className="work-list">
          {ownThing.map((own) => {
            return (
              <PreviewLink
                key={own.company}
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
              </PreviewLink>
            );
          })}
        </div>
      </section>
      <section className="work-section">
        <h2 className="section-title">Past works</h2>
        <div className="work-list">
          {pastWorks.map((work) => {
            return (
              <PreviewLink
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
              </PreviewLink>
            );
          })}
        </div>
      </section>
      <section className="portfolio-footer">
        <div className="timezones">
          {timezones.map((zone) => {
            const time = times[zone.label];
            const hour = time ? Number(time.slice(0, 2)) : null;
            const period = hour === null ? "pending" : hour >= 7 && hour < 19 ? "day" : "night";
            const Icon = period === "day" ? IconSun : IconMoon;

            return (
              <div key={zone.label} className="timezone">
                <span
                  className="timezone-icon"
                  role="img"
                  aria-label={
                    period === "day" ? "Daytime" : period === "night" ? "Nighttime" : "Loading"
                  }
                >
                  {time && <Icon size={13} stroke={1.6} aria-hidden="true" />}
                </span>
                <span className="timezone-label">{zone.label}</span>
                <span className="timezone-time">{time ?? "--:--"}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
