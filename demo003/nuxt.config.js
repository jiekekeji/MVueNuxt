module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo003',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      {src: 'https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js'},
      {src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'}
    ],
    link: [
      {rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
