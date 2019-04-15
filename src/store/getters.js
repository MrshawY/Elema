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
  },
  // 计算总数
  allgoodsnum (state) {
    var num = 0
    state.cartgoods.forEach((itme) => {
      num = num + itme.goods.goodsnums
    })
    return num
  },
  // 热销榜
  hotsell (state) {
    var num = 0
    state.cartgoods.forEach((itme) => {
      if (itme.goods.titel === '热销榜') {
        num = num + itme.goods.goodsnums
      }
    })
    return num
  },
  // 单人热销套餐
  hotsetmeal (state) {
    var num = 0
    state.cartgoods.forEach((itme) => {
      if (itme.goods.titel === '单人热销套餐') {
        num = num + itme.goods.goodsnums
      }
    })
    return num
  }
}
