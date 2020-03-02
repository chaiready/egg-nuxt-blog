const { resolve } = require('path')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */

  server: {
    // host: '192.168.2.155',
    // port: 3000,
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:7001/api'
        : 'http://localhost:7001/api',
  },
  rootDir: resolve(__dirname, '../'),
  srcDir: resolve(__dirname, '../web'),
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the vue-config
   */

  vue: {
    config: {
      silent: true,
      // productionTip: true,
      // devtools: true,
      warnHandler(msg, vm, trace) {
        // console.warn(msg,trace)
      },
      errorHandler(msg, vm, trace) {
        console.error(msg, trace)
      },
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#67C23A' },
  /*
   ** Global CSS
   */
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/global-components.js' },
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/lib.js', ssr: false },
    { src: '@/plugins/init-store', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  css: [
    'normalize.css',
    '@/assets/css/reset.css',
    '@/assets/css/global.css',
    '@/assets/css/page-transition.css',
  ],
  styleResources: {
    less: 'assets/css/*.less',
  },
  modules: [
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/proxy',
  ],

  proxy: {
    '/api': {
      target: 'http://localhost:7001',
    },
    '/uploads': {
      target: 'http://localhost:7001',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  /*
   ** Build configuration
   */

  generate: {
    dir: process.env.buildDir || resolve(__dirname, '../docs'),
    // routes: [
    //   '/users/1',
    //   '/users/2',
    //   '/users/3'
    // ]
  },
  buildDir: resolve(__dirname, '../public'),
  build: {
    publicPath:'egg-nuxt-blog/_nuxt/',
    // devtools: true,
    babel: {
      plugins: [
        [
          'component',
          { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' },
        ],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
