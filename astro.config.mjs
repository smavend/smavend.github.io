import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  site: 'https://smavend.github.io',
  output: 'static',
  outDir: './docs',

  build: {
    assets: 'astro'
  }
});