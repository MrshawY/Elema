<template>
  <div>
    <div class="scoreOS">
      <div class="score">
        <div class="score-number">{{avgsorce}}</div>
        <div class="score-texts">综合评分</div>
        <div class="score-more">高于周边商家69.2%</div>
      </div>
      <div class="serviec">
        <div class="serviec-text">服务态度<div class="serviec-online">
            <star :servicesorce1=servicesorce1></star>
          </div>{{servicesorce1}}</div>
        <div class="serviec-text"> 服务态度<div class="serviec-online">
            <star :servicesorce2=servicesorce2></star>
          </div>{{servicesorce2}}</div>
        <div class="serviec-text">送达时间 49分钟</div>
      </div>
    </div>
  </div>
</template>
<script>
import star from './star'
export default {
  data () {
    return {
      avgsorce: 3.9,
      servicesorce1: 3.9,
      servicesorce2: 3.9
    }
  },
  components: {
    star
  }
}
</script>
<style scoped>
.scoreOS {
  display: flex;
  height: 3rem;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
  position: relative;
}
.score {
  display: flex;
  width: 3rem;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 0 0 auto;
}
.score::after {
  content: '';
  width: 1px;
  height: 2.5rem;
  position: absolute;
  left: 3rem;
  top: 0.25rem;
  border-right: 1px solid rgb(214, 185, 185, 1);
}
.score-number {
  font-size: 0.8rem;
  color: rgb(247, 167, 20, 1);
  padding: 0.1rem;
}
.score-texts {
  font-size: 0.3rem;
  padding: 0.1rem;
}
.score-more {
  font-size: 0.2rem;
  color: #a49f9f;
  padding: 0.1rem;
}
.serviec {
  display: flex;
  flex: 1 1 auto;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  font-size: 0.3rem;
}
.serviec-online {
  display: inline-block;
}
.serviec-text {
  font-size: 0.35rem;
  padding: 0.2rem 0.15rem;
}
</style>
