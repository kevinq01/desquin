import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Astro deja en dist/_astro los PNG originales de las capturas (≈96 MB) aunque
// el sitio solo sirve las versiones WebP generadas. Este paso borra únicamente
// los rasters de _astro que NINGÚN html/css/js del build referencia.
const pruneUnusedOriginals = () => ({
  name: 'prune-unused-originals',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const root = fileURLToPath(dir);
      const walk = (d) => readdirSync(d).flatMap((f) => {
        const full = join(d, f);
        return statSync(full).isDirectory() ? walk(full) : [full];
      });
      const all = walk(root);
      const text = all.filter((f) => /\.(html|css|js|xml|json)$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('\n');
      for (const f of all) {
        const name = f.split(/[\\/]/).pop();
        if (!f.includes('_astro') || !/\.(png|jpe?g)$/i.test(name)) continue;
        if (!text.includes(name)) rmSync(f);
      }
    },
  },
});

export default defineConfig({
  site: 'https://desquin.com',
  integrations: [sitemap(), pruneUnusedOriginals()],
  compressHTML: true,
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
