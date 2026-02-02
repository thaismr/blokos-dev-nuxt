const isProd = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: true,

  devtools: { enabled: !isProd },

  nitro: {
    preset: isProd ? 'static' : 'node-server',
    prerender: isProd
      ? {
        crawlLinks: true,
        routes: ['/']
      }
      : undefined
  },

  experimental: {
    payloadExtraction: true
  },

  app: {
    head: {
      title: 'Blokos . Dev',
      htmlAttrs: { lang: 'en-US' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          id: 'description',
          name: 'description',
          content: 'Keep track of portfolio projects for Blokos development.',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  components: true,

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || ''
    }
  },

  vite: {
    build: {
      sourcemap: !isProd
    },
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/ui'],

  ui: {
    prefix: 'U' // Prefixo padrão para componentes (ex: <UButton>)
  },

  fonts: {
    families: [
      { name: 'Roboto Condensed', provider: 'google' }
    ]
  },

})