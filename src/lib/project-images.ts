import type { ImageMetadata } from 'astro';

// Convención por proyecto (<slug> = nombre del .md):
//   src/assets/proyectos/<slug>/01.png, 02.png, ... (orden alfabético)
// La primera imagen (01) es la portada: se usa en las tarjetas de inicio y
// del listado, y abre la galería del detalle.
// Un `gallery` escrito en el .md tiene prioridad sobre la convención.

type Shot = { src: ImageMetadata; alt: string; caption?: string };

const galleryFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/proyectos/*/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

export function projectGallery(slug: string, name: string, declared: Shot[] = []): Shot[] {
  if (declared.length) return declared;
  return Object.entries(galleryFiles)
    .filter(([path]) => path.startsWith(`/src/assets/proyectos/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod], i) => ({ src: mod.default, alt: `${name}: pantalla ${i + 1}` }));
}

export function projectCover(slug: string, name: string, declared: Shot[] = []): Shot | undefined {
  return projectGallery(slug, name, declared)[0];
}
