import axios from 'axios'
export default {
  /* search({commit},searchName){
    commit('search_request')
    axios.get('https://api.github.com/search/users2',{
      params:{
        q:searchName
      }
    })
    .then(response => {  //如果成功更新数据
      const data = response.data
      const users = data.items.map(item => ({
        username:item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      commit('done_request',{users})
    })
    .catch(error => {  //如果失败也要更新数据
      commit('fail_request',{errorMsg:error.message})
    })
  } */
  async search({commit},searchName){
    commit('search_request')
    try {
      
      const response = await axios.get('https://api.github.com/search/users',{
        params:{
          q:searchName
        }
      })
      const data = response.data
      const users = data.items.map(item => ({
        username:item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      commit('done_request',{users})
      
    } catch (error) { //如果失败也要更新数据
      
      commit('fail_request',{errorMsg:error.message})
    }
    
  }
}
 