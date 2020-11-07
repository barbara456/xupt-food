<template>
<div>
  <div class="header">
    <div class="header-left">西邮</div>
    <div class="header-input">
      <span class="iconfont">&#xe60c;</span>
      输入想吃的/想买的/想玩的</div>
    <router-link to="/food">
      <div class="header-right">{{this.$store.state.food}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    margin 0 .2rem
    padding-top .02rem
    font-size 16px
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    padding-left .2rem
    background #fff
    border-radius .1rem
    color #ccc
  .header-right
    width 1.24rem
    float right
    text-align center
    font-size 16px
    color #fff
    .arrow-icon
      margin-left -.06rem
      font-size .3rem
</style>
