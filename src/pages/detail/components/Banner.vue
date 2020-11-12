<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="https://s1.ax1x.com/2020/10/27/BlVrbq.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-titile">
          吉周客黄焖鸡
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60c;</span>
          5
        </div>
      </div>
    </div>
    <common-gallery
      :imgs='imgs'
      v-show="showGallery"
      @close='handleGalleryClose'
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data(){
    return{
      showGallery:false,
      imgs:['https://s1.ax1x.com/2020/10/27/BlVrbq.jpg','https://s1.ax1x.com/2020/11/11/Bjx08P.jpg']
    }
  },
  methods:{
    handleBannerClick(){
      this.showGallery=true
    },
    handleGalleryClose(){
      this.showGallery=false
    }
  },
  components:{
    CommonGallery,
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-titile
      flex 1
      font-size .4rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
