<template>
  <div class="tit">
    <HelloWorld title="窗外的麻雀，在电线杆上多嘴"></HelloWorld>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .tit{
    color: #bfa;
  }
</style>
