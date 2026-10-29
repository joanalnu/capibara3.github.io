// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: deploys as-is to Cloudflare (Workers static assets / Pages), no adapter needed.
export default defineConfig({
  site: 'https://capibara3.github.io', // change to your final domain
  integrations: [sitemap()],
});
