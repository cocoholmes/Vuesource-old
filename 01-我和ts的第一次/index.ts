// 第一次书写ts代码
(() => {
  // 定义一个函数,str的参数的类型应该是string类型
  function showMsg(str: string) {
    console.group(str)
  }
  // 定义变量
  let msg = '阿内哈谁有'
  // 调用函数,传参数,参数的类型必须是string
  showMsg(msg)
  // ts最终会编译成js的文件,不是说ts编译出了错误,对应 的js文件就不能正常的使用 了
  // let num = 100
  // showMsg(num)
})();