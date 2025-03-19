import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/yipinbashu-app/build",
  plugins: [
    laravel({
      input: "resources/js/app.tsx",
      refresh: true,
    }),
    react(),
  ],
  // server: {
  //   host: "0.0.0.0",
  //   port: 8080,
  //   hmr: {
  //     host: "192.168.1.106",
  //   },
  // },
});
