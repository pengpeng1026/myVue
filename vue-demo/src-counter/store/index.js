import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  count:0
};
const actions = {
  incrementIfOdd({commit,state}){
    if(state.count%2 === 1){
      commit('increment')
    }
  },
  incrementAsync({commit,state}){
    setTimeout(() => {
      commit('increment')
    }, 500);
  }
}
const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  }
}
const getters = {
  evenOrOdd(state){
    return state.count%2===0?'偶数':'奇数'
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
