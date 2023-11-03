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
import UserDataService from '@/services/UserDataService'
import ProductDataService from '@/services/ProductDataService'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    HomeView,
    FooterComponent
  },
  data () {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (product, index) {
      if (!this.cart[product]) this.cart[product] = 0
      this.cart[product] += this.inventory[index].quantity
      console.log(this.cart[product])
    },
    removeItem (name) {
      delete this.cart[name]
    },
    addInventory (data) {
      this.inventory.push(data)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].tyoe = data.type
    },
    logout () {
      UserDataService.getLogout()
        .then(response => {
          localStorage.removeItem('token')
          this.$store.dispatch('user', null)
          this.$router.push('login')
        })
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    },
    ...mapGetters(['user'])
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  },
  created () {
    UserDataService.getAuth()
      .then(response => {
        this.name = response.data.fullname
        this.$store.dispatch('user', response.data)
      })
      .catch(e => {
        this.$store.dispatch('user', null)
      })
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
