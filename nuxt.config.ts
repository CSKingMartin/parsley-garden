// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        colors: {
          black: "var(--color-black)",
          brown: "var(--color-brown)",
          green: "var(--color-green)",
          lime: "var(--color-lime)",
          white: "var(--color-white)",
        },
        fontFamily: {
          display: "TenaliRamakirshna",
          sans: "IMFellEnglish",
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
