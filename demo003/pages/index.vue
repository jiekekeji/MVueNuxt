<template>
  <section class="container">
    <button type="button" class="btn btn-default" @click="getJquery()">获取$</button>
    <ul class="pagination">
      <li><a href="#">&laquo;</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">&raquo;</a></li>
    </ul>
    <button type="button" class="btn btn-success"  @click="navPath()">去about页</button>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

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
      Logo
    },
    methods: {
      getJquery(){
        console.log($);
      },
      navPath(){
        console.log("navPath");
        this.$router.push({path: '/about'});
      }
    },

  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
