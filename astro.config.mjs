// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://turtlesfr.github.io',
  base: '/earthing-institute-website',
  vite: {
    plugins: [tailwindcss()]
  }
});
