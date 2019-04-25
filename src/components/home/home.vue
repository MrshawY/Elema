<template>
  <div>
    <Mheader></Mheader>
    <Mcontent :typegoods="typegoods" :typeList="typeList" :commentList="commentList"></Mcontent>
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
      commentList: []
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
