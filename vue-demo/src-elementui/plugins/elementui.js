import Vue from 'vue';
// import ElementUI from 'element-ui';按需引入就可以不用全部引入语法
// import 'element-ui/lib/theme-chalk/index.css'; 可以不用引入全部的css样式
// 声明使用（安装）elementui
// Vue.use(ElementUI)
import {Button,Switch,Slider,Steps,Step} from 'element-ui'

Vue.component(Button.name, Button);
Vue.use(Switch)
Vue.use(Slider)
Vue.use(Steps)
Vue.use(Step)

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

