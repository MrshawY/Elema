<template>
  <div class="contenthree">
    <div class="shop-title">
      <div class="shop-name">
        粥品香坊 (大运坊)
      </div>
      <div class="shop-star">
        <star :starnum="starnum"></star>
        <div>(661) 月售690单</div>
      </div>
      <div class="shop-love" @click="changeimg">
        <img :src="imgURl" alt="">
        <div>{{iscollect}}</div>
      </div>
    </div>
    <div class="shop-msg">
      <div class="shop-msg-box" v-for=" itme in msglist" :key="itme.id">
        <div class="shop-msg-one">
          <p class="font">{{itme.text}}</p><span>{{itme.num}}</span><label>{{itme.unit}}</label>
        </div>
      </div>
    </div>
    <div class="line">
    </div>
    <div class="shop-abb">
      <div class="shop-abb-title">活动与公告</div>
      <div class="shop-abb-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了
        粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了，粥品香坊配方啥的我实在打不动了
      </div>
    </div>
    <div class="shop-somesabb">
      <div class="shop-someone" v-for="itme in abbList" :key="itme.id">
        <div class="shop-someone-img"><img :src="itme.imgUrl"></div> <span>{{itme.text}}</span>
      </div>
    </div>
    <div class="line">
    </div>
    <div>
      <div class="shop-abb-title">商家实景</div>
      <div class="shop-img">
        <ul>
          <li v-for="item in shopimgList" :key="item.id">
            <img :src="item.imgUrl">
          </li>
        </ul>
      </div>
    </div>
    <div class="line">
    </div>
    <div>
      <div class="shop-abb-title">商家信息</div>
      <div class="shop-somesabb">
        <div class="shop-someone" v-for="item in shopmsglist" :key="item.id">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import star from './star'
export default {
  props: ['msglist', 'abbList', 'shopimgList', 'shopmsglist'],
  data () {
    return {
      ischang: false,
      iscollect: '收藏',
      imgURl: require('../../../../static/img/collect1.png'),
      starnum: 3
    }
  },
  components: {
    star
  },
  methods: {
    changeimg () {
      if (this.ischang) {
        this.imgURl = require('../../../../static/img/collect1.png')
        this.iscollect = '收藏'
        this.ischang = !this.ischang
      } else {
        this.imgURl = require('../../../../static/img/collect2.png')
        this.iscollect = ' 已收藏 '
        this.ischang = !this.ischang
      }
    }
  }
}
</script>
<style scoped>
.contenthree {
  height: 8rem;
  overflow-y: auto;
}
.contenthree::-webkit-scrollbar {
  display: none;
}
.shop-title {
  width: 100%;
  height: 2rem;
  overflow: hidden;
  position: relative;
}
.shop-title::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 6.6rem;
  bottom: 1px;
  left: 0.5rem;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
}
.shop-name {
  font-size: 0.3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-weight: bold;
}
.shop-star {
  font-size: 0.3rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  display: flex;
}
.shop-star div {
  font-size: 0.2rem;
  line-height: 0.35rem;
  color: rgb(185, 160, 160);
}
.shop-love {
  position: absolute;
  top: 0.4rem;
  right: 0.2rem;
  width: 1rem;
  height: 1rem;
  font-size: 0.25rem;
  text-align: center;
}
.shop-love img {
  width: 0.6rem;
  height: 0.6rem;
}
.shop-msg {
  width: 100%;
  height: 2rem;
  overflow: hidden;
  border-bottom: 1px solid rgb(197, 184, 184);
  display: flex;
}
.shop-msg-box {
  flex: 1 1 auto;
  position: relative;
}
.shop-msg-box::after {
  content: '';
  position: absolute;
  height: 1.5rem;
  width: 1px;
  top: 0.25rem;
  left: 2.5rem;
  border-right: 1px solid rgb(214, 185, 185, 1);
}
.shop-msg-one {
  width: 1.7rem;
  height: 1rem;
  font-size: 0.3rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  text-align: center;
}
.shop-msg-one span {
  font-size: 0.6rem;
}
.shop-msg-one .font {
  color: rgb(197, 184, 184);
  font-size: 0.25rem;
}
.line {
  height: 0.4rem;
  width: 100%;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
  background-color: rgb(219, 200, 200);
}
.shop-abb-title {
  font-size: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.shop-abb-text {
  width: 6.5rem;
  margin-left: 0.5rem;
  color: rgb(238, 92, 92);
  font-size: 0.3rem;
  line-height: 0.5rem;
  margin-bottom: 0.4rem;
}
.shop-someone {
  margin-left: 0.5rem;
  font-size: 0.3rem;
  min-height: 1.3rem;
  position: relative;
  display: flex;
  width: 6.5rem;
}
.shop-someone span {
  margin-top: 0.55rem;
}
.shop-someone-img {
  margin-top: 0.4rem;
}
.shop-someone::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 6.6rem;
  top: 1px;
  left: 0;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
}
.shop-img {
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
}
.shop-img ul {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}
.shop-img ul::-webkit-scrollbar {
  display: none;
}
.shop-img img {
  width: 3rem;
  height: 3rem;
  margin-right: 0.2rem;
}
</style>
