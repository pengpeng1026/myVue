<template>
  <div class="demo">
    <h2>我是demo组件</h2>
    <button @click="commit">dianwo</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data(){
    return {
      name:'cahngge'
    }
  },
  methods:{
    commit(){
      this.$emit('cao',this.name)
    }
  },
  
}
</script>

<style scoped>
  .demo{
    background: pink;

  }
</style>
