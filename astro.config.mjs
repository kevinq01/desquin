import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://desquin.com',
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
