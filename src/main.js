import Vue from 'vue'
import App from './App'
import router from './router'
import Slick from 'vue-slick'
import Header from './components/Header'
import Footer from './components/Footer'
import store from './store/index'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component(Slick)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
