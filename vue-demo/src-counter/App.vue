<template>
  <div>
    <p>click:{{count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods:{
    /* increment(){
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
    }, */
    ...mapActions(['incrementIfOdd','incrementAsync']),
    ...mapMutations(['increment','decrement'])
  }
}
</script>

<style scoped>

</style>
