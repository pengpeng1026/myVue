<template>
  <div>
    <ul>
      <!-- <li>id2:{{$route.query.id}}</li> -->
      <li>id:{{$route.query.id}}</li>
      <li>author:{{infoMes.title}}</li>
      <li>content:{{infoMes.content}}</li>
    </ul>
  </div>
</template>

<script>
const info = [
  {id:1,title:'hello vue',content:'yyds'},
  {id:2,title:'hello react',content:'react you can not use'},
  {id:3,title:'hello angular',content:'dog dont\'like it'},
]
export default {
  name: 'Detail',
  data(){
    return {
      infoMes:{}
    }
  },
  // 模拟当得到传递过来的id时根据id请求对应的数据
  mounted(){
    // 此时可以展示数据，但是当路由发生切换时页面不会再调用mounted钩子，因为这个钩子只会调用一次
    const id = this.$route.query.id *1
    setTimeout(() => {
      const infoMes = info.find(item => item.id === id)
      this.infoMes = infoMes
    },400)
    // this.updateUI()
  },
  methods:{
    updateUI(){
      const id = this.$route.query.id *1
      const infoMes = info.find(item => item.id === id)
      this.infoMes = infoMes
    }
  },
  // 监视$route对象的变化
  watch:{
    $route(value){
      this.updateUI(value)
    }
  }
}
</script>

<style scoped>

</style>
