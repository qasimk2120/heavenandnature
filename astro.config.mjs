import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL || "https://heavenandnature.example";
const base = process.env.SITE_BASE || undefined;

export default defineConfig({
  site: siteUrl,
  base,
  publicDir: "./assets",
  integrations: [sitemap()],
  output: "static",
  build: {
    format: "directory"
  }
});
