import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 管理状态数据，相当于data对象
const state = {
  count:0
}
// 包含可以直接更新state对象数据的方法，state对象中不可以有业务逻辑和异步代码
const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  }
}
// 包含用于间接更新state对象数据的方法，state中可以有业务逻辑和异步代码
const actions = {
  incrementIfOdd({commit,state}){
    if(state.count % 2 === 1){
      commit('increment')
    }
  },
  incrementAsync({commit,state}){
    setTimeout(() => {
      commit('increment')
    },1000)
  }
}
// 包含基于state的getter计算属性
const getters = {
  evenOrOdd(state){
    return state.count % 2 === 0 ? '偶数':'基数'
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})