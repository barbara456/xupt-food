<template>
  <div class="button">
    <button>好评</button>
    <button>中评</button>
    <button>差评</button>
  </div>
</template>

<script>
export default {
  name: 'CommentButton',
}
</script>

<style lang="stylus" scoped>
.button
  // display flex
  background-color red
  height 5rem
  width 5rem
  position fixed
  left 2rem
  top 12rem
  right 2rem
  bottom 0
  button
    width 100
    height 20
    color red
</style>
