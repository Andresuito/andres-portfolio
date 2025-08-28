export interface Project {
  id: string;
  title: string;
  year: string;
  href: string;
  media: {
    type: "video" | "image";
    poster?: string;
    src: string;
    alt: string;
    backgroundColor: string;
  };
}

export interface ExternalProject {
  id: string;
  title: string;
  description: string;
  year: string;
  href: string;
  external: boolean;
  media: {
    type: "image";
    src: string;
    alt: string;
    backgroundColor: string;
  };
}

export const projects: Project[] = [
  {
    id: "animations",
    title: "Animations collection",
    year: "2025",
    href: "/projects/animations",
    media: {
      type: "video",
      poster: "",
      src: "/projects/animations/thumbnail.mp4",
      alt: "Video preview for animations collection",
      backgroundColor: "rgba(26, 49, 110, 0.314)",
    },
  },
  {
    id: "palette",
    title: "Palette",
    year: "2025",
    href: "/projects/palette",
    media: {
      type: "video",
      poster: "/palette.png",
      src: "/video/palette/thumbnail.mp4",
      alt: "Video preview for palette",
      backgroundColor: "rgba(26, 49, 110, 0.314)",
    },
  },
];

export const externalProjects: ExternalProject[] = [
  {
    id: "ggsalt",
    title: "ggsalt",
    description: "Design Portfolio",
    year: "2025",
    href: "https://ggsalt.work/",
    external: true,
    media: {
      type: "image",
      src: "/ggsalt.png",
      alt: "Preview image for ggsalt",
      backgroundColor: "rgba(26, 49, 110, 0.314)",
    },
  },
];
