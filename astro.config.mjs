import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://smavend.github.io";
//const SCRIPT = includes('build');
const isBuild = process.argv.includes("build");

let BASE_URL = LOCALHOST_URL;

if  (isBuild) {
  BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [tailwind()],
  output: 'static',
  outDir: './docs',

  build: {
    assets: 'astro'
  }
});