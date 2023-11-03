<template>
  <div id="app">
    <template v-if="isHomeView">
      <Transition name="slide-fade" mode="out-in">
      <HomeView />
      </Transition>
      <FooterComponent/>
    </template>
    <template v-else>
      <NavBar />
      <Transition name="slide-fade" mode="out-in">
      <router-view />
      </Transition>
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
