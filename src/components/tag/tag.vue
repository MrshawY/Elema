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
    height: 1rem;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;
}
 .router-link-active{
  background-color:#f1f1f1
}
</style>
<script>
export default {
}
</script>
