<template>
  <div>
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
    <transition>
      <div v-show="goodshow" :class="{goodlist:goodshow}">
        <div>
          <div>
            已选商品
          </div>
          <div>
            清空
          </div>
        </div>
        <ul>
          <li>
            <div></div>
            <div></div>
            <div>
              <cartcontrol></cartcontrol>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import cartcontrol from './cartcontrol'
export default {
  data () {
    return {
      finaMoney: '0',
      goodshow: false
    }
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
  transform: translateY(150px)
}
.v-enter-active,
.v-leave-active {
  transition: all 3s;
}
.goaccount {
  font-size: 0.3rem;
  width: 2.1rem;
  height: 100%;
  line-height: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  background-color: rgb(25, 236, 71);
}
.cart {
  display: flex;
  position: relative;
  z-index: 25;
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
  background-color: white;
  position: absolute;
  bottom: 1.2rem;
  z-index: 10;
}
</style>
