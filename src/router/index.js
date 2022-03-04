import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import("../views/InitialPage")
  },

  {
    path: '/form',
    name: 'formulario',
    component: () => import("../views/FormPage")
  },

  {
    path: '/result',
    name: 'resultado',
    component: () => import("../views/ResultPage")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
