<template>
  <section class="container">
    <button type="button" class="btn btn-primary" @click="printDollor()">打印$</button>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    methods: {
      printDollor(){
        console.log($);
      }
    }
  }
</script>

<style scoped="">
  .container {
  }

</style>
