<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allSelect"/>
    </label>
    <span>
      <span>已完成{{doneSize}}</span> 
      / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    todos:Array,
    allCheck:Function,
    deleteDone:Function
  },
  methods: {
    clearDone(){
      if(window.confirm("Are you sure")){
        this.deleteDone();
      }
    }
  },
  
  computed: {
    doneSize(){
      return this.todos.reduce((pre,todo) => pre + (todo.isDone ? 1 : 0),0)
    },
    allSelect:{
      get(){
        return this.todos.length === this.doneSize
      },
      set(value){
        this.allCheck(value)
      }
    },
    
  },

}
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
