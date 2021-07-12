<template>
  <div>
    <h2>我是demo组件</h2>
    <button @click="fasong">点我</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  methods:{
    fasong(){
      this.$emit('fafa',27272727)
    }
  }
}
</script>

<style scoped>

</style>
