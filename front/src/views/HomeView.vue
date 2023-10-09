<template>
  <div class="home container-fluid">
    <div class="header d-flex align-items-center">
      <div class="main-title d-flex flex-column align-items-start">
        <h1 class="display-1">All about Tennis</h1>
        <p class="lead">Find your happiness here :D</p>
      </div>
    </div>
    <div class="sections">
      <div class="section w-100">Collections section</div>
      <div class="section w-100">Equipment section</div>
      <div class="section w-100">Latest news section</div>
    </div>
  </div>
</template>
<style scoped>
.home{
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/what_color_are_tennis_balls.jpg") no-repeat fixed;
  background-position: center;
  background-size: cover;

}
.header{
  height: 800px;
  background-color: transparent;
}
.main-title{
  padding: 2%;
}
.sections{
  height: 1000px;
  background-color:  rgba(0, 0, 0, 0.3);
  border: solid;
}
.sections .section{
  background: linear-gradient(180deg, #284B63 0%, #3C6E71 100%);
}
</style>
