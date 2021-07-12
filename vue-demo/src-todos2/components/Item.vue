<template>
  <li @mouseenter="handleEnter" @mouseleave="handleLeave" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.isDone" @click="toggle"/>
      <span>{{todo.tips}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="cutTodo">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:{
    todo:Object,
    index:Number,
    tipCheck:Function,
    deleteTodo:Function
  },
  data(){
    return {
      bgColor:'#fff',
      isShow:false,
    }
  },
  methods:{
    handleEnter(){
      this.bgColor = '#ccc'
      this.isShow = true
    },
    handleLeave(){
      this.bgColor = '#fff'
      this.isShow = false
    },
    toggle(){
      this.tipCheck(this.index)
    },
    cutTodo(){
      if(window.confirm('确定删除？')){
        this.deleteTodo(this.index)
      }
    }
  }
};
</script>
  
<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
