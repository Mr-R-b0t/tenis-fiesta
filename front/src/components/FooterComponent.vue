<template>
    <footer class="fixed-bottom  bg-dark text-white p-4">
        <div class="d-flex">
            <div class="w-25">
                <router-link to="/" class="font-weight-bold footer-title bold text-decoration-none text-white">Home</router-link>
                <br> <br> <p class="bold">About us</p>
                <p>Our Team</p>
                <p>Our Brand</p>
                <br><p class="bold">Follow us</p>
                <p>Facebook</p>
                <p>Instagram</p>
            </div>

            <div class="w-25">
                <p class="bold">Collections</p>
                <p>Clothes</p>
                <p>Socks & Unders</p>
                <p>Shoes</p>
                <p>Headgear</p></div>

            <div class="w-25">
                <p class="bold">Matériel</p>
                <p>Raquettes</p>
                <p>Amortisseurs</p>
                <p>Bags</p>
                <p>Tennis balls</p></div>

            <div class="w-25">
                <p class="bold">Tennis latest news</p>
                <p>Tournaments</p>

                <br><p class="bold">Your account</p>
                <p>Your details</p>
                <p>Your WishList</p>
                <p>Orders</p></div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-title {
    font-size: 30px;
}
.bold{
    font-weight: bold;
}
</style>
