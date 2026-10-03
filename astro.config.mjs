// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://oneupdigitalstudio.com',
  integrations: [react(), mdx(), sitemap(), icon()],
  adapter: cloudflare({
    // Optimize images at build time; the site is static, so no Images binding is needed.
    imageService: 'compile',
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      optimizeDeps: {
        include: ['picomatch'],
      },
    },
  },
});
