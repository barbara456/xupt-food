<template>
<div>
  <home-header></home-header>
  <home-swiper :list='swiperList'></home-swiper>
  <home-icons :list='iconList'></home-icons>
  <home-recommend :list='recommendList'></home-recommend>
  <home-weekend :list='weekendList'></home-weekend>
</div>
</template>

<script>
import HomeHeader from'./components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      lastFood:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['food'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?food=' + this.food)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
    }
  },
  mounted(){
    this.lastFood=this.food
    this.getHomeInfo()
  },
  activated(){
    if(this.lastFood!==this.food){
      this.lastFood=this.food
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
