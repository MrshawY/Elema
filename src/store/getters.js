export default {
  // 显示购物车
  isshow (state) {
    if (state.cartgoods.length > 0) {
      return true
    } else {
      return false
    }
  },
  // 计算总价
  allmoney (state) {
    var money = 0
    state.cartgoods.forEach((itme) => {
      money = money + (itme.goods.price * itme.goods.goodsnums)
    })
    return money
  }
}
