<template>
    <div class="user">
      <div class="header d-flex align-items-center">
         <h1>This is the user/account page</h1>
      </div>
    </div>
  </template>

  <style scoped>
  .user{
    position: relative;
    top:0px;
  }
  .header{
    height: 400px;
  }
  </style>
<script>
import UserDataService from '@/services/UserDataService'

export default {
  data () {
    return {
      message: null,
      userResgister: {
        email: '',
        password: '',
        fullname: ''
      },
      userLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      UserDataService.create(this.userResgister)
        .then(response => {
          // console.log(response.data)
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          // Handle the error here
          // console.log(error.response.data.message)
          this.message = error.response.data.message
        }
        )
    },
    login () {
      UserDataService.postLogin(this.user)
        .then(response => {
          console.log(response.data)
          // localStorage.setItem('token', response.data.token)
          this.$store.dispatch('user', response.data.user)
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          // Handle the error here
          this.message = error.response.data.message
          // console.log(error.response.data.body.message)
        })
    }
  }
}

</script>
