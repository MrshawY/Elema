<template>
  <div class="linkdiv">
    <router-link tag="div" to='/c1'>商品</router-link>
    <router-link tag="div" to='/c2'>评论</router-link>
    <router-link tag="div" to='/c3'>商家</router-link>
  </div>
</template>
<style scoped>
.linkdiv {
  display: flex;
}
.linkdiv div {
  flex-grow: 1;
  height: 1rem;
  font-size: 0.4rem;
  line-height: 1rem;
  text-align: center;
}
.router-link-active {
  color: red;
}
</style>
<script>
export default {
  props: ['typegoods', 'typeList']
}
</script>
