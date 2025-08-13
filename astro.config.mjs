// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Nota: la redirección raíz → /es la maneja Nginx/Worker en edge para evitar puertos en Location
});