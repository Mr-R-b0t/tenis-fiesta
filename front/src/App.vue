<template>
  <NavBar/>
  <router-view/>
  <FooterComponent/>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'MainView',
  data () {},
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #353535;
}
</style>
