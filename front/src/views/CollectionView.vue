<template>
    <div class="collection">
      <div class="header d-flex align-items-center">
         <h1>This is the collections page</h1>
      </div>
    </div>
  </template>

  <style scoped>
  .collection{
    position: relative;
    top:0px;
  }
  .header{
    height: 400px;
  }
  </style>
<script>
export default {
  // TODO : modoify this to add the collection parameter
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
