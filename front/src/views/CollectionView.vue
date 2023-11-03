<template>
<div class="collection">
    <div class="header d-flex align-items-center">
         <h1>This is the collections page</h1>
      </div>
      <div class="sections">
        <SectionComponent :header="'Section Header'" :items="shoes" />
        <SectionComponent :header="'Section Header'" :items="tshirts" />
    </div>
</div>
</template>

<script>
import SectionComponent from '../components/SectionComponent.vue'

export default {
  components: {
    SectionComponent
  },
  data () {
    return {
      shoes: [
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour homme',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour femme',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour enfant',
          image: require('../assets/collections/shoes/chaussure_tennis_enfant.jpg')
        },
        {
          title: 'Chaussure de tennis',
          description: 'Chaussure de tennis pour homme',
          image: require('../assets/collections/shoes/chaussure_tennis_rouge.png')
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
  }
  .header{
    height: 50vh;
  }
  </style>
