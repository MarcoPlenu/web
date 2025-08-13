## Multi-stage build to generate static site and serve with Nginx on Cloud Run

FROM node:22-alpine AS build
WORKDIR /app

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@10 --activate && pnpm install --frozen-lockfile

# Copy sources
COPY . .

# Public base URL for SEO canonical/hreflang
ARG PUBLIC_SITE_URL=https://www.plenu.app
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL

# Build Astro → dist/
RUN pnpm build


FROM nginx:alpine AS runtime

# Nginx listens on 8080 for Cloud Run
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static files
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080


