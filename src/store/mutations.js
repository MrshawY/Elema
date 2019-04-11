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
    console.log(state.cartgoods)
  },
  // 减少mutation
  jianNum (state, goods) {
    console.log(goods)
    console.log(state.cartgoods)
    state.cartgoods.forEach((itme, index) => {
      if (itme.goods.goodsname === goods.goods.goodsname) {
        itme.goods.goodsnums--
        if (itme.goods.goodsnums <= 0) {
          console.log(index)
          state.cartgoods.splice(index, 1)
        }
      }
    })
    console.log(state.cartgoods)
  },
  clearall (state) {
    state.cartgoods.splice(0, state.cartgoods.length)
  }
}
