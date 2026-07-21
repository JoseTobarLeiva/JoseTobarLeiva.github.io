import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://JoseTobarLeiva.github.io',
  base: '/my-repo',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        ph: ['*'],
      },
    }),
  ],
});
