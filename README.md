# Plenu — Landing (Astro)

- Stack: Astro + TailwindCSS
- Gestor: pnpm
- i18n: rutas /es y /en (redirección desde / a /es)
- Branding aplicado según `docs/BRAND_GUIDE.md`

## Scripts

- `pnpm dev` — entorno local
- `pnpm build` — build de producción
- `pnpm preview` — previsualización del build

## Deploy

- Vercel recomendado. Proyecto Astro estándar (Node 18+). Añadir repo en GitHub y conectar en Vercel.

## Estructura

- `src/layouts/Layout.astro` — layout base con CSS global y metadatos
- `src/pages/index.astro` — redirige a `/es`
- `src/pages/es/index.astro` — página ES
- `src/pages/en/index.astro` — página EN
- `src/styles/global.css` — variables y utilidades Tailwind

## Branding

Seguir tokens, tipografía y reglas en `docs/BRAND_GUIDE.md`. Reutilizados como CSS vars y en Tailwind.
