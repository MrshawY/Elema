<template>
  <div>
    <Mheader></Mheader>
    <Mcontent :typegoods="typegoods" :typeList="typeList" :commentList="commentList" :msglist="msglist" :abbList="abbList" :shopimgList="shopimgList" :shopmsglist="shopmsglist"></Mcontent>
    <div class="contentone-bottom">
      <shopcart></shopcart>
    </div>
  </div>
</template>
<script>
import Mheader from '../header/header'
import Mcontent from '../content/content'
import shopcart from '../shoppingcart/shopcart'
export default {
  data () {
    return {
      typegoods: [],
      typeList: [],
      commentList: [],
      msglist: [],
      abbList: [],
      shopimgList: [],
      shopmsglist: []
    }
  },
  components: {
    Mheader,
    Mcontent,
    shopcart
  },
  methods: {
    getdata () {
      this.$http.get('../../../static/mork/data.json').then((res) => {
        this.typegoods = res.data.data[0].typegoods
        this.typeList = res.data.data[0].typeList
        this.commentList = res.data.data[0].commentList
        this.msglist = res.data.data[0].msglist
        this.abbList = res.data.data[0].abbList
        this.shopimgList = res.data.data[0].shopimgList
        this.shopmsglist = res.data.data[0].shopmsglist
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style scoped>
/*底部购物车页面*/
.contentone-bottom {
  width: 100%;
  height: 1.3rem;
  position: fixed;
  bottom: 0;
}
</style>
