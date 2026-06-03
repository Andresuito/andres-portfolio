import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
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

const ownThing = [
  {
    role: "Founder",
    company: "abari.ph",
    href: "https://abari.ph",
    period: "Now",
  },
  {
    role: "Founder / Developer",
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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-160 px-6 py-8"
    >
      <motion.div variants={item} className="flex w-fit items-center gap-10 border-border border-b">
        <h1 className="text-sm">andrés b.r</h1>

        <div>
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex size-8 items-center justify-center rounded-full text-foreground"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon className="size-3" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
      <motion.section variants={item} className="mt-10">
        <h2 className="mb-4 font-semibold text-muted-foreground text-xs">Projects</h2>
        <div className="space-y-3">
          {ownThing.map((own) => {
            return (
              <motion.a
                key={`${own.company}`}
                href={own.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 border-border border-b pb-3 transition-opacity hover:opacity-70"
                variants={item}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div>
                  <p className="text-sm">{own.company}</p>
                  <p className="text-muted-foreground text-sm">{own.role}</p>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">{own.period}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.section>
      <motion.section variants={item} className="mt-10">
        <h2 className="mb-4 font-semibold text-muted-foreground text-xs">Past works</h2>
        <div className="space-y-3">
          {pastWorks.map((work) => {
            return (
              <motion.a
                key={`${work.company}-${work.period}`}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 border-border border-b pb-3 transition-opacity hover:opacity-70"
                variants={item}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div>
                  <p className="text-sm">{work.company}</p>
                  <p className="text-muted-foreground text-sm">{work.role}</p>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">{work.period}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.section>
    </motion.main>
  );
}
