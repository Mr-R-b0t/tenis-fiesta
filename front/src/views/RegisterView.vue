<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div v-show="message" class="alert alert-danger">{{ message }}</div>
        <h4 class="mb-3">New User</h4>
        <div class="form-group">
          <label for="fullname">Nickname</label>
          <input type="text" class="form-control mb-3" id="fullname" placeholder="Enter nickname" v-model="user.nickname">
        </div>
        <div class="form-group">
          <label for="username">Email</label>
          <input type="text" class="form-control mb-3" id="email" placeholder="Enter email" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control mb-3" id="password" placeholder="Enter password"
            v-model="user.password">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control mb-3" id="password_validation" placeholder="Re-enter password"
            v-model="user.confirmpassword">
        </div>
        <div class="form-group">
          <label for="adress">Adress</label>
          <input type="text" class="form-control mb-3" id="adress" placeholder="Enter adress" v-model="user.adress">
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control mb-3" id="city" placeholder="Enter city" v-model="user.city">
        </div>
        <div class="form-group">
          <label for="postalCode">Postal Code</label>
          <input type="text" class="form-control mb-3" id="postalCode" placeholder="Enter postal code"
            v-model="user.postalCode">
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control mb-3" id="country" placeholder="Enter country" v-model="user.country">
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control mb-3" id="phone" placeholder="Enter phone" v-model="user.phone">
        </div>
        <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveUser">Save </button>
        <hr class="my-4">
      </div>
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
      user: {
        email: '',
        password: '',
        nickname: '',
        confirmpassword: '',
        adress: '',
        city: '',
        postalCode: '',
        country: '',
        phone: ''
      }
    }
  },
  methods: {
    saveUser () {
      if (this.user.password !== this.user.confirmpassword) {
        this.message = 'Passwords do not match'
        return
      }
      if (!this.validateEmail(this.user.email)) {
        this.message = 'Invalid email'
        return
      }
      UserDataService.create(this.user)
        .then(response => {
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    },
    validateEmail (email) {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    }

  }
}
</script>
