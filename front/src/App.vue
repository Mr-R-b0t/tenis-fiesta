<template>
  <div id="app">
    <template v-if="isHomeView">
      <HomeView />
      <FooterComponent/>
    </template>
    <template v-else>
      <NavBar />
      <router-view />
      <FooterComponent/>
    </template>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomeView,
    FooterComponent
  },
  computed: {
    isHomeView () {
      return this.$route.path === '/'
    }
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
