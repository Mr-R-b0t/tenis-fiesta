<template>
  <div class="latest-news">
    <h1>Latest News</h1>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-4" v-for="card in newsData" :key="card.title">
        <div class="card">
          <img :src="card.urlToImage" :alt="card.title" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchNews } from '../api'

export default {
  data () {
    return {
      newsData: []
    }
  },
  created () {
    fetchNews().then(response => {
      this.newsData = response.data.articles
    })
  }
}
</script>

<style scoped>
.latest-news {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
