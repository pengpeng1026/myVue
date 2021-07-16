import Vue from 'vue'
import App from './App'
import store from './store'
new Vue({
  render:h => h(App),
  store  //这样所有的组件都可以通过$store访问到store 对象的内容
}).$mount('#app')