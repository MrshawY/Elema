<template>
  <div>
    <button @click="tochange">切换</button>
    <transition>
      <div v-show="ishow">这</div>
    </transition>
    <div>{{go}}</div>
    <div>{{gos}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ishow: true
    }
  },
  computed: {
    gos () {
      return '???'
    }
  },
  methods: {
    tochange () {
      this.ishow = !this.ishow
    },
    go () {
      return '???'
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
