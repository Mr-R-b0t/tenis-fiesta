<template>
    <div class="collection">
        <div class="header d-flex align-items-center">
          </div>
          <div class="sections">
            <SectionComponent :header="'Shoes'" :items="shoes" />
        </div>
    </div>
    </template>
<script>
import SectionComponent from '../../components/SectionComponent.vue'

export default {
  components: {
    SectionComponent
  },
  data () {
    return {
      shoes: [
        {
          title: 'Tennis shoes',
          description: 'Men tennis shoes',
          image: require('../../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Tennis shoes',
          description: 'Women tennis shoes',
          image: require('../../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Tennis shoes',
          description: 'Kids tennis shoes',
          image: require('../../assets/collections/shoes/chaussure_tennis_enfant.jpg')
        },
        {
          title: 'Tennis shoes',
          description: 'Men tennis shoes',
          image: require('../../assets/collections/shoes/chaussure_tennis_rouge.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
  .collection{
    position: relative;
    top:0px;
    margin-top: 40px;
}
</style>
