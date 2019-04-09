<template>
  <div>
    <Mheader></Mheader>
    <Mcontent :typegoods="typegoods" :typeList="typeList"></Mcontent>
  </div>
</template>
<script>
import Mheader from '../header/header'
import Mcontent from '../content/content'
export default {
  data () {
    return {
      typegoods: [],
      typeList: []
    }
  },
  components: {
    Mheader,
    Mcontent
  },
  methods: {
    getdata () {
      this.$http.get('../../../static/mork/data.json').then((res) => {
        this.typegoods = res.data.data[0].typegoods
        this.typeList = res.data.data[0].typeList
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style scoped>
</style>
