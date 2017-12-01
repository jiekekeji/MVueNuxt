<template>
  <section class="container">
    商品列表
    <nuxt-child></nuxt-child>
    <ul class="footer-tabs">
      <li @click="navPath(0)">aaa</li>
      <li @click="navPath(1)">bbb</li>
    </ul>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    methods: {
      navPath(index){
        switch (index) {
          case 0:
            this.$router.push({path: '/home/pdlist/aaa'});
            break;
          case 1:
            this.$router.push({path: '/home/pdlist/bbb'});
            break;
        }
      }
    }
  }
</script>

<style scoped="">
  .container {
    height: auto;
    width: 100%;
  }

  .content {
    width: 100%;
    height: 160px;
  }

  .footer-tabs {
    height: 30px;
    width: 360px;
    background-color: red;
    list-style: none;
  }

  .footer-tabs > li {
    height: 30px;
    width: 100px;
    float: left;
    margin-left: 2px;
    background-color: #dbe1ec;
    list-style: none;
  }

</style>
