import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    food: '食堂'
  },
  actions: {
    changefood(fdx, food) {
      fdx.commit('changeFood',food)
    }
  },
  mutations:{
    changeFood(state,food){
    state.food=food
    }
  }
})
