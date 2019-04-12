<template>
  <div class="bigcomputer">
    <transition>
      <div class="jianNum" @click="jianNum" v-show="goodnums > 0">
        <div>-</div>
      </div>

    </transition>
    <div class="addNum" @click="addNum">+</div>
    <div class="num" v-show="goodnums > 0">{{goodnums}}</div>

  </div>
</template>
<script>
export default {
  props: ['good', 'goodnums'],
  methods: {
    addNum () {
      this.$store.dispatch('addNum', { goods: this.good })
    },
    jianNum () {
      this.$store.dispatch('jianNum', { goods: this.good })
    }
  }
}
</script>
<style scoped>
.bigcomputer {
  width: 1.8rem;
  height: 0.5rem;
}
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
  width: 0.5rem;
  height: 0.5rem;
  background-color: #1371ce;
  color: #1371ce;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.35rem;
  float: left;
  display: flex;
  align-items:center;
  justify-content:center;
}
 .jianNum div{
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  background-color: white
}
.num {
  font-size: 0.5rem;
  width: 0.8rem;
  height: 0.5rem;
  text-align: center;
  float: right;
}
</style>
