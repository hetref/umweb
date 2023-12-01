import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        id: "your-app-id",
        name: "Your App Name",
        short_name: "Your Short App Name",
        start_url: "/",
        display: "standalone",
        icon: {
          16: "path/to/your/16px.png",
          48: "path/to/your/48px.png",
          128: "path/to/your/128px.png",
          256: "path/to/your/256px.png",
        },
      },
      registerType: "registerGenerated",
      workbox: {
        navigateFallback: "/index.html",
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
});
