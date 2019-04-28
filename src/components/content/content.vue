<template>
  <div>
    <!-- 导航栏 -->
    <div class="linkdiv">
      <div :class="{showcolor: oneshow}" @click="todiv(1)">商家</div>
      <div :class="{showcolor: threeshow}" @click="todiv(3)">详情</div>
      <div :class="{showcolor: twoshow}" @click="todiv(2)">评论</div>
    </div>
    <!-- 导航显示对应的内容 -->
    <div class="isshow" :class="{show:oneshow}">
      <one :typegoods="typegoods" :typeList="typeList" ></one>
    </div>
    <div class="isshow" :class="{show:twoshow}">
      <two :commentList="commentLists"></two>
    </div>
    <div class="isshow" :class="{show:threeshow}">
      <three :msglist="msglist" :abbList="abbList" :shopimgList="shopimgList" :shopmsglist="shopmsglist"></three>
    </div>
  </div>
</template>
<style scoped>
.showcolor {
  color: rgba(235, 31, 31, 1);
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
   border-bottom: 1px solid rgb(197, 184, 184)
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
  props: ['typegoods', 'typeList', 'commentList', 'msglist', 'abbList', 'shopimgList', 'shopmsglist'],
  data () {
    return {
      oneshow: true,
      twoshow: false,
      threeshow: false,
      commentLists: []
    }
  },
  components: {
    one,
    two,
    three
  },
  watch: {
    commentList (newval) {
      this.commentLists = newval
    }
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
