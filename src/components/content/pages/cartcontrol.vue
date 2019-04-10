<template>
  <div>
    <div class="addNum" @click="addNum">+</div>
    <div class="num">{{nums}}</div>
    <transition>
      <div class="jianNum" @click="jianNum" v-show="nums > 0">-</div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['good', 'goodnums'],
  data () {
    return {
      goods: this.good,
      nums: this.goodsnums
    }
  },
  methods: {
    addNum () {
      this.$store.dispatch('addNum', { goods: this.goods })
    },
    jianNum () {

    }
  }
}
</script>
<style scoped>
/* 过度动画 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.addNum {
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #1371ce;
  color: white;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.45rem;
  float: right;
}
.jianNum {
  border-radius: 50%;
  width: 0.42rem;
  height: 0.42rem;
  line-height: 0.3rem;
  background-color: white;
  border: 2px solid #1371ce;
  color: #1371ce;
  text-align: center;
  float: right;
  z-index: 99;
}
.num {
  font-size: 0.5rem;
  width: 0.8rem;
  height: 0.5rem;
  text-align: center;
  float: right;
}
</style>
