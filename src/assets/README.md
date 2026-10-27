# Galerías de proyectos

Una carpeta por proyecto, con el mismo nombre del `.md` en `src/content/proyectos/`:

    src/assets/proyectos/gestion-excursiones/01-panel.png

Luego, en el frontmatter del `.md`:

    gallery:
      - src: "../../assets/proyectos/gestion-excursiones/01-panel.png"
        alt: "Panel administrativo"
        caption: "Resumen general"   # opcional

Astro optimiza las imágenes (WebP, tamaños responsive) en el build.
Para cambiar el orden o reemplazar una captura, edita esa lista.
