"use client";

import {
  externalProjects,
  projects,
  type ExternalProject,
  type Project,
} from "@/lib/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.1 }}
    >
      <Link
        className="group block transition-all duration-300 ease-in-out !opacity-100"
        data-cursor="case-study"
        href={project.href}
      >
        <div className="flex flex-col gap-2">
          <div className="relative w-full aspect-[16/9] border border-gray-100 overflow-hidden box-border transition-all duration-300 ease-in-out group-hover:border-gray-600">
            <div
              className="relative w-full aspect-[16/9] overflow-hidden"
              role="img"
            >
              {project.media.type === "video" ? (
                <video
                  poster={project.media.poster}
                  className="w-full h-full object-cover scale-102 transition-opacity duration-500 ease-in-out opacity-100"
                  loop
                  autoPlay
                  playsInline
                  muted
                  data-inline-autoplay="true"
                  preload="metadata"
                  aria-label={project.media.alt}
                  style={{ backgroundColor: project.media.backgroundColor }}
                >
                  <source src={project.media.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    backgroundColor: project.media.backgroundColor,
                    opacity: 1,
                  }}
                >
                  <Image
                    alt={project.media.alt}
                    loading="lazy"
                    decoding="async"
                    fill
                    className="object-cover scale-102 transition-opacity duration-500 opacity-100"
                    sizes="100vw"
                    src={project.media.src}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
              )}
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                style={{
                  backgroundColor: project.media.backgroundColor,
                  opacity: 0,
                  zIndex: 10,
                }}
              />
            </div>
            <div className="absolute inset-0 bg-background/0 transition-colors duration-300 ease-in-out group-hover:bg-background/20" />
          </div>
          <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-300 ease-in-out">
            <h3 className="transition-colors font-serif text-2xl duration-300 ease-in-out group-hover:text-gray-600">
              {project.title}
            </h3>
            <h4 className="transition-colors font-mono text-sm uppercase duration-300 ease-in-out group-hover:text-gray-600">
              {project.year}
            </h4>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ExternalProjectCard({
  project,
  index,
}: {
  project: ExternalProject;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 + index * 0.1 }}
    >
      <Link
        className="group block transition-all duration-300 ease-in-out !opacity-100"
        data-cursor="site"
        target="_blank"
        rel="noopener noreferrer"
        href={project.href}
      >
        <div className="flex flex-col gap-2">
          <div className="relative w-full aspect-[16/9] border border-gray-100 overflow-hidden box-border transition-all duration-300 ease-in-out group-hover:border-gray-600">
            <div
              className="relative w-full aspect-[16/9] overflow-hidden"
              role="img"
              aria-label={`Project thumbnail for ${project.title}`}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  backgroundColor: project.media.backgroundColor,
                  opacity: 1,
                }}
              >
                <Image
                  alt={project.media.alt}
                  loading="lazy"
                  decoding="async"
                  fill
                  className="object-cover scale-102 transition-opacity duration-500 opacity-100"
                  sizes="100vw"
                  src={project.media.src}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-background/0 transition-colors duration-300 ease-in-out group-hover:bg-background/20" />
          </div>
          <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-300 ease-in-out">
            <h3 className="transition-colors font-sans text-2xl duration-300 ease-in-out group-hover:text-gray-600">
              {project.title}
            </h3>
            <h4 className="transition-colors font-mono uppercase duration-300 ease-in-out group-hover:text-gray-600">
              {project.year}
            </h4>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        >
          <h3 className="whitespace-nowrap font-sans text-2xl">More Work</h3>
          <div className="flex w-full h-[1px] bg-foreground/10"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalProjects.map((project, index) => (
            <ExternalProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
