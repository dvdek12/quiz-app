// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // "nuxt-icon",
    "@nuxtjs/supabase",
    "@nuxt/ui",
  ],

  supabase: {
    redirect: false,
  },

  googleFonts: {
    families: {
      Salsa: [400],
      Chivo: [400],
      Bangers: [400],
      Varela: [400],
    },
  },
});
