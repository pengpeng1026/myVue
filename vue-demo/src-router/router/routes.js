// 路由的懒加载，需要用到的时候才加载
// import Home from '../pages/Home'
const Home = () => import('../pages/Home')
// import About from '../pages/About'
const About = () => import('../pages/About')
// import News from '../pages/News'
const News = () => import('../pages/News')
// import Message from '../pages/Message'
const Message = () => import('../pages/Message')
// import MessageDetail from '../pages/MessageDetail'
const MessageDetail = () => import('../pages/MessageDetail')
export default [
  {
    name:'Home',
    path:'/home',
    component:Home,
    children:[
      {
        name:'News',
        path:'news',
        component:News
      },
      {
        name:'Message',
        path:'message',
        component:Message,
        children:[
          {
            name:'MessageDetail',
            path:'detail/:id',
            component:MessageDetail,
            // 给路由组件传入数据的三种方式
            // 通过props传递参数时，对应的路由组件必须要声明接收后才可以使用
            // props:true  方式一，传递parmas参数
            // props:{id:'3030',name:'ruoyan'}方式二，通过对象传递，但是只能传递自定义的属性
            // 方式三，最常用的使用函数传递，函数的参数是route，指向的是当前路径所在的路由对象，可以传递params参数，query参数和自定义数据
            props:route => ({id:route.params.id,title:route.query.title,price:30000})
          }
        ]
      }
    ]
  },
  {
    name:'About',
    path:'/about',
    component:About,
    
  },
  {
    path:'/',
    redirect:'/home'
  }
]