export default {
  isshow (state) {
    if (state.cartgoods.length > 0) {
      return true
    } else {
      return false
    }
  }
}
