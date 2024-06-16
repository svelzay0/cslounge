// https://nuxt.com/docs/api/configuration/nuxt-config
// import { tokenRefresh } from './utils/api';
const apiUrl: { [key: number]: string; } = {
  0: "https://app-shop-vujdw.ondigitalocean.app"
};

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL,
    },
  },
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