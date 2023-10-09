<template>
  <div class="home container-fluid">
    <div class="header d-flex align-items-end">
      <div class="main-title d-flex flex-column align-items-start">
        <h1 class="display-1">All about Tennis</h1>
        <p class="lead">Find your happiness here :D</p>
      </div>
    </div>
    <div class="sections container-fluid">
      <div class="section">first section</div>
      <div class="section">second section</div>
      <div class="section">third section</div>
    </div>
  </div>
</template>
<style scoped>
.home{
  border: solid pink;
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
  height: 900px;
  background-color: transparent;
}
.main-title{
  padding: 2%;
}
.sections{
  background-color:  rgba(0, 0, 0, 0.3);}
.sections .section{
  background-color: rgba(0, 0, 0, 0.3);
  border: solid;
}
</style>
