<template>
    <div class="collection">
        <div class="header d-flex align-items-center">
          </div>
          <div class="sections">
            <SectionComponent :header="'Headgear'" :items="headgear" />
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
      headgear: [
        {
          title: 'Blue headgear',
          description: 'Unisex headgear',
          image: require('../../assets/collections/headgear/bandeau_bleu.jpg')
        },
        {
          title: 'Grey headgear',
          description: 'Unisex headgear',
          image: require('../../assets/collections/headgear/bandeau_gris.jpg')
        },
        {
          title: 'Pink headgear',
          description: 'Kids headgear',
          image: require('../../assets/collections/headgear/bandeau_rose.jpg')
        },
        {
          title: 'Blue headgear',
          description: 'Men headgear',
          image: require('../../assets/collections/headgear/bandeau_bleu.jpg')
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
