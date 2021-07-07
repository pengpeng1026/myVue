/* 
Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
  1. 如果插件是对象, 对象必须要有一个install方法
  2. 如果插件是函数, 将这个函数当作install方法对待
*/
(() => {
  const MyPlugin = {}

  MyPlugin.install = function (Vue, options) {
    console.log('install')

    // Vue的静态方法
    Vue.myGlobalMethod = function () {
      console.log('myGlobalMethod()')
    }
  
    // 定义全局指令
    Vue.directive('my-directive', (el, binding) => {
      el.innerHTML = binding.value + '--------'
    })
  
    // 给vm定义方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }

  window.MyPlugin = MyPlugin
})()
/* (() => {
  const MyPlugin = function(Vue, options) {
    // 定义Vue的静态方法
    Vue.MyGlobalMethod = function(){
      console.log('MyGlobalMethod');
    }
    // 定义全局指令
    Vue.directive('my-rective',(el, binding) => {
      el.innerHTML = binding.value + 'peng'
    })
    // 给vm定义方法
    Vue.prototype.$myMethod = function(){
      console.log('vm.myMethods');
    }
  }
  window.MyPlugin = MyPlugin
})() */