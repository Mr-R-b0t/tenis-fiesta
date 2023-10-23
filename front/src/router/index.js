import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EquipView from '../views/EquipView.vue'
import CollectionView from '../views/CollectionView.vue'
import LatestView from '../views/LatestView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/collections',
    name: 'collections',
    component: CollectionView
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: EquipView
  },
  {
    path: '/latest',
    name: 'latest',
    component: LatestView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
