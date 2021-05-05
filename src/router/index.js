import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Food from '@/pages/food/Food'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/food',
        name: 'Food',
        component: Food
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})