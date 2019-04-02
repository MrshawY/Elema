<template>
  <div class="linkdiv">
    <router-link  tag="div" to='/c1'>商品</router-link>
    <router-link  tag="div" to='/c2'>评论</router-link>
    <router-link  tag="div" to='/c3'>商家</router-link>
  </div>
</template>
<style scoped>
.linkdiv{
   display: flex;
}
.linkdiv div{
    flex-grow: 1;
    height: 2.5rem;
    font-size: 1rem;
    line-height: 2.5rem;
    text-align: center
}
 .router-link-active{
  background-color: aqua
}
</style>
<script>
export default {
}
</script>
