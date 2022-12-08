import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/logIn.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/mainPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/register.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
