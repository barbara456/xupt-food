<template>
  <div>
    <food-header></food-header>
    <food-search></food-search>
    <food-list :foods='foods' :hot='hotFoods'></food-list>
    <food-alphabet :foods="foods"></food-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data(){
    return{
      foods:{},
      hotFoods:[]
    }
  },
  methods:{
    getFoodInfo(){
      axios.get('api/food.json')
      .then(this.handleGetFoodInfoSucc)
    },
    handleGetFoodInfoSucc(res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        this.foods=data.foods
        this.hotFoods=data.hotFoods
      }
    }
  },
  mounted(){
    this.getFoodInfo()
  }
  }
</script>

<style lang="stylus" scoped>

</style>
