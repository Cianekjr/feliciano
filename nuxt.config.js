export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Poppins:400,900&display=swap' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/css/index.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],
  plugins: [
    '~/plugins/composition-api',
    { src: '~/plugins/vue-slick-carousel' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  build: {
    extend (config, ctx) {},
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 3
          }
        ]
      ],
      plugins: ['@babel/transform-runtime']
    }
  },
  axios: {
    withCredentials: true
  },
  router: {
    prefetchLinks: false,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-leaflet'
  ],
  serverMiddleware: [
    '~/middlewares/api.js'
  ],
  server: {
    port: process.env.PORT || 8080,
    host: process.env.HOST || '0.0.0.0'
  }
}
