<template>
  <div class="comment">
    <div class="scoreOS">
      <div class="score">
        <div class="score-number">{{avgsorce}}</div>
        <div class="score-texts">综合评分</div>
        <div class="score-more">高于周边商家69.2%</div>
      </div>
      <div class="serviec">
        <div class="serviec-text">服务态度<div class="serviec-online">
            <star :servicesorce=isone @showsocre1="getsorce1"></star>
          </div><span v-show="servicesorce1>0">{{servicesorce1}}</span></div>
        <div class="serviec-text"> 服务态度<div class="serviec-online">
            <star :servicesorce=istwo @showsocre2="getsorce2"></star>
          </div><span v-show="servicesorce2>0">{{servicesorce2}}</span></div>
        <div class="serviec-text">送达时间 <span class="haulage-time">49分钟</span></div>
      </div>
    </div>
    <div class="filter-box">
      <div class="btn-all" @click="allcomment">全部{{this.allcommentnum}}</div>
      <div class="btn-good" @click="goodnums">满意{{this.goodnum}}</div>
      <div class="btn-nogood" @click="nogoodnums">不满意{{this.nogoodnum}}</div>
    </div>
    <div class="Tis-box">
      <div>只看有内容的评价</div>
    </div>
    <div class="comment-box">
      <div class="comment-itme" v-for="itme in commentList" :key="itme.id">
        <div class="itme-headphone">
          <img src="" alt="">
        </div>
        <div class="itme-content">
          <div class="itme-name">
            <span>{{itme.name}}</span><span class="commentname">{{itme.commenttime}}</span>
          </div>
          <div class="itme-star">
            <star :starnum=itme.starnum></star> <span>{{itme.runtime}}</span>
          </div>
          <div class="itme-text">{{itme.content}}</div>
          <div class="itme-goods">
            <div class="isgood"></div>
            <div class="goodsname" v-for="itmes in itme.shoppinglist" :key="itmes.id">{{itmes.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import star from './star'
export default {
  data () {
    return {
      isone: 1,
      istwo: 2,
      servicesorce1: 0,
      servicesorce2: 0,
      commentList: [
        {
          id: '1',
          imgUrl: '',
          commenttype: '0', // 是否是好评或者差评 0代表好评 1代表差评
          starnum: '3',
          name: '聚***家',
          runtime: '80分钟送达',
          commenttime: '2017-10-03',
          content: '油条凉了，而且没有酱75分钟才到，很慢，送餐员太对不错，但毕竟好晚了',
          shoppinglist: [
            {
              id: '1',
              name: '超级大的虎皮尖椒'
            }, {
              id: '2',
              name: '超级大的虎皮尖椒'
            }
          ]
        }, {
          id: '2',
          imgUrl: '',
          commenttype: '1',
          starnum: '2',
          name: '聚***家',
          runtime: '80分钟送达',
          commenttime: '2017-11-04',
          content: '油条凉了，而且没有酱75分钟才到，很慢，送餐员太对不错，但毕竟好晚了,油条凉了，而且没有酱75分钟才到，很慢，送餐员太对不错，但毕竟好晚了',
          shoppinglist: [
            {
              id: '1',
              name: '超级大的虎皮尖椒'
            }, {
              id: '2',
              name: '超级大的虎皮尖椒'
            }
          ]
        }, {
          id: '3',
          imgUrl: '',
          commenttype: '1',
          starnum: '4',
          name: '王***',
          runtime: '75分钟送达',
          commenttime: '2019-04-30',
          content: '油条凉了，而且没有酱75分钟才到，很慢，送餐员太对不错，但毕竟好晚了,油条凉了，而且没有酱75分钟才到，很慢，送餐员太对不错，但毕竟好晚了',
          shoppinglist: [
            {
              id: '1',
              name: '超级大的虎皮尖椒'
            }, {
              id: '2',
              name: '超级大的虎皮尖椒'
            }
          ]
        }
      ]
    }
  },
  components: {
    star
  },
  computed: {
    ...mapState(['goodnum', 'allcommentnum', 'nogoodnum']),
    avgsorce () {
      return (this.servicesorce1 + this.servicesorce2) / 2
    }
  },
  methods: {
    getsorce1 (data) {
      this.servicesorce1 = data
    },
    getsorce2 (data) {
      this.servicesorce2 = data
    },
    allcomment () {

    },
    goodnums () {

    },
    nogoodnums () {

    }
  }

}
</script>
<style scoped>
.comment {
  background-color: rgb(233, 226, 226);
}
.scoreOS {
  display: flex;
  height: 3rem;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
  position: relative;
  background-color: white;
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
  margin-left: 0.3rem;
}
.serviec-text {
  font-size: 0.35rem;
  padding: 0.2rem 0.15rem;
}
.haulage-time {
  font-size: 0.3rem;
  color: #a49f9f;
  margin-left: 0.2rem;
}
/* 满意筛选按钮 */
.filter-box {
  display: flex;
  font-size: 0.3rem;
  margin-top: 0.3rem;
  border-top: 1px solid rgb(214, 185, 185, 1);
  border-bottom: 1px solid rgb(214, 185, 185, 1);
  background-color: white;
}
.btn-all,
.btn-good,
.btn-nogood {
  width: 1.5rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background-color: rgb(39, 164, 247);
  margin: 0.3rem 0.1rem;
}
.btn-all {
  margin-left: 0.3rem;
}
.btn-good {
  background-color: rgb(193, 223, 243);
}
.btn-nogood {
  background-color: rgb(165, 182, 194);
}
.Tis-box {
  display: flex;
  height: 1rem;
  font-size: 0.3rem;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
  background-color: white;
}
.Tis-box div {
  line-height: 1rem;
  margin-left: 0.5rem;
  color: rgb(214, 185, 185, 1);
}
.comment-itme {
  min-height: 3rem;
  overflow: hidden;
  display: flex;
  background-color: white;
  position: relative;
}
.comment-itme::before {
  content: '';
  width: 7rem;
  height: 1px;
  position: absolute;
  bottom: 0.01rem;
  left: 0.2rem;
  border-bottom: 1px solid rgb(214, 185, 185, 1);
}
.itme-headphone {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  border-radius: 100%;
  background-color: blue;
  flex: 0 0 auto;
}
.itme-content {
  margin-left: 0.3rem;
  flex: 1 1 auto;
}
.itme-name {
  font-size: 0.3rem;
  margin-top: 0.5rem;
}
.commentname{
  float: right;
  margin-right: .5rem
}
.itme-star {
  font-size: 0.5rem;
  display: flex;
}
.itme-star span {
  font-size: 0.3rem;
  margin-top: 0.2rem;
  color: rgb(214, 185, 185, 1);
}
.itme-text {
  margin-top: 0.15rem;
  font-size: 0.3rem;
  font-weight: bold;
  line-height: 0.4rem;
  width: 5.5rem;
}
.itme-goods {
  margin-top: 0.15rem;
  display: flex;
  margin-bottom: 0.15rem;
}
.isgood {
  width: 0.4rem;
  height: 0.4rem;
  background-color: blue;
}
.goodsname {
  font-size: 0.3rem;
  width: 2rem;
  height: 0.4rem;
  border: 1px solid rgb(161, 154, 154);
  line-height: 0.4rem;
  margin-left: 0.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(175, 166, 166);
}
</style>
