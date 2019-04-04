<template>
  <div>
    <input type="button" value="ok" @click="flag=!flag">
    <transition>
      <p v-if="flag">这是一个动画</p>
    </transition>
  </div>
</template>
<style scoped>
div {
  width: 100%;
  height: 100%;
  background-color: aqua;
}
/* 过度动画 */
.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateY(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease-in;
}
</style>
<script>
export default {
  data () {
    return {
      flag: false
    }
  }
}
</script>
