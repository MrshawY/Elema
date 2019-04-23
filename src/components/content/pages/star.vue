<template>
  <div>
    <div class="staricon">
      <ul>
        <li v-for="itme in imglist" :key="itme.id" @click="lighten(itme.id)"><img :src="itme.imgUrl"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imglist: [{
        id: '0',
        imgUrl: require('../../../../resource/img/star36_off@2x.png')
      }, {
        id: '1',
        imgUrl: require('../../../../resource/img/star36_off@2x.png')
      }, {
        id: '2',
        imgUrl: require('../../../../resource/img/star36_off@2x.png')
      }, {
        id: '3',
        imgUrl: require('../../../../resource/img/star36_off@2x.png')
      }, {
        id: '4',
        imgUrl: require('../../../../resource/img/star36_off@2x.png')
      }]
    }
  },
  methods: {
    // 点亮星星的方法
    lighten (index) {
      // 恢复原有图片地址
      this.imglist.forEach((itme) => {
        itme.imgUrl = require('../../../../resource/img/star36_off@2x.png')
      })
      // 更改选中图片地址
      for (var i = 0; i <= index; i++) {
        this.imglist[i].imgUrl = require('../../../../resource/img/star36_on@2x.png')
      }
    }
  }
}
</script>
<style scoped>
.staricon {
  margin-left: 0.3rem;
  margin-right: 0.1rem;
}
ul {
  display: flex;
}
ul img {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
