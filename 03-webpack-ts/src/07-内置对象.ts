(()=>{
  /* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/   // 正则表达式      
let e: Error = new Error('error message')
// 这个是可以的
b = true

// 注意的问题
// let bb: boolean = new Boolean(2)  // error



// DOM和BOM

const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
// 文档碎片
const fragment: DocumentFragment = document.createDocumentFragment()
})();