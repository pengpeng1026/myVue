<template>
  <div>
    <p>count {{count}} times is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">+ if odd</button>
    <button @click="incrementAsync">+ async</button>
  </div>
</template>

<script>
  
  export default {
    name: 'App',
    /* data(){
      return {
        count:this.$store.state.count
      }
    } */
    computed:{
      count(){
        return this.$store.state.count
      },
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }
    },
    methods:{
      increment(){
        this.$store.commit('increment')
      },
      decrement(){
        this.$store.commit('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style scoped>
  
</style>
