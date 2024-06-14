// https://nuxt.com/docs/api/configuration/nuxt-config
const apiUrl: { [key: number]: string; } = {
  0: "https://app-shop-vujdw.ondigitalocean.app"
};

export default defineNuxtConfig({
  
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "material-design-icons-iconfont/dist/material-design-icons.css",
    "./assets/styles/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
      "process.env.API": apiUrl,
    },
  },
});
