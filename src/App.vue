<template>
  <div class="row">
    <div class="col-md-8"></div>
    <div class="col-md-4">

    </div>
  </div>
  <firstPage />
</template>

<script>
import firstPage from './components/firstPage.vue'

export default {
  name: 'App',
  components: {
    firstPage
  },
}
</script>

<style>
#app{
  background-color: silver;
}



</style>
