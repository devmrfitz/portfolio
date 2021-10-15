import { getSiteMeta } from './utils/site-meta.js'

const meta = getSiteMeta()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Aditya Pratap Singh',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/hover-animation-directive.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://image.nuxtjs.org
    '@nuxt/image',
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
    // https://windicss.org
    'nuxt-windicss',
    // https://google-analytics.nuxtjs.org
    process.env.NODE_ENV === 'production' && '@nuxtjs/google-analytics',
    // https://ngrok.nuxtjs.org
    process.env.ENABLE_WEB_EXPOSE === '1' && '@nuxtjs/ngrok',
  ].filter(Boolean),

  modules: [
    // https://www.npmjs.com/package/@nuxtjs/dayjs
    '@nuxtjs/dayjs',
    // https://content.nuxtjs.org/
    '@nuxt/content',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })
    },
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },
  googleFonts: {
    families: {
      'Secular One': true,
    },
    display: 'swap',
  },
  telemetry: false,
  target: 'static',
  content: {
    markdown: {
      prism: {
        theme: '~/assets/css/content-code-block.scss',
      },
    },
    liveEdit: false,
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const stats = require('reading-time')(document.text)
        document.stats = stats
      }
    },
  },
  generate: {
    fallback: true,
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV !== 'production',
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production',
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
}
