(() => {
  // 接口: 是一种约束,一种限制,一种类型,是一种能力,可以限制对象的 类型 针对对象的属性或者方法进行一个描述
  // 接口: 其实就是一种限制,可以限制对象中有什么样的属性或者方法


  // 例子:体会接口
  // 人的这个对象中的属性是有一些约束的

  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // gender是string类型, 可以没有


  // 如何来约束下面的这对象中的属性呢,使用接口
  // 定义一个接口
  // 有的时候,为了方便其他的程序员可以清楚的阅读代码中的名字的含义,所以,定义的接口,名字可以使用I开头
  // 方便阅读代码,接口名字可以以I开头
  interface IPerson {
  }



  interface Person {
    // 只读的
    readonly id: number
    name: string
    age: number
    //  ? 可有可无
    gender?: string
  }
  // 接口定义后,可以当成类型来使用,如果某个对象的类型是当前的这个接口,那么这个对象中的属性及方法必须符合定义的接口
  // 定义一个对象
  let person: Person = {
    id: 1,
    name: '小强强',
    age: 20,
    gender: '女'
  }
  // 此时的id外部 是 可以重新赋值修改的
  // person.id = 100
  console.log(person.id)


  console.log('==============')

  // 函数类型  ,通过 接口可以限制函数的类型
  // let---关键字  num---变量名字  number---变量的类型  =---赋值符号  10----值
  // let num: number = 10

  // 定义一个接口,用来限制某个函数变量的类型
  interface ISearch {
    // 限制了某个函数的类型
    (x: number, y: string): string
  }

  //  定义一个函数   let fn:类型 = 值
  let fn: ISearch = function (x: number, y: string): string {
    console.log('调用啦')
    return x + y
  }

  // fn是什么--->变量,引用变量,函数,对象,函数对象
  console.log(fn(100, '真香'))

  // 接口可以作为 类 的 类型使用 

  // 定义一个 接口 
  interface IFly {
    fly(str: string): void
  }
  // 定义一个类
  // 理解 方式1:当前的User类的类型是IFly类型的
  // 理解 方式2:接口限定了当前的这个类中必须要有接口中定义的内容
  class User implements IFly {
    //  定义 属性
    name: string
    age: number
    // 构造方法(构造函数)
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    // 定义个方法
    sayHi() {
      console.log('哭了挖接口 迪斯噶')
    }
    // 实现接口中定义的方法 
    fly(str: string): void {
      console.log(str + '飞了')
    }
  }

  // 实例化对象,并初始化
  let u: User = new User('强哥', 20)
  u.sayHi()
  u.fly('小明')

  // 类可以同时使用多个接口,类的类型通过接口来限制,可以有多个的接口类型
  // 类可以实现多个接口

  // 定义一个接口
  interface ISwim {
    swim(str: string): void
  }
  // 定义一个类
  class User2 implements IFly, ISwim {
    name: string
    constructor(name: string) {
      this.name = name
    }
    // 实现 的是IFly接口中的方法
    fly(str: string): void {
      console.log('我会飞了 ' + str)
    }
    // 实现 的是ISwim接口中的方法
    swim(str: string): void {
      console.log('我会游泳了 ' + str)
    }
  }

  // 实例化对象
  let u2: User2 = new User2('强哥')
  u2.fly('真好')
  u2.swim('真开心')

  // 总结: 接口可以当前是一种能力的限制,在类中使用 的时候,这个类实例化的对象就有 了这个接口的能力了

  // 接口和接口之间 也可以进行继承的操作

  // 定义接口
  interface IFly1 {
    fly(): void
  }
  interface ISwim1 {
    swim(): void
  }
  // 新的接口,用来继承上面的两个接口的
  interface IFlyAndISwim extends IFly1, ISwim1 {

  }

  // 定义一个类,可以同时实现多个接口
  class User3 implements IFlyAndISwim {
    name: string
    constructor(name: string) {
      this.name = name
    }
    fly(): void {
      console.log('飞起来了')
    }
    swim(): void {
      console.log('游起来了')
    }
  }

  let u3: User3 = new User3('渊哥')
  u3.fly()
  u3.swim()
  // 扩展性更强了



})();