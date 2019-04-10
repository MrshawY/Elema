<template>
  <div>
    <div class="contentone">
      <div class="tag-li">
        <ul>
          <li tag="div" class="tag-titles" v-for="(item, index) in typeList" :class="isactive == index ? 'tocolor' : ''" @click="tocolor(index)" :key="item.id">
            <span>
              {{item.title}}
            </span>
          </li>
        </ul>
      </div>
      <div class="li-content">
        <div class="wrapper" ref="container">
          <div>
            <div class="content-box" v-for="(item, index) in typegoods" :key="item.id" :ref="index">
              <div class="content-title">
                <div>{{item.titel}}</div>
              </div>
              <div class="content-txt" v-for="(good) in item.goodslist" :key="good.id">
                <img src="../../../../resource/img/xlx.jpg">
                <div class="title-txt">
                  <p>{{good.goodsname}}</p>
                  <p>{{good.abb}}</p>
                  <p>月售{{good.sellnum}}份,好频率100%</p>
                  <span class="money">￥</span><span class="price">{{good.price}}</span><span class="oldprice">{{good.oldprice}}</span>
                </div>
                <div class="computer">
                  <cartcontrol :good="good" :goodnums="good.goodnums"></cartcontrol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contentone-bottom">
        <shopcart></shopcart>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contentone {
  display: flex;
  /* flex-flow:row; */
  align-items: flex-start;
}
.tag-titles {
  display: block;
  width: 1.5rem;
  height: 1rem;
  background-color: #f1f1f1;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #e5e2e8;
}
/* 点击背景颜色切换 */
.tocolor {
  background-color: white;
}
.tag-titles span {
  display: block;
  width: 1.5rem;
  height: 1rem;
  font-size: 0.2rem;
  line-height: 1rem;
}
.tag-titles:last-of-type {
  border-bottom: 0px;
}
.tag-li {
  width: 1.5rem;
  height: 8rem;
  overflow-y: auto;
  flex: 0 0 auto;
}
.tag-li::-webkit-scrollbar {
  display: none;
}
.li-content {
  background-color: white;
  height: 8rem;
  overflow-y: auto;
  flex: 1 1 auto;
  position: relative;
}
.li-content::-webkit-scrollbar {
  display: none;
}
/* 右边的内容 */
.content-title {
  border-left: 4px solid #c1b1b1;
  height: 0.5rem;
  background-color: #dcd5d5;
}
.content-title div {
  height: 8rem;
  line-height: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.3rem;
}
.content-txt {
  width: 100%;
  height: 2.3rem;
  background-color: white;
  position: relative;
}
.content-txt:before {
  content: '';
  position: absolute;
  left: 0.25rem;
  bottom: 0;
  right: 0;
  width: 5.6rem;
  height: 1px;
  background-color: #dcdcdc;
}
.content-txt img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.title-txt {
  font-size: 0.25rem;
  position: absolute;
  top: 0.3rem;
  left: 1.7rem;
  color: #c1b1b1;
  line-height: 0.4rem;
}
.title-txt p:first-of-type {
  font-size: 0.35rem;
  color: black;
}
.title-txt .money {
  font-size: 0.25rem;
  color: red;
}
.title-txt .price {
  font-size: 0.35rem;
  color: red;
}
.title-txt .oldprice {
  margin-left: 0.25rem;
  text-decoration: line-through;
}
.computer {
  width: 1.8rem;
  height: 0.5rem;
  position: absolute;
  right: 0.2rem;
}
.active {
  visibility: visible;
}
.wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
/*底部购物车页面*/
.contentone-bottom {
  width: 100%;
  height: 1.3rem;
  position: fixed;
  bottom: 0;
}
</style>
<script>
import BScroll from 'better-scroll'
import cartcontrol from './cartcontrol'
import shopcart from './shopcart'
export default {
  props: ['typegoods', 'typeList'],
  data () {
    return {
      istocolor: true,
      isactive: 0,
      scroll: ''
    }
  },
  components: {
    cartcontrol,
    shopcart
  },
  methods: {
    tocolor (index) {
      this.isactive = index
      this.scroll.scrollToElement(this.$refs[index][0])
    }
  },
  mounted () {
    let container = this.$refs['container']
    this.scroll = new BScroll(container, { click: true })// 让使用div包裹的地方能够点击
  }
}
</script>
