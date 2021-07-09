<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :updataTodo='updataTodo'/>
      <List :todos='todos' :deleteTodo='deleteTodo'/>
      <Footer :todos='todos' :allCheck='allCheck' :deleteDone='deleteDone'/>
    </div>
  </div>
  
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return {
      todos: [
        {id: '1', title: '吃饭',isDone: true},
        {id: '2', title: '睡觉',isDone: false},
        {id: '3', title: '喝酒',isDone: false},
        {id: '4', title: '唱歌',isDone: true},
      ]
    }
  },
    // 数据在哪个组件，更新数据的行为（函数）就在哪个组件
  methods:{
    updataTodo(todo){
      this.todos.unshift(todo);
    },
    // 删除一个todo，通过索引删除
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    allCheck(isAllCheck){
      this.todos.forEach(todo => todo.isDone = isAllCheck)
    },
    deleteDone(){
      this.todos = this.todos.filter(todo => !todo.isDone)
    }
  },
  components:{
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

