<template>
  <div class="button">
    <button><img src="https://z3.ax1x.com/2021/05/29/2A2Gbq.png">好评</button>
    <button><img src="https://z3.ax1x.com/2021/05/29/2A2jzQ.png">中评</button>
    <button><img src="https://z3.ax1x.com/2021/05/29/2AR9Zq.png">差评</button>
  </div>
</template>

<script>
export default {
  name: 'CommentButton',
}
</script>

<style lang="stylus" scoped>
.button
  display flex
  justify-content space-around
  height 1rem
  width 5rem
  position fixed
  left 1rem
  top 12rem
  right 1rem
  bottom 0
  button
    width 0.9rem
    height 0.9rem
    border-radius 50%
    img
      width 100%
      height auto
</style>
