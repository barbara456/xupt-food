<template>
  <div>
    <food-header></food-header>
    <food-search></food-search>
    <food-list></food-list>
    <food-alphabet></food-alphabet>
  </div>
</template>

<script>
import FoodHeader from'./components/Header'
import FoodSearch from'./components/Search'
import FoodList from'./components/List'
import FoodAlphabet from'./components/Alphabet'

export default {
  name: 'Food',
  components:{
    FoodHeader,
    FoodSearch,
    FoodList,
    FoodAlphabet
  }
  }
</script>

<style lang="stylus" scoped>

</style>
