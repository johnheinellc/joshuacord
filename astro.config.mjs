// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://joshuacord.org',
  integrations: [
    sitemap({
      // The post-donation thank-you page is noindex; keep it out of the sitemap too.
      filter: (page) => !page.endsWith('/thank-you/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
