<template>
  <div>
    <h2>{{title}}</h2>
    <Head info="你说这一句，很有夏天的感觉" ondragstart="return false" onbeforecopy="return false"/>
  </div>
</template>

<script>
import Head from './Head'
export default {
  name: 'HelloWorld',
  components:{
    Head
  },
  props: {
    title:{
      type:String
    }
  }
}
</script>

<style scoped>

</style>
