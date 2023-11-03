<template>
   <div class="equip">
      <div class="header d-flex align-items-center">
         <h1>This is the equipment page </h1>
      </div>
    </div>
  </template>

  <style scoped>
  .equip{
    position: relative;
    top:0px;
  }
  .header{
    height: 400px;
  }
  </style>
<script>
export default {
  props: ['inventory', 'addToCart'],
  computed: {
    // Compute and return the 'product' object based on the route parameter 'id'
    product () {
      const product = this.inventory.find(product => {
        return product.id === this.$route.params.id
      })
      return product
    }
  },
  // Define another computed property to find the index of a product based on its 'name'
  productIndex () {
    const index = this.inventory.find(product => {
      return product.name === this.$route.params.id
    })
    return index
  }
}

</script>
