export default {
  // 增加mutation
  addNum (state, goods) {
    goods.goods.goodsnums++
    state.cartgoods.push(goods)
  }
}
