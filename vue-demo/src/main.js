import Vue from 'vue'
import App from './App'
// 去掉控制台警告提示
Vue.config.productionTip = false
new Vue({
  render:h => h(App)
}).$mount('#app')