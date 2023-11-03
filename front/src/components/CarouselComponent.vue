<template>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.title"
          class="carousel-item"
          :class="{ active: index === 0 }"
          :data-bs-interval="slide.interval"
        >
          <img :src="slide.image" class="d-block w-50 mx-auto" :alt="slide.title">
          <div class="carousel-caption d-none d-md-block w-50 mx-auto">
            <h5>{{ slide.title }}</h5>
            <p>{{ slide.description }}</p>
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
  </template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.carousel{
  margin-top: 0px;
  margin-bottom: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.carousel-caption{
    background-color: black;
  }
</style>
