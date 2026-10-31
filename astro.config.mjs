// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// TODO: cambiar site cuando el dominio .com.ar esté confirmado
export default defineConfig({
  site: "https://cabañalejana.com.ar",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  image: {
    domains: [],
  },
});
