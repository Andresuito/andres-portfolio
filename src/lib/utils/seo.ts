export const seo = ({
  title,
  description,
  keywords,
  image,
  url,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@realstate" },
    { name: "twitter:site", content: "@realstate" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...(image
      ? [
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "og:image", content: image },
        ]
      : []),
    ...(url
      ? [
          { name: "og:url", content: url },
          { name: "twitter:url", content: url },
        ]
      : []),
  ];

  const links = url ? [{ rel: "canonical", href: url }] : [];

  return { meta: tags, links };
};
