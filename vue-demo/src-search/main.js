import Vue from 'vue'
import App from './App'

new Vue({
  beforeCreate(){
    Vue.prototype.$eventBus = this
  },
  render : h => h(App)
}).$mount('#app')