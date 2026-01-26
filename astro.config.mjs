import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output static HTML files (for Cloudflare Pages deployment)
  output: 'static',
  
  // Site URL - update this per deployment
  // site: 'https://your-domain.com',
  
  // Build options
  build: {
    // Generate clean URLs without .html extension
    format: 'directory',
  },
  
  // Development server options
  server: {
    port: 4321,
    host: true,
  },
});
