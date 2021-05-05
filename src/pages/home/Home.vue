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
import ApiUrl from '@/config/api_url'
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
      axios.get('http://localhost:8888/furnitrue')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res){
        const data=res
        console.log(data)
        this.swiperList=data.filter(item=>item.type===1)
        this.iconList=data.filter(item=>item.type===2)
        this.recommendList=data.filter(item=>item.type===3)
        this.weekendList=data.filter(item=>item.type===4)
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
