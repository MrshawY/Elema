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
  props: ['servicesorce', 'starnum'],
  data () {
    return {
      servicesorces: 0,
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
      this.servicesorces = 2.0 * (parseInt(index) + 1)
      if (this.servicesorce === 1) {
        this.$emit('showsocre1', this.servicesorces)
      } else {
        this.$emit('showsocre2', this.servicesorces)
      }
    },
    lightens () {
      for (var i = 0; i <= this.starnum; i++) {
        this.imglist[i].imgUrl = require('../../../../resource/img/star36_on@2x.png')
      }
    }
  },
  mounted () {
    this.lightens()
  }
}
</script>
<style scoped>
.staricon {
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
