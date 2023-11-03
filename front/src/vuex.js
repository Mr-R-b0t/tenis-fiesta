// Import the 'createStore' function from 'vuex'
import { createStore } from 'vuex'

// Create and export a Vuex store instance
export default createStore({
  // Define the initial state of the store
  state: {
    user: null // The user property is initially set to null
  },
  getters: {
    // Define a getter for accessing the 'user' property from the state
    user: (state) => {
      return state.user
    }
  },
  actions: {
    // Define an action for updating the 'user' property in the state
    user (context, user) {
      context.commit('user', user)
    }
  },
  mutations: {
    // Define a mutation for updating the 'user' property in the state
    user (state, user) {
      state.user = user
    }
  }
})
