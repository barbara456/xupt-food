<template>
  <div>
  <div class="title">热销好菜推荐</div>
  <ul>
    <li
    class="item border-bottom"
    v-for="item of recommendList"
    :key="item.id"
    >
         <img class="item-img" :src="item.imgUrl">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">
          {{item.discount}}
          <span class="item-price">{{item.usual}}</span>
          <span class="iconfont item-icon">抢!!!&#xe61c;</span>
          </button>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data(){
    return{
      recommendList:[{
        id:'0001',
        imgUrl:require('imgs/chicken.jpg'),
        title:'黄焖鸡套餐+香菇+鱼豆腐+金针菇',
        desc:'吉周客黄焖鸡（政法店）',
        discount:'$19.9',
        usual:'$29.9'
      },{
        id:'0002',
        imgUrl:require('imgs/chicken.jpg'),
        title:'黄焖鸡套餐+香菇+鱼豆腐+金针菇',
        desc:'吉周客黄焖鸡（政法店）',
        discount:'$19.9',
        usual:'29.9'
      },{
        id:'0004',
        imgUrl:require('imgs/chicken.jpg'),
        title:'黄焖鸡套餐+香菇+鱼豆腐+金针菇',
        desc:'吉周客黄焖鸡（政法店）',
        discount:'$19.9',
        usual:'$29.9'
      },{
        id:'0002',
        imgUrl:require('imgs/chicken.jpg'),
        title:'黄焖鸡套餐+香菇+鱼豆腐+金针菇',
        desc:'吉周客黄焖鸡（政法店）',
        discount:'$19.9',
        usual:'29.9'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
      .item-price
        text-decoration line-through
        color red
</style>
