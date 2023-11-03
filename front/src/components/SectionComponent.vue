<template>
    <section>
      <h2 class="text-center">{{ header }}</h2>
      <br>
      <div class="cards">
        <ProductCard :data="items" />
      </div>
      <hr>
      <br>
    </section>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'SectionComponent',
  components: {
    ProductCard
  },
  props: {
    header: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
