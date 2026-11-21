# Optimización móvil (rama `optimizacion-movil`)

Estado previo conservado en el tag `baseline-pre-optimizacion` (commit 6460561).

## Cambios

| Archivo | Cambio |
|---|---|
| `src/pages/index.astro`, `src/styles/global.css` | El planeta (`.hero-planet`) vive ahora en `.hero-planet-clip` (overflow:hidden, funciona en cualquier iOS). Era el elemento que ensanchaba la página (no el astronauta). |
| `src/styles/global.css` | `.hero-inner::before` (scrim) sobresalía 24px en pantallas < 760px: se recorta y se compensa el gradiente. |
| `src/components/AstronautHero.astro` | 2.193 `<rect>` → 1 `<path>` por color (tramos horizontales). Mismos píxeles. |
| `src/layouts/BaseLayout.astro` | Estrellas estáticas en 3 capas (box-shadow) en vez de 70–160 nodos animados. `.reveal` robusto (revela lo que ya pasó, red de seguridad por geometría, `pageshow`, sin IO, `<noscript>`). Pausa de animaciones fuera de pantalla. Fuentes alojadas localmente con precarga. |
| `src/styles/global.css` | `@supports (-webkit-touch-callout: none)` (solo iOS): sin `backdrop-filter` ni `blur()` grandes, con fondos algo más opacos. `@font-face` locales. |
| `src/components/ProjectMedia.astro`, `src/pages/portafolio/index.astro` | Las 2 primeras tarjetas de `/portafolio` cargan `eager` (la primera con `fetchpriority=high`). |
| `src/pages/portafolio/[slug].astro` | El JSON-LD apuntaba al PNG original (2,3 MB); ahora usa WebP 1200px. |
| `astro.config.mjs` | Paso post-build que borra los PNG originales no referenciados de `dist/_astro`. |
| `public/fonts/*.woff2` | Plus Jakarta Sans, JetBrains Mono y General Sans (subconjunto latino). |

## Resultados

| Métrica | Antes | Después |
|---|---|---|
| Peso de `dist` | 145 MB | 53 MB |
| PNG originales en `dist/_astro` | 84 | 0 |
| Elementos SVG del astronauta | 2.193 | 10 (solo polvo) + ~20 paths |
| Nodos de estrellas | 70–160 animados | 3 estáticos |
| Orígenes externos bloqueantes (fuentes) | 2 | 0 |
| Desborde horizontal con `overflow-x` desactivado (iPhone, WebKit) | 106–226 px | 0 px |
| `.reveal` que quedan invisibles tras scroll rápido | hasta 21 | 0 |
| Comprobaciones de la batería (30) con fallos | 18 | 0 |
| Diff de píxeles del astronauta y hero vs. base | — | 0 (iPhone: máx. 1/255; Chromium móvil: máx. 7/255 en 0,07 % de píxeles) |
| Tiempo de hilo principal, inicio móvil (Lighthouse, 4x CPU) | Style/Layout ~2,7–3 s; otros ~2,2–5,3 s | Style/Layout ~1,7–2 s; otros ~1,2–1,7 s |

Nota: las puntuaciones y el TBT de Lighthouse varían mucho entre ejecuciones en esta máquina (el mismo código dio de 72 a 100 puntos), así que no se usan como prueba. Los datos fiables son los deterministas de arriba.

## Limitaciones

- Sin iPhone real: WebKit de Playwright en Windows no es iOS. Sin GPU/memoria reales de iPhone.
- El WebKit de Playwright no activa `@supports (-webkit-touch-callout: none)`; el bloque iOS se probó forzándolo con `@media all` en una copia.
- INP no se mide en laboratorio.
