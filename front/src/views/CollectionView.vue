<template>
  <div class="collection">
      <div class="header d-flex align-items-center">
           <h1>Our Collections</h1>
        </div>
        <div class="sections">
          <SectionComponent :header="'Tshirts'" :items="tshirts" />
          <SectionComponent :header="'Socks'" :items="socks" />
          <SectionComponent :header="'Shoes'" :items="shoes" />
          <SectionComponent :header="'Headgear'" :items="headgear" />
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
      tshirts: [
        {
          title: 'Black tshirt',
          description: 'Men tshirt',
          image: require('../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-blanc.png')
        },
        {
          title: 'Pink tshirt',
          description: 'Women tshirt',
          image: require('../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-corailbleu.png')
        },
        {
          title: 'White tshirt',
          description: 'Men tshirt',
          image: require('../assets/collections/tshirt/tshirt_tennis_blanc.jpg')
        },
        {
          title: 'Black tshirt',
          description: 'Women tshirt',
          image: require('../assets/collections/tshirt/t-shirt-homme-babolat-play-crew-neck-blanc.png')
        }
      ],
      socks: [
        {
          title: 'White socks',
          description: 'Men socks',
          image: require('../assets/collections/socks&unders/bk_socks.jpg')
        },
        {
          title: 'White and black socks',
          description: 'Women socks',
          image: require('../assets/collections/socks&unders/under-armour-performance.jpg')
        },
        {
          title: 'White socks',
          description: 'Kids socks',
          image: require('../assets/collections/socks&unders/bk_socks.jpg')
        },
        {
          title: 'White and black socks',
          description: 'Men socks',
          image: require('../assets/collections/socks&unders/under-armour-performance.jpg')
        }
      ],
      shoes: [
        {
          title: 'Tennis shoes',
          description: 'Men tennis shoes',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Tennis shoes',
          description: 'Women tennis shoes',
          image: require('../assets/collections/shoes/chaussure_tennis_bleuvert.png')
        },
        {
          title: 'Tennis shoes',
          description: 'Kids tennis shoes',
          image: require('../assets/collections/shoes/chaussure_tennis_enfant.jpg')
        },
        {
          title: 'Tennis shoes',
          description: 'Men tennis shoes',
          image: require('../assets/collections/shoes/chaussure_tennis_rouge.png')
        }
      ],
      headgear: [
        {
          title: 'Blue headgear',
          description: 'Unisex headgear',
          image: require('../assets/collections/headgear/bandeau_bleu.jpg')
        },
        {
          title: 'Grey headgear',
          description: 'Unisex headgear',
          image: require('../assets/collections/headgear/bandeau_gris.jpg')
        },
        {
          title: 'Pink headgear',
          description: 'Kids headgear',
          image: require('../assets/collections/headgear/bandeau_rose.jpg')
        },
        {
          title: 'Blue headgear',
          description: 'Men headgear',
          image: require('../assets/collections/headgear/bandeau_bleu.jpg')
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
