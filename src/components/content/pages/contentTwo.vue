<template>
  <div>
    <button @click="tochange">切换</button>
      <transition>
        <div v-show="ishow">这</div>
      </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ishow: true
    }
  },
  methods: {
    tochange () {
      this.ishow = !this.ishow
    }
  }
}
</script>
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
</style>
