import Vue from 'vue'
import App from './App'

// 全局事件总线
new Vue({
  beforeCreate(){
    Vue.prototype.$eventBus = this
  },
  render:h => h(App)
}).$mount('#app')