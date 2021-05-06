<template>
  <div class="header">
    想吃什么
    <router-link to="/Home">
      <div class="iconfont header-back">&#xe60b;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FoodHeader',
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .32rem
      color #fff
</style>
