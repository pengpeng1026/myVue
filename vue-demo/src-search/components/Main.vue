<template>
  <div>
    <h2 v-if="isFirst">输入关键字搜索</h2>
    <h2 v-else-if="isLoading">LOADING....</h2>
    <h2 v-else-if="isError"></h2>
    <div class="row">
      <div class="card" v-for="user in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Main',
  data(){
    return {
      isFirst:true,
      isLoading:false,
      users:[],
      isError:false
    }
  },
  mounted(){
    this.$eventBus.$on('test',this.search)
  },
  methods:{
    search(value){
      this.isFirst = false
      this.isLoading = true
      axios.get('https://api.github.com/search/users?',{
        params:{
          q:value
        }
      }).then(response => {
        // console.log(response);
        this.isLoading = false
        const data = response.data
        const users = data.items.map(item => ({
          username: item.login,
          avatar_url: item.avatar_url,
          url: item.html_url
        }))
        this.users = users
      }).catch(error => {
        this.loading = false
        this.errorMsg = error.message
      })
    }
  }
}
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
