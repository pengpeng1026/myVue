import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  render : h => h(App),
  router   //路由器对象，其他所有路由组件可以通过$router访问到该对象
}).$mount('#app')