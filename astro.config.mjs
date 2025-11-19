import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',

  markdown: {
    syntaxHighlight: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});