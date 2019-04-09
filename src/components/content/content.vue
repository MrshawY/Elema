<template>
  <div>
    <!-- 导航栏 -->
    <div class="linkdiv">
      <div :class="{showcolor: oneshow}" @click="todiv(1)">商家</div>
      <div :class="{showcolor: twoshow}" @click="todiv(2)">详情</div>
      <div :class="{showcolor: threeshow}" @click="todiv(3)">评论</div>
    </div>
    <!-- 导航显示对应的内容 -->
    <div class="isshow" :class="{show:oneshow}">
      <one :typegoods="typegoods" :typeList="typeList"></one>
    </div>
    <div class="isshow" :class="{show:twoshow}">
      <two></two>
    </div>
    <div class="isshow" :class="{show:threeshow}">
      <three></three>
    </div>
  </div>
</template>
<style scoped>
.showcolor{
  color:rgba(235, 31, 31 ,1);
  border-bottom:2px solid rgba(235, 31, 31 ,1) ;
}
.isshow {
  display: none;
}
.show {
  display: block;
}
/* 导航栏 */
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
.show {
  display: block;
}
</style>
<script>
import one from './pages/contentOne'
import two from './pages/contentTwo'
import three from './pages/contentThree'
export default {
  props: ['typegoods', 'typeList'],
  data () {
    return {
      oneshow: true,
      twoshow: false,
      threeshow: false
    }
  },
  components: {
    one,
    two,
    three
  },
  methods: {
    todiv (index) {
      if (index === 1) {
        this.oneshow = true
        this.twoshow = false
        this.threeshow = false
      } else if (index === 2) {
        this.oneshow = false
        this.twoshow = true
        this.threeshow = false
      } else if (index === 3) {
        this.oneshow = false
        this.twoshow = false
        this.threeshow = true
      }
    }
  }
}
</script>
