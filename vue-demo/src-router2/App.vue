<template>
  <div>
    <h1>welcome</h1>
    <hr>
    <ul class="nav nav-pills nav-stacked">
      <li role="presentation"><router-link to="/home">Home</router-link></li>
      <li role="presentation"><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  export default {
    name: 'App',
    components:{
      Home,
      About
    }
  }
</script>

<style scoped>
  .router-link-active{
    background: skyblue !important;
  }
</style>
