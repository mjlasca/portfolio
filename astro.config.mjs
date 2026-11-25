import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.example.com',
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
