<template>
  <div>
    <h2>我是demo2组件哦</h2>
    <button @click="test">ding</button>
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  methods:{
    test(){
      this.$eventBus.$emit('aaa',22)
    }
  }
}
</script>

<style scoped>

</style>
