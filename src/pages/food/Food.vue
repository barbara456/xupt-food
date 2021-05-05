<template>
  <div>
    <food-header></food-header>
    <food-search :foods='foods'></food-search>
    <food-list
      :foods='foods'
      :hot='hotFoods'
      :letter='letter'
    ></food-list>
    <food-alphabet
      :foods="foods"
      @change="handleLetterChange"
    ></food-alphabet>
  </div>
</template>

<script>
import ApiUrl from '@/config/api_url'
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
      hotFoods:[],
      letter:''
    }
  },
  methods:{
    getFoodInfo(){
      axios.get("http://localhost:8888/clothes")
      .then(this.handleGetFoodInfoSucc)
    },
    handleGetFoodInfoSucc(res){
      res=res.data
      console.log(res)
      if(res){
        const data=res

        this.foods=data.filter(item=>item.type===2)
        this.foods=Object.assign({}, ...
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(item => {
            return {
                [item]: this.foods.filter(item_ => item_.spell.toUpperCase().startsWith(item))
            }
        }))
        this.hotFoods=data.filter(item=>item.type===1)
      }
    },
    handleLetterChange(letter){
      this.letter=letter
    }
  },
  mounted(){
    this.getFoodInfo()
  }
  }
</script>

<style lang="stylus" scoped>

</style>
