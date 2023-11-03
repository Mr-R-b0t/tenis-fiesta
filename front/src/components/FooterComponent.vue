<template>
    <footer class="container-fluid background text-white p-4">
        <div class="d-flex padpad">
            <div class="w-25">
                <router-link to="/" class="font-weight-bold footer-title bold text-decoration-none text-white">Home</router-link>
                <br> <br> <p class="bold">About us</p>
                <p>Our Team</p>
                <p>Our Brand</p>
                <br><p class="bold">Follow us</p>
                <div class="fluid">
                    <img src="../assets/fb-logo.png" alt="Facebook" class="image">
                    <img src="../assets/instagram.png" alt="Instagram" class="image">
                    <img src="../assets/logo_x.png" alt="X" class="image">
                </div>
            </div>

            <div class="w-25">
                <p class="bold">Collections</p>
                <p>Clothes</p>
                <p>Socks & Unders</p>
                <p>Shoes</p>
                <p>Headgear</p>
            </div>

            <div class="w-25">
                <p class="bold">Matériel</p>
                <p>Raquettes</p>
                <p>Amortisseurs</p>
                <p>Bags</p>
                <p>Tennis balls</p>
            </div>

            <div class="w-25">
                <p class="bold">Tennis latest news</p>
                <p>Tournaments</p>

                <br><p class="bold">Your account</p>
                <p>Your details</p>
                <p>Your WishList</p>
                <p>Orders</p>
            </div>
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
.padpad{
    padding:2% 0%;
}

.image{
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.background{
  background-color: #353535;
}

/*footer{
    position: absolute;
    bottom: 0px;
}*/
</style>
