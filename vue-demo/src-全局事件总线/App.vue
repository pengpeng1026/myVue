<template>
  <div>
    <Demo />
    <Demo2 />
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import Demo2 from './components/Demo2.vue'
export default {
  name: 'App',
  components:{
    Demo,
    Demo2
  },
  methods:{
    log(num){
      console.log(111 + num);
    }
  },
  mounted(){
    this.$eventBus.$on('aaa',this.log)
  }
}
</script>

<style scoped>

</style>
