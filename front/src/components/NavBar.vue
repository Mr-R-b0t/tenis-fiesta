<template>
    <nav class="nav-container">
        <div class="nav-mainlinks">
            <router-link to="/">Home</router-link>
            <router-link to="/about">Collections</router-link>
            <router-link to="/about">Stuff</router-link>
            <router-link to="/about">About Us</router-link>
        </div>
        <div class="nav-toolslinks">
            <router-link to="/">Research</router-link>
            <router-link to="/about">Your Account</router-link>
            <router-link to="/about">WishList</router-link>
            <router-link to="/about">Basket</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style>

nav {
  padding: 30px;
  margin : -5px;
}
.nav-container{
    display: flex;
    position: fixed;
    width: 100%;
    background-color: #d9d9d9;
}
</style>
