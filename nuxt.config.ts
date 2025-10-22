// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            black: "#12130f",
            green: "#5b9279",
            lime: "#8fcb9b",
            white: "#eae6e5",
            brown: "#8f8073",
          },
        },
      },
    },
  },
});
