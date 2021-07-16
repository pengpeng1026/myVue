<template>
  <div>
    <p>click {{counter}} times,counter is {{evenOrOdd}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  name: 'App',
 
  methods:{
    ...mapMutations(['increment','decrement']),
    ...mapActions(['incrementIfOdd','incrementAsync'])
  },
  computed:{
    ...mapState(['counter']),
    ...mapGetters(['evenOrOdd'])
  }
}
</script>

<style scoped>

</style>
