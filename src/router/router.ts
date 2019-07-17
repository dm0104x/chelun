import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Personal from '../views/Personal.vue'
import Type from '../views/Type.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    }
  ]
})
