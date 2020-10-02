
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@/assets/css/bootstrap.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas', 'faProjectDiagram', 'faChartBar', 'faUnlockAlt',
            'faGift', 'faGlobe', 'faAngleLeft', 'faAngleRight',
            'faAngleDoubleLeft', 'faAngleDoubleRight', 'faTrash',
            'faDotCircle', 'faAngleDoubleDown', 'faTh', 'faHeart',
            'faEye', 'faStar', 'faAngleDown', 'faBell', 'faComment']
        },
      ]
    }]
  ],
  axios: {
    baseURL: 'https://api.letasknoelayha.com/api/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'admin/auth/login', method: 'post' },
          logout: false,
          user: { url: 'admin/auth/me', method: 'post' }
        },
        user: {
          property: false,
          // autoFetch: true
        },
        token: {
          property: 'access_token',
          // required: true,
          type: 'Bearer'
        },
      }
    },
    // redirect: false
    redirect: {
      login: false,
      logout: '/',
      callback: '/auth/login',
      home: false
    }
  },
}
