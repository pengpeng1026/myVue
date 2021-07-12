<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <!-- 自定义事件，父组件中给子组件的标签绑定一个自定义事件，事件名和子组件的this.$emit('事件名'，data)必须一致 -->
    <!-- <Demo @ding='test'/>    此为推荐写法 -->
    <Demo ref="demo"/>
  </div>
</template>

<script>
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    components:{
      Demo
    },
    methods:{
      test(aa){
        console.log('接收到数据',aa);
      }
    },
    mounted(){
      // $refs.ding中的ding 是在绑定ref的时候写的关键字
      this.$refs.demo.$on('cao',this.test)
    }
  }
</script>

<style scoped>
  .app{
    padding: 10px;
    background: teal;
  }
</style>
