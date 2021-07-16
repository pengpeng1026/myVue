export default {
  search_request(state){
    // 请求中更新数据
    state.firstView = false
    state.loading = true
  },
  done_request(state,{users}){
    state.loading = false
    state.users = users
  },
  fail_request(state,{errorMsg}){
    state.loading = false
    state.errorMsg = errorMsg
  }
}