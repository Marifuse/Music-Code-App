import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home, // El component llama al componente importado
    meta: {
      requireLogin: true // El meta tiene relación con la función guardia (se representa con una respuesta booleana)
    }
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  if(!user && authRequired) {
    next('login') 
  } else {
    next()
  }
})

export default router
