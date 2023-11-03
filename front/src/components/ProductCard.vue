<template>
    <div class="Product ">
      <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        <div class="col" v-for="card in data" :key="card.title">
          <div class="card">
            <img :src="card.image" class="card-img-top" :alt="card.title">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
          <br><br>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
