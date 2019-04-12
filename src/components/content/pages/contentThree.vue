<template>
  <div>
    <div class="contenthree">
      <ul>
        <li v-for="n in list" :key="n.id">
          {{n.name}}
          <button @click="del(n)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        },
        {
          name: 4
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    del (n) {
      var index = this.list.indexOf(n)
      this.list.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
