<template>
  <div>
    <div class="bigcart">
      <div class="cart" @click="showgoods()">
        <div class="shppingborder">
          <div class="shppingicon">
          </div>
        </div>
        <div class="bottom-money" :class="{addwidth:finaMoney > 0}">
          ￥{{finaMoney}}
        </div>
        <div class="bottom-text" v-if="finaMoney <= 0">
          另需配送费￥4元
        </div>
        <div class="bottom-begin" v-if="finaMoney <= 0">
          ￥20元起送
        </div>
        <div class="goaccount" v-if="finaMoney > 0">
          去结算
        </div>
      </div>
    </div>
    <transition>
      <div v-show="goodshow" :class="{goodlist:goodshow}">
        <div class="goodlist">
          <div class="goodlist-title">
            <div class="goodschicked">
              已选商品
            </div>
            <div class="goodsclear">
              清空
            </div>
          </div>
          <ul class="bigul">
            <li class="glist" v-for="n in cartgoods" :key="n.id">
              <div class="gname">{{n.goods.goodsname}}</div>
              <div class="gprice">￥{{n.goods.price}}</div>
              <div class="gdo">
                <cartcontrol></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import cartcontrol from './cartcontrol'
export default {
  data () {
    return {
      finaMoney: '0',
      goodshow: false
    }
  },
  computed: {
    ...mapState(['cartgoods'])
  },
  methods: {
    showgoods () {
      this.goodshow = !this.goodshow
      console.log(this.goodshow)
    }
  },
  components: {
    cartcontrol
  }
}
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(1.3rem);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
.goaccount {
  font-size: 0.3rem;
  width: 2.1rem;
  height: 100%;
  line-height: 1.3rem;
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: rgb(25, 236, 71);
}
.bigcart {
  position: absolute;
  z-index: 50;
  background-color: #3c3434;
}
.cart {
  display: flex;
  height: 1.3rem;
}
.shppingborder {
  width: 1.2rem;
  height: 1.2rem;
  background-color: rgba(12, 2, 2, 1);
  border-radius: 50%;
  margin-left: 0.2rem;
  margin-top: -0.3rem;
  overflow: hidden;
}
.shppingicon {
  width: 1rem;
  height: 1rem;
  background-color: rgba(161, 148, 148, 0.5);
  border-radius: 50%;
  margin: 0.1rem;
}
.bottom-money {
  font-size: 0.5rem;
  width: 1.5rem;
  height: 100%;
  line-height: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
}
.addwidth {
  width: 4rem;
  text-align: left;
}
.bottom-text {
  font-size: 0.25rem;
  width: 2.5rem;
  height: 100%;
  line-height: 1.2rem;
  color: white;
  text-align: center;
}

.bottom-begin {
  font-size: 0.3rem;
  width: 2.1rem;
  height: 100%;
  line-height: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
}
.goodlist {
  width: 100%;
  background-color: aliceblue;
  position: absolute;
  bottom: 0.65rem;
  z-index: 10;
}
.goodlist-title {
  display: flex;
  font-size: 0.3rem;
  padding: 0.2rem;
  border-bottom: 1px solid #666;
}
.goodschicked {
  width: 6rem;
}
.goodsclear {
  flex: 1 1 auto;
  text-align: center;
}
.bigul{
  max-height: 3rem;
  overflow:auto
}
.glist {
  display: flex;
  font-size: 0.25rem;
  padding: 0.05rem;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #666;
}
.gname {
  width: 5rem;
}
.gprice {
  flex: 1 1 auto;
}
.gdo {
  flex: 1 1 auto;
}
</style>
