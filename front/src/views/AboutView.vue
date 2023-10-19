<template>
  <div class="about">
    <div class="header">
        <h1 class="text-center">Our brand</h1>
        <div class="w-75 d-flex flex-wrap">
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
          <div class="w-25 iframe-container">
            <iframe src="https://giphy.com/embed/m1TY53YqzzTY0Efq63" width="210" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div class="header">
        <h1 class="text-center">Our team</h1>
        <p class="">Our team is composed of best programer on the market :</p>
        <ul>
          <li>MOREL Rebecca</li>
          <li>PESTANA Sebastian</li>
          <li>N'MILY Adam</li>
          <li>MEYNET Sébastian</li>
        </ul>
        <p>Join us on social medias to have access to the next news !</p>
        <div class="fluid">
        <img src="../assets/instagram.png" alt="Instagram" class="image">
        <img src="../assets/logo_x.png" alt="Instagram" class="image">
        </div>
      </div>

    </div>
  </template>

<style scoped>
.about{
  position: relative;
  top:0px;
  padding-top: 140px;
}
.header{
  height: 400px;
  border: solid 2px black;
  padding:7px;
  margin-bottom: 10px;
}

  .image{
  height: 70px;
  width: 70px;
  margin: 10px;
}

.iframe-container {
  flex-basis: 100px;
  margin-left: 530px;
}
.border{
  border: solid 2px black;
}

</style>
