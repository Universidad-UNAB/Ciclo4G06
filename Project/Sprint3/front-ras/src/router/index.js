import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/security/RegistroPersona',
    name: 'person',
    component: () => import('../views/security/PersonView.vue')
  },
  {
    path: '/security/RegistroRol',
    name: 'role',
    component: () => import('../views/security/RoleView.vue')
  },
  {
    path: '/security/RegistroUsuario',
    name: 'roleView',
    component: () => import('../views/security/UserView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router