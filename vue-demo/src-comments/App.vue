<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <User/>
      <Reply :conments="comments"/>
    </div>
  </div>
</template>

<script>
  import User from './components/User'
  import Reply from './components/Reply'
  export default {
    name: 'App',
    components:{
      User,
      Reply
    },
    data(){
      return {
        comments:[
          {id:'01',username:'jack',content:'sdheufwe'},
          {id:'02',username:'rose',content:'dhrnghekw'},
          {id:'03',username:'dog',content:'rufngnqk'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
