<template>
  <div>About
    <br>
    <br>
    <ul class="nav nav-pills">
      <li role="presentation"><router-link to="/about/news">news</router-link></li>
      <li role="presentation"><router-link to="/about/message">messages</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>

</style>
