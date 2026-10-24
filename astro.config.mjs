import { defineConfig, envField, fontProviders } from 'astro/config';

import netlify from '@astrojs/netlify';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({
    // No edge functions here; their dev emulation needs a local Deno server.
    devFeatures: {
      images: true,
      environmentVariables: false,
      edgeFunctions: false,
    },
  }),
  integrations: [react()],
  env: {
    schema: {
      SHOWCASE_PASSWORD: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      SHOWCASE_LINK_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inconsolata',
      cssVariable: '--font-inconsolata',
      weights: [300, 400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Gochi Hand',
      cssVariable: '--font-gochi-hand',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Comic Sans MS', 'cursive'],
    },
  ],
});