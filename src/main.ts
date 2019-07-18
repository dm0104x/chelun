import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false
Vue.prototype.$store = store


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
