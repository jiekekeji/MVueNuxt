<template>
  <div class="container">
    <div class="content">
      <nuxt-child></nuxt-child>
    </div>
    <ul class="footer-tabs">
      <li @click="navPath(0)">商品列表</li>
      <li @click="navPath(1)">购物车</li>
      <li @click="navPath(2)">个人中心</li>
    </ul>
  </div>
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
            this.$router.push({path: '/home/pdcart'});
            break;
          case 2:
            this.$router.push({path: '/home/pdcenter'});
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
    height: 80px;
    width: 360px;
    background-color: red;
    list-style: none;
  }

  .footer-tabs > li {
    height: 80px;
    width: 100px;
    float: left;
    margin-left: 2px;
    background-color: #dbe1ec;
    list-style: none;
  }
</style>
