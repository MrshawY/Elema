export default {
  addNum ({commit}, goods) {
    commit('addNum', goods)
  },
  jianNum ({commit}, goods) {
    commit('jianNum', goods)
  },
  clearall ({
    commit
  }) {
    commit('clearall')
  }
}
