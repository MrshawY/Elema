import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getter from './getter'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getter,
  state,
  mutations
})
