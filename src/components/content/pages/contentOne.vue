<template>
  <div class="contentone">
    <div class="tag-li">
      <ul>
        <li tag="div" class="tag-titles" v-for="(item, index) in tpypeList" :class="isactive == index ? 'tocolor' : ''" @click="tocolor(index)" :key="item.id">
          <span>
            {{item.title}}
          </span>
        </li>
      </ul>
    </div>
    <div class="li-content">
      <div class="content-box">
        <div class="content-title">
          <div>单人特色套餐</div>
        </div>
        <div class="content-txt">
          <img src="//fuss10.elemecdn.com/d/9a/9f78bbaa060a54d411d71f1d47081jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/">
          <div class="title-txt">
            <p>皮蛋瘦肉粥配包子套餐</p>
            <p>咸粥</p>
            <p>月售1132份,好频率100%</p>
            <span class="money">￥</span><span class="price">24</span><span class="oldprice">￥28</span>
          </div>
          <div class="computer">
          <div class="jianNum">-</div>
          <div>1</div>
          <div class="addNum">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contentone {
  display: flex;
  /* flex-flow:row; */
  align-items: flex-start;
}
.tag-titles {
  display: block;
  width: 1.5rem;
  height: 1rem;
  background-color: #f1f1f1;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #e5e2e8;
}
/* 点击背景颜色切换 */
.tocolor {
  background-color: white;
}
.tag-titles span {
  display: block;
  width: 1.5rem;
  height: 1rem;
  font-size: 0.2rem;
  line-height: 1rem;
}
.tag-titles:last-of-type {
  border-bottom: 0px;
}
/* .tag-titles:nth-of-type(2) span {
  margin-top: 1rem;
  padding-bottom: 0.5rem;
} */
.tag-li {
  width: 1.5rem;
  height: 8rem;
  overflow-y: auto;
  flex: 0 0 auto;
}
.tag-li::-webkit-scrollbar {
  display: none;
}
.li-content {
  background-color: white;

  flex: 1 1 auto;
}
/* 右边的内容 */
.content-title {
  border-left: 4px solid #c1b1b1;
  height: 0.5rem;
  background-color: #dcd5d5;
}
.content-title div {
  height: 8rem;
  line-height: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.3rem;
}
.content-txt {
  width: 100%;
  height: 2.3rem;
  background-color: yellow;
  position: relative;
}
.content-txt img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.title-txt {
  font-size: 0.25rem;
  position: absolute;
  top: 0.3rem;
  left: 1.7rem;
  color: #c1b1b1;
  line-height: .4rem
}
.title-txt p:first-of-type{
  font-size: 0.35rem;
  color: black;
}
.title-txt .money{
  font-size: .25rem;
  color: red
}
.title-txt .price{
  font-size: .35rem;
  color: red
}
.title-txt .oldprice{
  margin-left: .25rem;
 text-decoration: line-through
}
.computer{
  border: 1px solid black;
  width: 2rem;
  height: 1rem;
  display: flex
}
.computer .addNum{
  border-radius: 50%;
    width: .5rem;
    height: .5rem;
    background-color: blue;
    color: white;
    font-size: .5rem;
    text-align: center;
    line-height: .45rem;
}
</style>
<script>
export default {
  data () {
    return {
      istocolor: false,
      isactive: 0,
      tpypeList: [{
        id: '01',
        title: '热销榜'
      }, {
        id: '02',
        title: '单人热销套餐'
      },
      {
        id: '03',
        title: '特色粥品'
      },
      {
        id: '04',
        title: '精选热菜'
      },
      {
        id: '05',
        title: '爽口凉菜'
      },
      {
        id: '06',
        title: '半成品'
      },
      {
        id: '07',
        title: '饭类'
      },
      {
        id: '08',
        title: '菜类'
      },
      {
        id: '09',
        title: '面类'
      },
      {
        id: '10',
        title: '其他'
      }
      ]
    }
  },
  methods: {
    tocolor (index) {
      this.isactive = index
    }
  }
}
</script>
