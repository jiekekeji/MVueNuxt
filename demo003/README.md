003-使用外部资源
===

1、局部引用,在 pages 目录内的 .vue 文件中引用，只能在当前的.vue中使用，别的.vue文件无法使用,例如使用bootstrap:
~~~
<script>
  export default {
    head: {
      script: [
        {src: 'https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js'},
        {src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'}
      ]
    },
    components: {
    },
    methods: {
    },
  }
</script>
~~~

2、全局引用,在 nuxt.config.js 中配置你引用的资源文件：例如使用bootstrap:
~~~
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
}
~~~
