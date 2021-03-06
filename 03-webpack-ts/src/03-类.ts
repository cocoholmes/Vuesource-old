(() => {
  // 类

  // // 定义一个 普通的类
  // class Product {
  //   //声明属性----定义 属性
  //   name: string
  //   color: string
  //   price: number
  //   //构造函数:为了实例化对象的时候,可以直接把对象中的属性进行初始化的操作
  //   constructor(name: string, color: string, price: number) {
  //     this.name = name
  //     this.color = color
  //     this.price = price
  //   }
  //   // 定义 方法
  //   showProduct(): void {
  //     console.log(`当前的商品是:${this.name},颜色是:${this.color},价格是:${this.price}`)
  //   }
  // }

  // // 实例化对象 
  // let pro: Product = new Product('华为手机', '绿色', 1980)
  // // 对象调用方法
  // pro.showProduct()
  // // 方法是在原型对象 上的
  // console.dir(pro)


  // // 继承 :类与类之间的关系,有了继承之后,目的:为了实现多态,
  // // 类与类之间一旦有了继承关系之后, 类的叫法也会改变, A类和B类之间继承了, 如:A类继承B类,A---子类(派生类),B---父类(基类)
  // // 什么情况下,类和类之间会产生继承关系?
  // // 对象---抽取出类----->多个类----->抽取基类---->抽取派生类
  // // 分析对象--->抽取出对象的特征(属性)和行为(方法),要想具体的创建出一个对象(实例化)，那么需要先有类,根据之前的分析
  // // 写代码的过程----> 先定义一个类(中有属性 和方法)， 通过new 的方式创建一个对象
  // // 学生类---->姓名,性别,年龄,-----属性---成绩     吃饭,睡觉 ----方法---学习的方法
  // // 人类----->姓名,性别,年龄,-----属性     吃饭,睡觉 ----方法
  // // 人类是一个大的类别,学生类是人类中的一个小的类别-----可以产生继承的关系
  // // 老师类--->姓名,性别,年龄,-----属性-工资     吃饭,睡觉 ----方法---玩的方法
  // // 通过分析: 类和类之间 有没有类似的属性或者方法,最终抽取出一个父级的类,从而实现 继承

  // // 定义一个父类---基类

  // class Person {
  //   // 声明属性---定义属性
  //   name: string
  //   age: number
  //   // 定义构造函数
  //   constructor(name: string, age: number) {
  //     this.name = name
  //     this.age = age
  //   }
  //   // 定义个方法
  //   sayHi(): void {
  //     console.log('=====')
  //     console.log('您好啊')
  //   }

  // }

  // // 定义一个学生类---派生类(子类)----此时和Person类有了继承关系
  // class Student extends Person {
  //   // 声明属性
  //   score: number
  //   // 定义构造函数
  //   constructor(name: string, age: number, score: number) {
  //     // 使用父类中 的构造函数来进行属性 的初始化操作
  //     super(name, age)
  //     this.score = score
  //   }
  //   // 在子类中可以定义方法和父类中的方法重名,内部可以重写父类方法中的内容
  //   sayHi(): void {
  //     // 子类的方法中调用父类的方法
  //     super.sayHi()
  //     console.log('我是学生,您好啊')
  //   }
  //   // 自己的方法
  //   study() {
  //     console.log('每天都要写代码,好开心啊')
  //   }
  // }


  // // 实例化对象
  // let stu: Student = new Student('小甜甜', 20, 100)
  // stu.sayHi()
  // stu.study()



  // // 多态的例子:
  // // 多态:同一个行为针对不同 的对象,产生 的结果是不同的

  // // 父类Animal
  // class Animal {
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   // 方法
  //   eat() {
  //     console.log('我喜欢吃好吃的')
  //   }
  // }

  // // 子类Dog
  // class Dog extends Animal {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   // 自己的方法
  //   play() {
  //     console.log('我喜欢玩')
  //   }
  //   //  重写父类中的方法
  //   eat() {
  //     console.log('我喜欢吃沾满臭豆腐榴莲汁的大骨头')
  //   }
  // }

  // // 子类Pig
  // class Pig extends Animal {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   // 自己的方法
  //   run() {
  //     console.log('我是猪猪我要跑起来')
  //   }
  //   //  重写父类中的方法
  //   eat() {
  //     console.log('我喜欢吃泥巴')
  //   }
  // }

  // // 子类Horse
  // class Horse extends Animal {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   // 自己的方法
  //   sleep() {
  //     console.log('我是小马马,喜欢站着睡觉')
  //   }
  //   //  重写父类中的方法
  //   eat() {
  //     console.log('我喜欢吃亲亲的小草')
  //   }
  // }


  // // Animal父类, Dog/Pig/Horse ---子类

  // // 实例化对象
  // // let ani: Animal = new Animal('动物')
  // // let dog: Dog = new Dog('大黄')
  // // let pig: Pig = new Pig('八戒')
  // // let horse: Horse = new Horse('的卢')
  // // 调用方法
  // // ani.eat()
  // // dog.eat()
  // // dog.play()

  // // pig.eat()
  // // pig.run()

  // // horse.eat()
  // // horse.sleep()




  // // 重新定义个对象
  // let ani: Animal = new Animal('动物')

  // // 可以的
  // let dog: Animal = new Dog('大黄')
  // let pig: Animal = new Pig('八戒')
  // let horse: Animal = new Horse('的卢')
  // // 不行的
  // // let f:Dog = new Animal('动物')
  // // 调用的绝对是自己的eat方法
  // // dog.eat()
  // // pig.eat()
  // // horse.eat()


  // // 工厂的设计模式的体现
  // // 多态的展示的效果
  // // 定义一个 数组,里面用来存储Animal类型的对象数据
  // let arr: Animal[] = [dog, pig, horse]
  // function showEat(ani: Animal) {
  //   ani.eat()
  // }
  // // 循环遍历数组
  // for (let i = 0; i < arr.length; i++) {
  //   showEat(arr[i])
  // }

  // // 多态----设计模式的书籍 -----更好的学习面向对象的编程思想---后台语言做铺垫









  // // 类中成员的修饰符
  // // 类中的成员: 属性和方法
  // // 父类--基类
  // class Animal2 {
  //   // 声明的属性,默认有 一个修饰符, 是public,所以,任何地方都可以访问这个属性
  //   // public 修饰符---任意的地方都可以访问该修饰符 修饰的属性
  //   // private 修饰符---私有的,只能在本类中使用
  //   // public name: string
  //   // private name: string
  //   // readonly关键字可以修饰属性,表示的是属性不能被修改了
  //    public readonly name: string
  //   // protected name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   sayHi(msg: string) {
  //     console.log(msg)
  //   }
  // }

  // // 子类
  // class Dog2 extends Animal2 {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   eat(msg: string) {
  //     // 子类的方法中也可以访问父类中的name属性---ppublic修饰的
  //     // 子类中是不能够访问父类中的name属性的--private修饰的
  //     console.log(msg,this.name)
  //   }
  // }
  // // 子类的子类---孙子类---哈士奇也是狗
  // class Husky extends Dog2 {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   // 孙子类中的也可以访问爷爷类中的name属性
  //   play(msg: string) {
  //     // 同上
  //     console.log(msg,this.name)
  //   }
  // }
  // // 父类Animal2---->Dog2---->Husky

  // let ani2:Animal2 = new Animal2('强哥')
  // // 外部可以直接访问Animal2中 的name属性
  //  console.log(ani2.name)
  // //  ani2.name = '渊哥'
  //  console.log(ani2.name)

  // let dog2:Dog2 = new Dog2('大黄')
  // dog2.eat('哈哈')

  // let h2:Husky = new Husky('大黑')
  // h2.eat('嘎嘎')

  // console.log('==========')
  // // 存取器
  // class User{
  //   //  声明属性
  //   firstName:string // 姓氏
  //   lastName:string // 名字 
  //   // 属性成员可以设置默认值
  //   // 属性前面使用了static进行修饰后,就是静态属性,静态成员是给类对象使用(User.gender这么来使用)
  //   static gender :string = '男' 
  //   // 构造函数
  //   constructor(firstName:string,lastName:string){
  //     this.firstName = firstName
  //     this.lastName = lastName
  //   }
  //   // 存取器---针对姓名 
  //   get fullName(){
  //     console.log('get方法执行了')
  //     return this.firstName + '_' + this.lastName
  //   }
  //   set fullName(val:string){
  //     console.log('set方法执行 了')
  //     const names = val.split('_')
  //     this.firstName = names[0]
  //     this.lastName = names[1]
  //   }


  // }

  // let user:User = new User('东方','不败')
  // // 显示姓名
  // console.log(user.fullName) // 此时只有set,没有get,但是没有报错,原因:ts本质是js,对象没有这个属性,点了,就有 了
  // user.fullName = '诸葛_孔明'  // 赋值的时候,注意,名字中有个_ 按照上面的截取才这么写的
  // console.log(user.firstName)
  // console.log(user.lastName)

  // // 总计 存取器: 如果某个属性成员只有get方法,没有set方法,那么此时该属性只能读取,不能赋值
  // // 如果某个属性成员,只有set方法,没有get方法,那么此时该属性只能设置值,不能获取值
  // // 有了存取器可以更好的 控制属性成员值的操作

  // console.log(User.gender)





  console.log('=============')
  // 抽象类:抽取出来的一个 类,这个类的作用,是为了子类服务的,该类中可以有实例的成员,也可以有抽象的成员
  // 抽象是一个概念,理论的,无法描述具体的一个事物
  //  吃---行为
  // 抽象类中可以有实例方法的实现,可以有实例属性---实例对象调用的属性
  // 抽象类不能实例化的,是为了让某些子类来继承的,再调用内部的方法或者成员
  // 抽象类中可以有抽象成员,目的是为了让子类去实现
  // 子类是一个 抽象类,继承自一个 抽象类的父类,那么该子类可以不用实现这个父类中的抽象成员


  // 定义一个动物的抽象类
  abstract class Animal { //  动物
    // 方法中有了具体的代码,或者方法体,那么该 方法就有了具体的实现
    run(): void {
      console.log('都 跑起来了')
    }
    // 抽象方法
    abstract eat(): void
    // color: string = '绿色'
    // // 抽象属性
    // abstract gender: string

  }

  // let ani:Animal = new Animal()

  class Dog extends Animal { // 狗
    eat(): void {
      console.log('就喜欢吃骨头')
    }
    gender: string = '雌'
  }

  let dog: Dog = new Dog()
  dog.run()
  dog.eat()
  //console.log(dog.color)
  //console.log(dog.gender)



  // Pig类
  abstract class Pig extends Animal{

  }

})();