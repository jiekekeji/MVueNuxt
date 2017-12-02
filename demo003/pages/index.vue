<template>
  <div class="container">
    <button @click="asyncData()">获取数据{{title}}</button>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import axios from 'axios'
  export default {
    components: {
      Logo
    },
    async asyncData () {
      let { data } = await axios.get(`http://localhost:8066/ydg/user/login`)
      console.log("asyncData")
      return { title: data }
    },
    methods: {

    }
  }
</script>

<style scoped="">
  .container {
    height: 200px;
    width: 100%;

  }

</style>
