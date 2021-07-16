<template>
  <div>
    <ul>
      <li>price:{{price}}</li>
      <li>ID:{{$route.params.id}}</li>
      <li>TITLE:{{detail.title}}</li>
      <li>CONTENT:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
const info = [
  {id: 1, title: 'Message00001', content: 'Message Content001'},
  {id: 2, title: 'Message00003', content: 'Message Content003'},
  {id: 3, title: 'Message00005', content: 'Message Content005'},
]
export default {
  name: 'MessageDetail',
  props:['id','name','title','price'],
  data(){
    return {
      detail:{}
    }
  },
  mounted () {
    // console.log('mounted')
    // 根据id请求获取详情对象
    this.updateUI(this.$route)
  },
  methods:{
    updateUI(route){
      const id = route.params.id*1
      setTimeout(() => {
        const detail = info.find(item => item.id===id)
        this.detail = detail
      }, 100)
    }
  },
  // 监视$route的改变
  watch:{
    $route(value){
      this.updateUI(value)
    }
  },
}
</script>

<style scoped>

</style>
