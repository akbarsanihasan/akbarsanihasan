// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    server: {
        port: 42069,
        host: true,
        allowedHosts: true,
    },
    i18n: {
        locales: ['id', 'en'],
        defaultLocale: 'en',
    },
})
