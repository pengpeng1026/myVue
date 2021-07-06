// 默认暴露对应的引入方式
import add from './a'

// 分别暴露对应引入方式
import a from './a'
import fn from './a'

// 统一暴露对应引入方式
import {a,fn} from "./a"
console.log(a);
fn();
// 由于ES6的模块暴露和引入在node环境中无法运行，因此需要安装Babel插件，或者更换commonJS 语法