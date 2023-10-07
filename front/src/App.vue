<template>
  <Navigation/>
  <router-view/>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'MainView',
  data () {},
  components: {
    NavBar,
  }
}
</script>
<style lang="scss">
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
