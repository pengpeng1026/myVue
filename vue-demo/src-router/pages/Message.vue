<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link> -->
        <router-link :to="{name:'MessageDetail',params:{id:message.id}}">{{message.title}}</router-link>
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
    return {
      messages:[
        {id:1,title:'message001'},
        {id:2,title:'message002'},
        {id:3,title:'message003'},
      ]
    }
  },
  methods:{
    pushShow(message){
      this.$router.push(`/home/message/detail/${message.id}`)
    },
    replaceShow(message){
      this.$router.replace(`/home/message/detail/${message.id}`)
    }
  }
}
</script>

<style scoped>

</style>
