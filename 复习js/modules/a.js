// 默认暴露
export default function add(){
  console.log(100);
}
// 分别暴露
export const a = 123
export function fn(){
  console.log(333);
}

// 统一暴露
const a = 123;
function fn(){
  console.log('sss');
}
export {a, fn}
