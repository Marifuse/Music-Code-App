import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio', '/principal']
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    alias: ['/autenticacion', '/usuario']
  },
  {
    path: '*', // Este tipo de path con asterisco se usa para generar un not found o error 404
    name: 'NotFound',
    component: () => import(/* webpackChunkName:"notfound" */ '../views/NotFound') //Jamas debe ir con espacios
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
