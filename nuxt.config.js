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
    '@/css/index.scss'
  ],
  plugins: [
    '~/plugins/composition-api'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  axios: {
    baseURL: 'http://127.0.0.1:8080',
    withCredentials: true
  },
  router: {
    prefetchLinks: false,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ]
}
