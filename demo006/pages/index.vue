<template>
  <section class="container">
    <h2>展示asyncData和data的数据:</h2>
    {{title}}
  </section>
</template>

<script>
  export default {
    async asyncData (context) {
      //1、获取数据

      //2、将数据返回,这里的数据会和data(){return {}}合并
      return {title: "获取数据后返回"}
    },
    fetch ({store}) {
      store.commit('increment')
    },
    data() {
      return {}
    },
    components: {},

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

</style>
