<template>
  <div>
    <div class="bigcart">
      <div class="cart" @click="showgoods()">
        <div class="shppingborder" :class="{heartBeat:addclass > 0}">
          <div class="shppingicon">
          </div>
          <span class="allgoodsnum" v-show="allgoodsnum > 0">{{allgoodsnum}}</span>
        </div>
        <div class="bottom-money" :class="{addwidth:allmoney > 0}">
          ￥{{allmoney}}
        </div>
        <div class="bottom-text" v-if="allmoney <= 0">
          另需配送费￥4元
        </div>
        <div class="bottom-begin" v-if="allmoney <= 0">
          ￥20元起送
        </div>
        <div class="goaccount" v-if="allmoney > 0" @click.stop="ok">
          去结算
        </div>
      </div>
    </div>
    <transition>
      <div class="goodlist" v-show="isshow && isshows">
        <div class="goodlist-title">
          <div class="goodschicked">
            已选商品
          </div>
          <div class="goodspirce">
            单价
          </div>
          <div class="goodsclear" @click="clearall">
            清空
          </div>
        </div>
        <div class="bigul">
          <div class="glist" v-for="(n,i) in cartgoods" :key="i">
            <div class="gname">{{n.goods.goodsname}}</div>
            <div class="gprice">￥{{n.goods.price}}</div>
            <cartcontrol :good="n.goods" :goodnums="n.goods.goodsnums"></cartcontrol>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import cartcontrol from './cartcontrol'
export default {
  data () {
    return {
      finaMoney: '0',
      isshows: true
    }
  },
  computed: {
    ...mapState(['cartgoods', 'isshow', 'addclass']),
    ...mapGetters(['isshow', 'allmoney', 'allgoodsnum'])
  },
  methods: {
    ...mapActions(['clearall', 'addNum']),
    showgoods () {
      if (this.cartgoods.length < 0) {
        alert('您的购物车没有商品')
      } else {
        this.cartgoods.forEach((itme, index) => {
          console.log(index)
          console.log(itme)
        })
        // console.log(this.cartgoods)
        this.isshows = !this.isshows
      }
    },
    ok () {
      alert('结算成功')
    }
  },
  components: {
    cartcontrol
  }
}
</script>

<style scoped>
/* 动画 */
@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

.heartBeat {
  animation-name: heartBeat;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
/*  */
.gobj {
  font-size: 0.1rem;
}
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
  position: relative;
}
.allgoodsnum {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background-color: rgb(238, 36, 36);
  position: absolute;
  right: 0.2rem;
  top: 0.1rem;
  font-size: 0.2rem;
  line-height: .35rem;
  text-align: center;
  color: white;
}
.shppingicon {
  width: 1rem;
  height: 1rem;
  background-color: rgba(161, 148, 148, 0.5);
  border-radius: 50%;
  margin: 0.1rem;
  color: white;
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
  bottom: 1.3rem;
  z-index: 10;
}
.goodlist-title {
  display: flex;
  font-size: 0.3rem;
  padding: 0.2rem;
  border-bottom: 1px solid #666;
}
.goodschicked {
  width: 4rem;
}
.goodsclear {
  text-align: right;
  flex: 1 1 auto;
}
.bigul {
  max-height: 3rem;
  overflow: auto;
}
.glist {
  display: flex;
  padding: 0.05rem;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #666;
}
.gname {
  width: 4rem;
  font-size: 0.25rem;
}
.gprice {
  flex: 1 1 auto;
  font-size: 0.25rem;
}
.gdo {
  flex: 1 1 auto;
}
</style>
