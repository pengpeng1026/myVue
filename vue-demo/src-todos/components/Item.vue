<template>
  <li @mouseenter='handleEnter(true)' @mouseleave="handleEnter(false)" :style='{background:bgColor}'>
    <label>
      <input type="checkbox" v-model='todo.isDone'/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDelete" >删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo:Object,
    deleteTodo:Function,
    index:Number
  },
  data(){
    return {
      bgColor:'#fff',
      isShow:false
    }
  },
  methods: {
    handleEnter(isEnter){
      if(isEnter){
        this.bgColor = '#ccc';
        this.isShow = true;
      }else{
        this.bgColor = '#fff';
        this.isShow = false;
      }
    },
    handleDelete(){
      if(window.confirm("Are you sure")){
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
