# Plenu — Landing (Astro)

- Stack: Astro + TailwindCSS
- Gestor de paquetes: pnpm
- i18n: rutas `/es` y `/en` (redirección desde `/` a `/es` vía `astro.config.mjs`)
- Branding: aplicado según `docs/BRAND_GUIDE.md`
- Dominio: `https://www.plenu.app`

## Requisitos

- Node 22+
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

### CI/CD desde `main` a GCS

Workflow: `.github/workflows/deploy-gcs.yml`

1. Crear un Service Account con permisos mínimos: `Storage Object Admin` sobre el bucket
2. Recomendado: Workload Identity Federation (sin claves JSON)
   - Crear un Proveedor de identidad de trabajo (WIF) para GitHub OIDC
   - Conceder a `github-deployer@plenu-prod.iam.gserviceaccount.com` la `impersonation` desde el WIF
   - En GitHub, definir `Repository variable` `WIF_PROVIDER` con el recurso del proveedor
3. Crear bucket `www.plenu.app` y habilitar ACL pública de lectura (o uniform bucket-level access + política pública)
4. Dar permisos a `allUsers` con `Storage Object Viewer` si usas ACLs (solo si sirves directo desde GCS)
5. Push a `main` dispara build y `gsutil rsync` → `gs://www.plenu.app`

Headers:
- HTML: `Cache-Control: public, max-age=0, must-revalidate`
- Assets: `Cache-Control: public, max-age=31536000, immutable`

## Notas

- Los commits se realizan solo bajo indicación (flujo acordado)
- Iconografía: Ionicons vía script en `Layout.astro`

— Trigger inicial de CI/CD: actualización menor del README.
