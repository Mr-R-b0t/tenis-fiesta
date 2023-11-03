<template>
<div class="collection">
    <div class="header d-flex align-items-center">
         <h1> Our Equipments</h1>
      </div>
      <div class="sections">
        <SectionComponent :header="'Raquets'" :items="raquets" />
        <SectionComponent :header="'Shock Absorber'" :items="shock" />
        <SectionComponent :header="'Balls'" :items="balls" />
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
      raquets: [
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/raquets/raquette_jaune.png')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/raquets/raquette_noir.jpg')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/raquets/raquettes_rose.png')
        }
      ],
      shock: [
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/shock_absorber/lot_shock_absorber_emoji.jpg')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/shock_absorber/lot_shock_absorber48.jpg')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/shock_absorber/lot_shock_absorber70.jpg')
        }
      ],
      balls: [
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/balls/lot_balles_premium.jpg')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/balls/lot_balles_team.jpg')
        },
        {
          title: 'Raquette Jaune',
          description: 'Rquette jaune de tout les poids, pour Homme, Femme Enfant',
          image: require('../assets/equipement/balls/lot_balles_technifibre.jpg')
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
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
  }
  </style>
