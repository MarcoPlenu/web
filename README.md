# Plenu — Landing (Astro)

- Stack: Astro + TailwindCSS
- Gestor de paquetes: pnpm
- i18n: rutas `/es` y `/en` (redirección desde `/` a `/es` vía `astro.config.mjs`)
- Branding: aplicado según `docs/BRAND_GUIDE.md`
- Dominio: `https://www.plenu.app`

## Requisitos

- Node 18+ (LTS)
- pnpm 8+

## Scripts

- `pnpm install` — instala dependencias
- `pnpm dev` — entorno local en `http://localhost:4321`
- `pnpm build` — build de producción a `dist/`
- `pnpm preview` — sirve `dist/` para previsualización

## SEO

- Canonical y `hreflang` automáticos vía `PUBLIC_SITE_URL`
- Open Graph y Twitter Card (summary_large_image)
- `robots.txt` y `sitemap.xml` en `public/`
- JSON‑LD: `Organization` y `WebSite`

Configurar dominio en `.env`:

```
PUBLIC_SITE_URL=https://www.plenu.app
```

## Estructura

- `src/layouts/Layout.astro` — layout base, metadatos SEO, global CSS, Ionicons
- `src/pages/es/index.astro` — landing ES
- `src/pages/en/index.astro` — landing EN
- `src/styles/global.css` — tokens de marca, utilidades y componentes (botones, cards, etc.)
- `public/` — assets estáticos (`favicon.png`, `logo_plenu.png`, `banner_plenu_x2.png`, `robots.txt`, `sitemap.xml`)

## Desarrollo de estilos

- Tailwind v4 con `@theme` para tokens (colores, tipografía)
- Utilidades personalizadas: `.container-max`, `.section`, `.btn`, `.card`, etc.

## Deploy en GCP (estático recomendado)

Opción simple con Cloud Storage + Cloud CDN:

1. Compilar: `pnpm build`
2. Crear bucket (nombre: `www.plenu.app`) y habilitar acceso público de solo lectura
3. Subir `dist/` al bucket (gsutil):
   - `gsutil -m rsync -r dist gs://www.plenu.app`
4. Habilitar Cloud CDN en un backend de bucket + HTTPS Load Balancer
5. Apuntar DNS (CNAME) `www.plenu.app` al LB

Alternativa: Firebase Hosting (CDN + SSL) o Cloud Run si se requiere SSR (no necesario aquí)

## Notas

- Los commits se realizan solo bajo indicación (flujo acordado)
- Iconografía: Ionicons vía script en `Layout.astro`
