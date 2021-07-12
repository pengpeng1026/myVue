<template>
  <div>
    <h2>我是h2组件</h2>
    <!-- <Demo @send="sendData"/>  方法1 -->
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
    sendData(aa){
      console.log('接收到数据',aa);
    }
  },
  mounted(){
    this.$refs.demo.$on('fafa',this.sendData)
  }

}
</script>

<style scoped>

</style>
