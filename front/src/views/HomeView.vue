<template>
  <body>
    <header>
      <Transition name="slide-down" appear>
        <nav class="navigation">
          <ul class="nav justify-content-center">
            <li class="nav-item ">
              <router-link to="/" class="nav-link links">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/collections" class="links nav-link">Collections</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/equipment" class="links nav-link">Equipment</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/latest" class="links nav-link">Latest News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="links nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user" class="links nav-link">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user" class="links nav-link">Basket</router-link>
            </li>
          </ul>
        </nav>
      </Transition>
    </header>
    <section class="parallax">
      <img src="../assets/court.jpeg" alt="court de tennis" id="court">
      <img src="../assets/ball.png" alt="ball de tennis" id="ball">
      <img src="../assets/raquet.png" alt="raquette de tennis" id="raquette">
      <img src="../assets/bag.png" alt="sac de tennis" id="sac">
      <h2 id="title">Welcome to our store!</h2>
    </section>
    <Transition name="slide-down fade" appear>
      <section class="rest">
        <div class="limit">
        <div>
          <br><br><br>
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/equipement/raquets/raquette_noir.jpg" class="d-block w-50 mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block w-50 mx-auto">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="../assets/equipement/balls/lot_balles_premium.jpg" class="d-block w-50 mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block w-50 mx-auto">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/equipement/bags/bag_blanc.jpg" class="d-block w-50 mx-auto" alt="...">
                <div class="carousel-caption d-none d-md-block w-50 mx-auto">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          <br><br>
          <div class="accordion w-50 mx-auto" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <br><br><br>
        <h2 class="title">Best sellers: <i>SHOES</i></h2>
        <br>
          <ProductCard :data="bestSellers" />
          <!-- <div class="col">
            <div class="card">
              <img src="../assets/collections/shoes/chaussure_tennis_bleuvert.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/collections/shoes/chaussure_tennis_enfant.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="../assets/collections/shoes/chaussure_tennis_rouge.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div> -->
          <!-- </div> -->
        <!-- </div> -->
      </div>
      </section>
  </Transition>
  </body>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  data () {
    return {
      bestSellers: [
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour homme',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour femme',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour enfant',
          image: require('../assets/collections/shoes/chaussure_tennis_enfant.jpg')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour homme',
          image: require('../assets/collections/shoes/chaussure_tennis_rouge.png')
        }
      ]
    }
  },
  mounted () {
    this.addScrollEfect()
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    addScrollEfect () {
      this.ball = document.getElementById('ball')
      this.raquette = document.getElementById('raquette')
      this.court = document.getElementById('court')
      this.sac = document.getElementById('sac')
      this.title = document.getElementById('title')
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll () {
      const value = window.scrollY
      window.requestAnimationFrame(() => {
        this.ball.style.marginTop = value * -1.5 + 'px'
        this.raquette.style.marginLeft = value * -1.5 + 'px'
        this.sac.style.marginRight = value * -1.5 + 'px'
        this.title.style.marginTop = value * 1.5 + 'px'
      })
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: black;
  overflow-x: hidden;
}
header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  text-decoration: none;
}

.Home{
  font-size: 2em;
  color: #359381;
  text-decoration: none;
}

.navigation .links{
  text-decoration: none;
  color: #fff;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 0 10px;
  font-weight: 600;
  font-size: 1.5em;
  animation: fade-down 0.5s;
}

.navigation .links:hover{
  background: #359381;
  color: #fff;
}
.parallax{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform-style: preserve-3d;
  perspective: 10px;
}
.parallax::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  z-index: 2;
}
#title{
  position: absolute;
  font-size: 6em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

#title:hover{
  pointer-events: none;
}

.parallax img{
  position: absolute;
  pointer-events: none;
}
#ball{
  width: 30%;
  top: 6%;
  left: 90%;
  transform: translateZ(-7px);
}
#raquette{
  top: 25%;
  left: 5%;
  width: 40%;
  rotate:calc(-30deg);
}
#court{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(-10px) scale(2);
}
#sac{
  width: 35%;
  right: -10%;
  top: -40%;
  transform: translateZ(-8px) scale(2);
}
.rest{
  background: black;
}
.rest h2{
  font-size: 3rem;
}
.limit{
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  margin-right: 2%;
  position: relative;
  background-image: url(../assets/court.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  box-shadow: inset 0px 50px 200px 40px rgba(0,0,0,1); /* This line adds the inner shadow */
}

.d-block{
  max-height: 500px;
}

.row{
  margin-left: 5px;
  margin-right: 5px;
}

.carousel-caption{
  background-color: black;
}

.title{
  text-align: center;
}
</style>
