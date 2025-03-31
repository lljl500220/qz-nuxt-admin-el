// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
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

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@core/style/index.scss" as *;'
                }
            }
        }
    },

    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
    },

    alias: {
        '@core': path.resolve(__dirname, './@core'),
        '@layouts': path.resolve(__dirname, './@layouts')
    }
})