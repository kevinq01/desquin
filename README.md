# Desquin — sitio web

Sitio construido con [Astro](https://astro.build): genera HTML estático puro (rápido, óptimo para SEO), con espacio para agregar interactividad (formularios, chatbot) más adelante sin perder esa base.

## Estructura

```
src/
  components/     Header, Footer, botón flotante de WhatsApp
  content/proyectos/   Un archivo .md por proyecto del portafolio (agregar uno = crear un archivo)
  layouts/BaseLayout.astro   SEO, metadatos, JSON-LD de la marca
  pages/          Cada archivo = una URL del sitio
  styles/global.css   Todos los tokens de color, tipografía y componentes
public/img/       Imágenes servidas tal cual
```

## Cómo correrlo en tu computador

```bash
npm install
npm run dev       # http://localhost:4321
```

## Cómo publicarlo (build)

```bash
npm run build
```

Esto genera la carpeta `dist/` con HTML, CSS y JS ya listos — es lo único que subes al hosting.

## Publicar en Hostinger / HostGator

1. Corre `npm run build` en tu computador (Node no hace falta en el servidor, el sitio ya queda 100% estático).
2. Sube **todo el contenido** de `dist/` (no la carpeta en sí, lo de adentro) a `public_html/` por FTP o el administrador de archivos del panel.
3. Asegúrate de que `desquin.com` apunte a ese hosting (registro A o CNAME, según lo que indique tu proveedor).

## Antes de publicar, cambia esto

- **`astro.config.mjs`**: confirma que `site` sea `https://desquin.com` (o el dominio final).
- **`src/pages/contacto.astro`**: el formulario usa [Web3Forms](https://web3forms.com/) (gratis, sin backend). Crea una cuenta, copia tu "Access Key" y reemplázala donde dice `TU_ACCESS_KEY_DE_WEB3FORMS`. Si más adelante prefieres tu propio endpoint PHP en Hostinger, solo cambia el `action` del `<form>`.
- Revisa los textos de servicios y proyectos y ajústalos si algo cambió.

## Siguientes pasos sugeridos

1. **Google Search Console**: verifica `desquin.com`, sube `sitemap-index.xml` (ya se genera solo en cada build) y pide indexación.
2. **Google Business Profile**: si atiendes clientes localmente, créalo — ayuda mucho a posicionar el nombre de marca.
3. **Chatbot**: cuando quieras conectarlo, lo correcto es un endpoint PHP en tu hosting (ej. `public_html/api/chat.php`) que reciba el mensaje del visitante, llame a la API de IA que elijas desde el servidor (nunca desde el navegador) y devuelva la respuesta. Así la API key nunca queda expuesta. Este sitio ya está listo para que ese endpoint se conecte por `fetch` desde un componente nuevo.
4. **Nuevos proyectos en el portafolio**: agrega un archivo `.md` en `src/content/proyectos/` siguiendo el formato de los existentes — no hay que tocar código.
