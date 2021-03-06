(() => {
  // 泛型

  // 需求:调用函数,传入一个数据(第一个参数)10 ,
  // 第二个参数 :传入的是 个数的数据(长度)3,最终函数调用的时候，数组中的数据就是一个参数值
  // 有一个函数,调用之后,会产生一个数组,  [10,10,10]
  // 数组中的数据,随时可以调用该数据类型对应的方法来使用
  // function getArr(str: string | number, count: number): any[] {
  //   // 定义一个空格数组
  //   const arr: any[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(str)
  //   }
  //   return arr
  // }

  // console.log(getArr(100, 5))
  // console.log(getArr('嘎嘎', 5))
  // // 缺陷,智能的 提示信息没有了
  // const arr1 = getArr(100.12345, 3)
  // console.log(arr1)
  // console.log(arr1[1].toFixed(3))
  // const arr2 = getArr('哈哈,我又变帅了,真开心', 3)
  // console.log(arr2)
  // console.log(arr2[0].substring(2))


  // 总结,上面的代码并不能真正的满足 最开始提出的需求
  // 泛型,函数在定义的时候,通过泛型,不具体的指定参数及返回值的类型,而是在使用函数(调用)的时候再确定参数及 返回值的类型

  function getArr2<T>(str: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(str)
    }
    return arr
  }

  // 调用
  const arr1 = getArr2<number>(100.1234567, 3)
  const arr2 = getArr2<string>('abcdefg', 5)

  console.log(arr1[0].toFixed(3))
  console.log(arr2[1].substring(4))


  // 定义多个泛型参数的函数
  function f1<T, K, V>(x: T, y: K, z: V): void {

    let result = x + ':' + y + ':' + z
    console.log(result)
  }

  // 调用
  f1<string, number, boolean>('a', 10, true)



  // 泛型接口

  // 需求:创建对象的时候,调用对应的方法,可以实现某一类类的信息的添加操作,或者查询操作







  // 定义一个泛型接口,用来约束工具类中的方法或者存储数据的方式
  // interface BaseCRUD<T> {
  //   // 限定存储数据的容器的类型
  //   // data是数组, T---类型, T-->string---->data中存储的就是string类型的数据,T---number--->data中存储的就是number类型数据
  //   data: T[]
  //   // 增加数据的方法 
  //   add(user: T): number
  //   // 查询数据的方法
  //   getById(id: number): T
  // }



  // // 用户类
  // class User {
  //   // 声明属性
  //   id: number = 1
  //   name: string
  //   age: number
  //   // 构造函数
  //   constructor(name: string, age: number) {
  //     this.name = name
  //     this.age = age
  //   }
  // }

  // // 针对于用户类操作数据的类
  // class UserCRUD implements BaseCRUD<User> {
  //   // 定义属性
  //   data: User[] = []

  //   // 添加User类型对象的方法
  //   add(user: User): number {
  //     let obj = {
  //       id: Date.now() + Math.random(),
  //       name: user.name,
  //       age: user.age

  //     }
  //     // 把obj对象添加到data数组容器中
  //     this.data.push(obj)
  //     return obj.id
  //   }
  //   getById(id: number): User {
  //     return this.data.find(item => item.id === id)
  //   }

  // }

  // // 实例化一个工具类的对象 
  // const uc: UserCRUD = new UserCRUD()
  // // 调用添加对象的方法
  // uc.add(new User('小明', 20))
  // let userId:number = uc.add(new User('小甜甜', 21))
  // uc.add(new User('小红', 22))
  // console.log(uc.data)
  // const  user = uc.getById(userId)
  // console.log(user)








  // 需求:创建对象的时候,调用对应的方法,可以实现某一类类的信息的添加操作,或者查询操作

  // 工具类 ---->实例化的操作---->对象----->obj.add(学生对象)--->添加对象的

  // 接口
  interface BaseCRUD<T> {
    // data属性应该存储的是T这种类型的数据
    data: T[]
    add(t: T): number
  }
  // 学生类
  class Student {
    // 声明属性
    id: number = 1
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }
  // 实例化学生对象
  let stu1 = new Student('小明', 20)
  let stu2 = new Student('小明', 20)

  // 老师类
  class Teacher {
    teaId: number = 1
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }
  // 工具类
  class UtilCRUD implements BaseCRUD<Student> {
    data: Student[] = []
    add(stu: Student): number {
      return 100
    }
    // data: Student[] = []
    // // 添加对象数据的同时可以返回对象的id
    // add(stu: Student): number {
    //   let obj = {
    //     id: Date.now() + Math.random(), // id自动生成
    //     name: stu.name,
    //     age: stu.age

    //   }
    //   // 传入进来的每个stu对象存储起来了
    //   this.data.push(obj)
    //   return obj.id
    // }
    // // 查询的方法
    // getStuById(id: number): Student {
    //   return this.data.find((item) => item.id === id) || new Student('', 0)
    // }
  }

  // 工具类的对象
  let uc = new UtilCRUD()
  uc.add(stu1)
  uc.add(stu1)
  uc.add(stu1)


  // ==========
  // let t1: Teacher = new Teacher('强哥', 47)
  // let uc2:UtilCRUD = new UtilCRUD()
  // uc2.add(t1) // 报错


  console.log('========')

  // 泛型类

  class ChangeNum<T>{
    // 默认值的属性声明
    defaultValue: T
    addAge(x: T, y: T): string {
      return '测试' + x + y
    }
    // 构造函数--不一定是必须的
    // constructor(defaultValue:number){
    //   this.defaultValue = defaultValue
    // }
  }
  // 需求:想要赋值什么类型的数据,就可以直接操作这个类型的数据
  // let p = new ChangeNum()
  // p.defaultValue = 100
  // console.log(p.defaultValue)
  // console.log(p.addAge(10, 20))

  let c1 = new ChangeNum<number>()
  c1.defaultValue=100
  c1.addAge(10,20)

  let c2 = new ChangeNum<string>()
  c2.defaultValue='abc'
  c2.addAge('1','2')




  console.log('=======')


  // 泛型约束
  // 需求:调用函数,传入数据,可以获取该数据的长度
  // function getLength(str:string|number):number{
  //   // return str.length
  //   return str.toString().length
  // }

  // console.log(getLength('abcd'))
  // console.log(getLength(100))

  // 此时函数调用的时候可以直接设置泛型的类型,从而,str参数的类型 就被指定了
  // 但是,str参数是T这种泛型,T这种泛型中有lenth这个属性吗,没有

  // 泛型约束:通过接口的方式来约束泛型,如:函数调用传入的数据的约束
  // 定义接口,接口首字母都是大写的
  interface StrLength{
    length:number
  }
  function getLength<T extends StrLength>(str:T):number{
    return str.length
   
  }
  let result1 = getLength<string>('abcdefg')
  console.log(result1)

  // number类型的数据,是没有length这个属性,下面的代码就不满足上面的泛型约束的条件
  //  let result2 = getLength<number>(100)




})();