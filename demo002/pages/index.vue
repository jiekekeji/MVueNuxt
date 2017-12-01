<template>
  <div class="container">
    <button @click="nav2About()">去关于</button>
    <button @click="nav2HomeIndex()">去主页</button>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    methods: {
      nav2HomeIndex(){
        this.$router.push({path: '/home/pdcart'});
      },
      nav2About(){
        this.$router.push({path: '/about'});
      }
    }
  }
</script>

<style scoped="">
  .container {
    height: 200px;
    width: 100%;

  }

</style>
