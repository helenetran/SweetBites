
import products from './static/products.json'

const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(products.map(product => `product/${product.slug}`))
  })
}

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/SweetBites/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/vuetify'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  ...routerBase,
  build: {
    publicPath: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/SweetBites/' : '/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  outputDir: 'docs',
  devServer: {
    proxy: 'http://SweetBites.test'
  },
  generate: {
    routes: dynamicRoutes
  }
}
