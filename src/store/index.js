import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getter from './getter'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  action,
  getter,
  state,
  mutations
})
