<template>
  <div class="container">

  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    methods: {
      async asyncData ({params}) {
        let {data} = await axios.get(`https://my-api/posts/${params.id}`)
        return {title: data.title}
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
