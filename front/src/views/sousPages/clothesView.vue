<template>
    <div class="collection">
        <div class="header d-flex align-items-center">
          </div>
          <div class="sections">
            <SectionComponent :header="'T-shirts'" :items="tshirts" />
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
      tshirts: [
        {
          title: 'Black tshirt',
          description: 'Men tshirt',
          image: require('../../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-blanc.png')
        },
        {
          title: 'Pink tshirt',
          description: 'Women tshirt',
          image: require('../../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-corailbleu.png')
        },
        {
          title: 'White tshirt',
          description: 'Men tshirt',
          image: require('../../assets/collections/tshirt/tshirt_tennis_blanc.jpg')
        },
        {
          title: 'Black tshirt',
          description: 'Women tshirt',
          image: require('../../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-blanc.png')
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
