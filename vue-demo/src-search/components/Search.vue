<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="name"/>
      <button @click="sendName">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return {
      name:''
    }
  },
  methods:{
    sendName(){
      this.$eventBus.$emit('test',this.name)
    }
  }
}
</script>

<style scoped>

</style>
