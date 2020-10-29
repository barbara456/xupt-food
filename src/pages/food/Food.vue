<template>
  <div>
    <food-header></food-header>
    <food-search></food-search>
  </div>
</template>

<script>
import FoodHeader from'./components/Header'
import FoodSearch from'./components/Search'

export default {
  name: 'Food',
  components:{
    FoodHeader,
    FoodSearch
  }
  }
</script>

<style lang="stylus" scoped>

</style>
