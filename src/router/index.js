import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Food from '@/pages/food/Food'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/food',
      name: 'Food',
      component: Food
    }]
})
