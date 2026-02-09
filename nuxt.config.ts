// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  compatibilityDate: "2025-07-15",
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      {
        path: "~/components",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/sanity",
    "nuxt-security",
  ],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-04-01",
  },
  security: {
    headers: {
      crossOriginResourcePolicy: "cross-origin",
      crossOriginEmbedderPolicy: "unsafe-none",
      crossOriginOpenerPolicy: "same-origin",
      xFrameOptions: false, // Allow framing from Sanity Studio
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://cdn.sanity.io", // Allow images from Sanity CDN
          "https://i.ytimg.com/", // Allow YouTube thumbnail images
          "https://img.youtube.com/", // Allow YouTube thumbnail images
        ],
        "frame-ancestors": [
          "'self'",
          "https://app.sanity.io",
          "https://www.sanity.io/",
          "https://parsley-garden.sanity.studio/",
          "http://localhost:*",
        ], // Allow framing from Sanity Studio
        "script-src": false,
        "script-src-attr": ["'unsafe-inline'"],
      },
    },
    corsHandler: {
      allowHeaders: "*",
      origin: [
        `https://${process.env.NUXT_SANITY_PROJECT_ID}.apicdn.sanity.io/*`,
      ],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        colors: {
          black: "var(--color-black)",
          brown: "var(--color-brown)",
          green: "var(--color-green)",
          lime: "var(--color-lime)",
          white: "var(--color-white)",
          shamrock: "var(--color-shamrock)",
          terracotta: "var(--color-terracotta)",
          yellow: "var(--color-yellow)",
          "sky-blue": "var(--color-sky-blue)",
          "bold-blue": "var(--color-bold-blue)",
          grape: "var(--color-grape)",
          camel: "var(--color-camel)",
          pink: "var(--color-pink)",
          red: "var(--color-red)",
        },
        fontFamily: {
          serif: "IMFellEnglish",
          ubuntu: "Ubuntu",
          noto: "NotoKufi",
          tenali: "TenaliRamakrishna",
        },
        spacing: {
          container: "90rem",
          "3xs": "var(--space-3xs)",
          "2xs": "var(--space-2xs)",
          xs: "var(--space-xs)",
          sm: "var(--space-sm)",
          md: "var(--space-md)",
          lg: "var(--space-lg)",
          xl: "var(--space-xl)",
          "2xl": "var(--space-2xl)",
          "3xl": "var(--space-3xl)",
        },
      },
    },
  },
});
