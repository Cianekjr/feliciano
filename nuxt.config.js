
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
  ],
  plugins: [
    '~/plugins/composition-api'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
    extend (config, ctx) {
    }
  }
}
