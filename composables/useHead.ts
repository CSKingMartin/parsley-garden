type Metadata = {
  title?: string;
  description?: string;
  image?: string;
};

export function pageMeta({ title, description, ogImage }) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary",
    ogImage,
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/svg",
        href: "/favicon.svg",
      },
    ],
  });
}
