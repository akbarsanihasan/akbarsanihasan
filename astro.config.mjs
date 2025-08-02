// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://akbarsani.fun',
    server: {
        port: 42069,
        host: true,
        allowedHosts: true,
    },

    integrations: [sitemap()],
})
