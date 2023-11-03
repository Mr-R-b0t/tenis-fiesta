import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EquipView from '../views/EquipView.vue'
import CollectionView from '../views/CollectionView.vue'
import LatestView from '../views/LatestView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserView from '../views/UserView.vue'
import clothesView from '../views/sousPages/clothesView.vue'
import headGear from '../views/sousPages/headGear.vue'
import shoesView from '../views/sousPages/shoesView.vue'
import sockUnders from '../views/sousPages/sockUnders.vue'

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
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/clothes',
    name: 'clothes',
    component: clothesView
  },
  {
    path: '/headGear',
    name: 'headGear',
    component: headGear
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: shoesView
  },
  {
    path: '/sockUnders',
    name: 'sockUnders',
    component: sockUnders
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
