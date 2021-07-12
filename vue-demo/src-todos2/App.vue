<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :newTodo="newTodo" />
      <List :todos="todos" :tipCheck="tipCheck" :deleteTodo="deleteTodo" />
      <Footer
        :todos="todos"
        :allCheck="allCheck"
        :deleteAllCheck="deleteAllCheck"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  // 如果一个数据多个组件都要使用，就将这个数据放在他们共同的父组件中
  data() {
    return {
      todos: [
        /* {id:'01',tips:'吃饭',isDone:false},
        {id:'02',tips:'睡觉',isDone:true},
        {id:'03',tips:'洗脚',isDone:false},
        {id:'04',tips:'按摩',isDone:false}, */
      ],
    };
  },
  mounted() {
    // 模拟异步加载得到todos数据
    setTimeout(() => {
      this.todos = JSON.parse(localStorage.getItem("todos_key")) || [];
    }, 2000);
  },
  watch:{
    todos:{
      handler (value) {
          // console.log('handler', value)
          // 将todos保存localStorage中 (必须保存json格式)
          localStorage.setItem('todos_key', JSON.stringify(value))
        },
        deep: true, // 深度监视 ==> 数组内部的对象内部数据变化都会触发
    }
  },
  // 数据在哪里，修改数据的行为（函数）就在哪里
  methods: {
    // 修改是否已完成
    tipCheck(index) {
      this.todos[index].isDone = !this.todos[index].isDone;
    },
    // 删除todo
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    // 新增todo
    newTodo(todo) {
      this.todos.unshift(todo);
    },
    // 当全选或者全不选
    allCheck(isCheck) {
      this.todos.forEach((todo) => {
        todo.isDone = isCheck;
      });
    },

    // 删除所有选中
    deleteAllCheck() {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
};
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
