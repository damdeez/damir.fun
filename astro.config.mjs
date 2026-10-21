import { defineConfig, fontProviders } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
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