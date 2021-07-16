<template>
  <div>
    <div class="row">
      <div class="col-md-offset-2 page-header">
        <h2>Router Test</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-offset-2 col-md-2 list-group">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation"><router-link to="/about">about</router-link></li>
          <li role="presentation"><router-link to="/home">home</router-link></li>
        </ul>
      </div>

      <div class="panel col-md-8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import About from './pages/About.vue'
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components:{
    About,
    Home
  }
}
</script>

<style scoped>
  .router-link-active{
    background: teal !important;
  }
</style>
