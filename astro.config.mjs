import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://niveldigitalcol.com',
  base: '/mario-lasluisa/',
  trailingSlash: 'always',
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
