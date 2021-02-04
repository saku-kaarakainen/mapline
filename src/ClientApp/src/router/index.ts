import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // TODO: Should this be deleted? 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // TODO: Delete
  {
    path: '/counter',
    name: 'counter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  // TODO: Delete
  {
    path: '/fetch-data',
    name: 'fetch-data',
    component: () => import(/* webpackChunkName: "fetch-data" */ '../views/FetchData.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router