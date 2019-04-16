export default {
  // 显示购物车
  isshow (state) {
    if (state.cartgoods.length > 0) {
      var num = 0
      state.cartgoods.forEach((itme) => {
        num = num + itme.goods.goodsnums
      })
      if (num > 0) {
        return true
      } else {
        return false
      }
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
  // hotsell (state) {
  //   var num = 0
  //   state.cartgoods.forEach((itme) => {
  //     if (itme.goods.titel === '热销榜') {
  //       num = num + itme.goods.goodsnums
  //     }
  //   })
  //   return num
  // },
  // 单人热销套餐
  // hotsetmeal (state) {
  //   var num = 0
  //   state.cartgoods.forEach((itme) => {
  //     if (itme.goods.titel === '单人热销套餐') {
  //       num = num + itme.goods.goodsnums
  //     }
  //   })
  //   return num
  // },
  // 分类销售数组
  gorupsells (state) {
    var num = 0
    var nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    state.cartgoods.forEach((itme, index) => {
      if (itme.goods.titel === '热销榜') {
        num = itme.goods.goodsnums
        nums[0] = nums[0] + num
        state.gorupsell[0] = nums[0]
      } else if (itme.goods.titel === '单人热销套餐') {
        num = itme.goods.goodsnums
        nums[1] = nums[1] + num
        state.gorupsell[1] = nums[1]
      } else if (itme.goods.titel === '特色粥品') {
        num = itme.goods.goodsnums
        nums[2] = nums[2] + num
        state.gorupsell[2] = nums[2]
      }
    })
    return state.gorupsell
  }
}
