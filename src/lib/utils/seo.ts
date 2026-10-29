export const seo = ({
  title,
  description,
  keywords,
  url,
}: {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
}) => {
  const siteUrl = "https://andresbr.com";
  const finalImage = `${siteUrl}/og.jpg`;
  const finalUrl = url || siteUrl;

  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: "Andrés B.R" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@andresuiito" },
    { name: "twitter:site", content: "@andresuiito" },
    { name: "twitter:image", content: finalImage },
    // Open Graph
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: finalImage },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    { name: "og:site_name", content: "Andrés B.R - Portfolio" },
    { name: "og:locale", content: "en_US" },
    ...(url
      ? [
          { name: "og:url", content: finalUrl },
          { name: "twitter:url", content: finalUrl },
        ]
      : []),
  ];

  const links = url ? [{ rel: "canonical", href: finalUrl }] : [];

  return { meta: tags, links };
};

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrés B.R",
  jobTitle: "Web Developer",
  description: "I build things for the web.",
  url: "https://andresbr.com",
  sameAs: [
    "https://github.com/Andresuito",
    "https://www.linkedin.com/in/andres-br/",
    "https://x.com/andresuiito",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TanStack",
    "TypeScript",
    "Web Development",
    "Frontend Development",
    "UI/UX Design",
    "Web Animations",
  ],
});
