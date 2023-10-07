<template>
  <Navigation/>
  <router-view/>
</template>
<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'MainView',
  components: {
    Navigation
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
  padding:0px;
  margin:0px;
}

</style>
