(() => {
  // ts中的函数


  // js中的函数

  // 命名函数
  function f1(x: number, y: number): number {
    return x + y
  }
  // 匿名函数
  const f2 = function (x: number, y: number): number {
    return x + y
  }

  // 函数类型
  // let 变量: 类型 = 值

  let f3: (x: number) => void = function (x: number): void {
    console.log('值是:', x)
  }

  // 例子
  let f4: (x: number, y: number) => string = function (x: number, y: number): string {
    return '哈哈' + x + y
  }
  console.log(f4(10, 20))

  // 函数的可选参数和默认参数
  // 函数中的参数可以设置默认值,如果一个参数有了默认 值之后,name该函数调用的时候,这个参数可以传值,也可以不用传值
  // 如果一个函数中的参数没有设置默认值,但是设置了可选参数 y?: string 那么此时该参数也是可传可不传值的,
  // 但是这个参数的默认值默认是undefined
  function f5(x: number = 10, y?: string): void {
    console.log(x)
    console.log(y)
  }
  f5()


  // 可选参数和默认参数的例子

  function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }

  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())


  // 剩余参数

  function f6(str: string, ...args: number[]): void {
    console.log(str)
    console.log(args)
  }

  f6('哈哈', 10, 20, 30, 40, 50)


  console.log('=================')
  // 函数的重载:函数的名字 相同  但是函数的参数(形参)个数不同
  // function f7(x: number, y: number): void
  // function f7(x: string, y: string): void 

  // function  f7(x: number|string, y: number|string){

  // }

  // 需求:函数中有 两个参数,要么都是number类型的数据,要么都是string类型的数据,返回值要么是number,要么是string


  //  定义函数重载
  // function add(x: string, y: string): string
  // function add(x: number, y: number): number
  // // 定义 一个函数
  // function add(x: string | number, y: string | number): number | string {
  //   // return 100
  //   // return ''
  //   //判断
  //   if (typeof x === 'string' && typeof y === 'string') {
  //     return x + y
  //   } else if (typeof x === 'number' && typeof y === 'number') {
  //     return x + y
  //   }

     
  // }

  // // add(100, 200) // 我想要的
  // // add(100, '真好')
  // // add('真香', 200)
  // // add('真好', '真香') // 我想要的

  // console.log(add(100, 200))
  // console.log(add('真好', '真香'))


})();