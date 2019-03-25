import Vue from 'vue'
import Vuex from 'vuex'
import news from './news'
import project from './project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {news, project}
})