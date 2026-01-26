import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Integrations
  integrations: [tailwind()],
  
  // Output static HTML files (for Cloudflare Pages deployment)
  output: 'static',
  
  // Build options
  build: {
    format: 'directory',
  },
  
  // Development server options
  server: {
    port: 4321,
    host: true,
  },
});
