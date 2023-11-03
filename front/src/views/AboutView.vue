<template>
  <div class="about">
    <div class="big-c mb-2 mx-2 bg-white">
      <h1 class="text-center">Our brand</h1>
      <div class="mid-c w-100 d-flex flex-wrap">
        <div class="w-50">
          <p>Our brand is the best on the market :</p>
          <ul>
            <li>Best quality</li>
            <li>Best price</li>
            <li>Best design</li>
          </ul>
          <p>All our product are made in Europe, so you know that you'll get great quality ! <br>
            We care about the environment, so we use only recyclable material ! <br>
            We are also the official sponsor of the Roland Garros tournament ! <br>
            We dedicate ourself to give you the best experience possible !
          </p>
        </div>
      </div>
    </div>

    <div class="big-c mt-2 mx-2 bg-white">
      <h1 class="text-center">Our team</h1>
      <div class="mid-c w-100 d-flex flex-wrap justify-content-between">
        <div>
          <p>Our team is composed of best programer on the market :</p>
          <ul>
            <li>MOREL Rebecca</li>
            <li>PESTANA Sebastian</li>
            <li>N'MILY Adam</li>
            <li>MEYNET Sébastian</li>
          </ul>
          <p>Join us on social medias to have access to the next news !</p>
          <div class="fluid">
            <img src="../assets/fb-logo.png" alt="Facebook" class="image">
            <img src="../assets/instagram.png" alt="Instagram" class="image">
            <img src="../assets/logo_x.png" alt="X" class="image">
          </div>
        </div>
        <div class="w-25">
            <iframe src="https://giphy.com/embed/m1TY53YqzzTY0Efq63" width="210" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about{
  position: relative;
  top:0px;
  background-color:rgba(53, 147, 129,0.5) ;
  padding: 2% 0%;
}
  .image{
  height: 70px;
  width: 70px;
  margin: 10px;
}

.big-c{
  padding: 2%;
  height: inherit;
  border: solid 1px black;
}
.mid-c{
  padding: 2% 3%;
}

</style>
