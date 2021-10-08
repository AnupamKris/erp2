import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Authentication from '../views/Authentication.vue'
import Materials from '../views/Materials.vue'
import Academics from '../views/Academics.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
  },
  {
    path: '/academics',
    name: 'Academics',
    component: Academics,
  },
  {
    path: '/materials',
    name: 'Materials',
    component: Materials
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
