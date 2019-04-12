export default {
  // 增加mutation
  addNum (state, goods) {
    var isadd = true
    state.cartgoods.forEach((itme) => {
      if (itme.goods.goodsname === goods.goods.goodsname) {
        itme.goods.goodsnums++
        isadd = false
      }
    })
    if (isadd) {
      goods.goods.goodsnums++
      state.cartgoods.push(goods)
    }
    state.addclass++
    setTimeout(() => {
      state.addclass = 0
    }, 100)
  },
  // 减少mutation
  jianNum (state, goods) {
    state.cartgoods.forEach((itme, index) => {
      if (itme.goods.goodsname === goods.goods.goodsname) {
        itme.goods.goodsnums--
        if (itme.goods.goodsnums <= 0) {
          console.log(index)
          state.cartgoods.splice(index, 1)
        }
      }
    })
    state.addclass++
    setTimeout(() => {
      state.addclass = 0
    }, 100)
  },
  clearall (state) {
    state.cartgoods.forEach((itme) => {
      itme.goods.goodsnums = 0
    })
    state.cartgoods.splice(0, state.cartgoods.length)
  }
}
