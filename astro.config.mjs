import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://desquin.vercel.app',
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
