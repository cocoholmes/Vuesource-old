(() => {
  // 测试一个函数,void 代表的是没有返回值
  function showMsg(msg: string): void {
    console.log(msg)
  }
  // 定义变量
  let str = '床前明月光,勇哥去开窗,遇到一耳光,牙齿掉光光'
  // 类型注解:书写ts代码 的时候,参数/变量都有 自己的类型,
  // 调用 函数传递参数的时候,参数的 智能提示信息就会帮助我们书写代码
  showMsg(str)


  console.log('================')

  // 需求:调用函数的时候,传入的参数必须有 firstName属性和lastName属性
  // 先定义一个接口
  interface Person {
    firstName: string
    lastName: string
  }
  // 定义一个函数,参数person的类型是Person
  function showPerson(person: Person) {
    console.log(person.firstName + '_' + person.lastName)
  }

  // 最后定义一个对象
  let per = {
    firstName: '东方',
    lastName: '勇哥',
    color: 'green'

  }

  //  调用函数
  showPerson(per)
  // 总结:js中没有接口,无法通过接口限定函数中传入的参数的具体的类型及限制参数中可以有什么属性,而且ts中有智能提示


  // 创建类---User

  // class User{
  //   // 先定义属性
  //   name:string
  //   age:number
  //   // 构造方法:实例化对象的时候 可以对对象中的属性进行 初始化操作
  //   constructor(name:string,age:number){
  //     this.name = name
  //     this.age = age
  //   }
  // }

  // // 实例化对象
  // let u :User = new User('小明',20)
  // console.log(u)



  class User {
    // 先定义属性
    firstName: string
    lastName: string
    // 构造方法:实例化对象的时候 可以对对象中的属性进行 初始化操作
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  // ts中有类型 的推断
  // 实例化对象
  let u: User = new User('东方', '小强强')
  showPerson(u)
})();