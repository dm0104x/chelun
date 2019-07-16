import Vue from 'vue'
import Router from 'vue-router'
import SelectImage from '../views/SelectImage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SelectImage',
      component: SelectImage
    }
  ]
})
