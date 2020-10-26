<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data(){
    return{
      swiperOptions: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'0001',
        imgUrl:'http://www.xiyou.edu.cn/images/0929guoqing.jpg'
      },{
        id:'0002',
        imgUrl:'http://www.xiyou.edu.cn/images/0905jieyueliangshi.jpg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 27.44%
  .swiper-img
    width 100%
</style>
