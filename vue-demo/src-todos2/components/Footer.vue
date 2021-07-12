<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allOrNone"/>
    </label>
    <span> <span>已完成{{allSeleted}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" v-show="allSeleted > 0" @click="deleteAllSelect">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    todos:Array,
    allCheck:Function,
    deleteAllCheck:Function
  },
  computed:{
    allSeleted(){
      return this.todos.reduce((pre,todo) => pre + (todo.isDone ? 1 :0),0)
    },
    allOrNone:{
      get(){
        return this.allSeleted === this.todos.length
      },
      set(value){
        this.allCheck(value)
      }
    }
  },
  methods:{
    deleteAllSelect(){
      if(window.confirm('确定吗？')){
        this.deleteAllCheck()
      }
    }
  }
};
</script>
  
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
