<template>
  <section class="container">
    <p class="title">测试scss的使用</p>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style scoped="" lang="scss">
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .title {
      font-size: 18px;
      color: red;
      height: pxToRem(68, 1080);
      width: pxToRem(360, 1080);
      background-color: #f7f8fb;
    }
  }
</style>
