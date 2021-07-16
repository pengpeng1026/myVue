import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      // children:[
      //   {
      //     path:'news',
      //     component:News
      //   }
      // ]
    },
    {
      path:'/about',
      component:About,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'detail',
              component:Detail
            }
          ]
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})