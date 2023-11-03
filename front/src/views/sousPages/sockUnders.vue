<template>
    <div class="collection">
        <div class="header d-flex align-items-center">
          </div>
          <div class="sections">
            <SectionComponent :header="'Socks'" :items="socks" />
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
      socks: [
        {
          title: 'White socks',
          description: 'Men socks',
          image: require('../../assets/collections/socks&unders/bk_socks.jpg')
        },
        {
          title: 'White and black socks',
          description: 'Women socks',
          image: require('../../assets/collections/socks&unders/under-armour-performance.jpg')
        },
        {
          title: 'White socks',
          description: 'Kids socks',
          image: require('../../assets/collections/socks&unders/bk_socks.jpg')
        },
        {
          title: 'White and black socks',
          description: 'Men socks',
          image: require('../../assets/collections/socks&unders/under-armour-performance.jpg')
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
