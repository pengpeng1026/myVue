export default {
  incrementIfOdd({commit,state}){
    if(state.counter % 2 === 1){
      commit('increment')
    }
  },
  incrementAsync({commit,state}){
    setTimeout(() => {
      commit('increment')
    },500)
  }
}