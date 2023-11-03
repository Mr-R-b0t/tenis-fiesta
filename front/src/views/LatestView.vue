<template>
    <div class="latest">
      <div class="header d-flex align-items-center">
         <h1>This is the latest page</h1>
      </div>
    </div>
  </template>

  <style scoped>
  .latest{
    position: relative;
    top:0px;
  }
  .header{
    height: 400px;
  }
  </style>
<script>
// TODO : modify this to add the lastest parameter
export default {
  props: ['inventory', 'addToCart'],
  computed: {
    product () {
      const product = this.inventory.find(product => {
        return product.id === this.$route.params.id
      })
      return product
    }
  },
  productIndex () {
    const index = this.inventory.find(product => {
      return product.name === this.$route.params.id
    })
    return index
  }
}
</script>
