<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/about/message/detail/?id=${message.id}`" >{{message.title}}</router-link>
        <button @click="pushShow(message)">push查看</button>
        <button @click="replaceShow(message)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
    return{
      messages:[
        {id:1,title:'hello vue'},
        {id:2,title:'hello react'},
        {id:3,title:'hello angular'},
      ]
    }
  },
  methods:{
    pushShow(message){
      this.$router.push(`/about/message/detail/?id=${message.id}`)
    },
    replaceShow(message){
      this.$router.replace(`/about/message/detail/?id=${message.id}`)
    }
  }
}
</script>

<style scoped>

</style>
