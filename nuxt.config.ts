// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    modules: [
        '@nuxt/eslint',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@element-plus/nuxt'
    ],

    routeRules: {
        '/': {prerender: true, redirect: '/home'},
    },

    css: [
        '@core/style/index.scss'
    ],

    alias: {
        '@core': './@core',
        '@layouts': './@layouts'
    }
})