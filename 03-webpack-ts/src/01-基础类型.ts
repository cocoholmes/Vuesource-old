(() => {
  // 测试代码
  // let flag:Boolean = true
  // console.log(flag)

  // 基础类型
  // ts中定义变量的语法:    let/const 变量名字: 类型 = 值

  // 布尔类型
  let flag: boolean = false
  console.log(flag)

  // 数字类型
  let a1: number = 10
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)

  // 反例子:变量是什么类型,就应该赋对应类型的值
  // let num: number = '强哥'
  // console.log(num)

  // 字符串类型
  let str: string = '强哥'
  console.log(str)
  // 字符串和数字类型可以拼接到一起
  let num2: number = 100
  console.log(`${str},${num2}都不给我`)

  // undefined和null累心
  let und: undefined = undefined
  let nll: null = null
  console.log(und, nll)

  // 把null或者undefined 赋值给number类型的变量是可以的 ,
  // 但是,需要吧tsconfig.json文件 中的严格模式去掉(不使用严格模式才可以),重启一下项目
  // let num3: number = null
  // let num4: number = undefined
  // console.log(num3)
  // console.log(num4)

  // 数组类型
  // 语法: let/const 变量名: 类型[] = [值1,值2,值3,....]
  // 定义一个数字类型的数组,里面只能存储数字数据
  let nums: number[] = [10, 20, 30]
  console.log(nums)
  // 通过泛型的方式来定义数组
  let nums2: Array<number> = [100, 200, 300]
  console.log(nums2)

  // 疑问: 目前的数组中的数据的类型 必须是一致的,能否不一致啊

  // 元组类型,可以解决   数组中的数据必须是一致的 这个问题,换句话:有了元组类型,数组中的数据的类型可以不一致
  let t1: [number, string]
  t1 = [100.12312312, '小明好开心啊,真的是酱紫吗']
  // t1 = [10,'强哥']
  // t1 = ['勇哥',100]
  console.log(t1)
  console.log(t1[0].toFixed(2))
  console.log(t1[1].substring(3))


  // 枚举类型
  // enum Gender{
  //   女,
  //   男
  // }
  // 为什么会设计枚举类型,规范数据,性别,星期，枚举类型中的数据,可以是中文的
  // 枚举类型中的值是从0开始的,依次的加1
  // 布尔类型设计性别  true---1 / false ---0

  // 性别 的数据, 请您输入性别!  男  男人 爷们 春哥 阿哥  阿玛 先生 丈夫  老公
  // 女 小姐姐  夫人  妻子 美女   老阿姨 .....
  // 让用户选择性别  请选择性别 男  女 未知
  // 把具有特定个数的数据,且值是固定的情况的 数据  使用枚举类型的方式定义出来

  // let g:Gender =  Gender.女
  // let g2:Gender =  Gender.男
  // console.log(g)
  // console.log(g2)

  // 枚举的值对应的数字值是可以改变的
  // 枚举的值是可以通过索引的方式来访问的(像数组中索引的方式来使用,但不是索引)
  enum Color {
    red = 100,
    green,
    blue
  }

  let c: Color = Color.green
  console.log(c)
  console.log(Color[100])

  console.log('==========')
  // any类型,当一个变量的类型是any,那就意味着该变量中可以存储任意类型的数据
  let s1: any = 100
  console.log(s1)
  s1 = '嘎嘎'
  console.log(s1)

  // 数组中的数据可以是任意类型的

  let arr: any = [100, '小强', true]
  console.log(arr)


  // void类型
  // let v1: void = null
  // let v2: void = undefined
  // console.log(v1)
  // console.log(v2)
  // 总结void,  可以 赋值为null或者是undefined ，但是需要关闭严格模式,重启项目
  // 通常情况下void 是用在函数的返回值中的
  // 如: 
  // 该函数是没有返回值,或者说该函数的返回值可以是null或者是undefined
  function showTime(): void {
    console.log('真香啊')
    // 都可以
    // return null
    // return undefined
    // return
    // 不行的
    // return 100
  }

  console.log(showTime())



  // object类型
  let obj: object = new String('abc')
  console.log(obj)

  // 联合类型 
  // 例子；函数调用的时候,可以传入字符串类型的数据,也可以传入数字类型的数据
  function f1(str: string | number): void {
    console.log(str)
  }
  f1(100)
  f1('明天会很美好')

  // 测试联合类型
  // let test1:string|number = '真香啊'
  // console.log(test1)

  // 需求例子: 调用函数的时候可以传入数字,也可以传入字符串,要求返回的是传入的数据的长度
  function getLength(str: string | number): number {
    // 如果str是string类型的,那么str就会自动的转成对象的方式 ,来调用 length属性使用(基本包装类型)
    // 如果str是number类型的,number是不能直接调用length属性使用
    // return str.length
    // 类型断言:  转数据类型的
    // 写法1: <string> str  此时把str变量的类型强制的转成string类型的数据
    // 写法2: (str as string) 转换类型
    if((<string>str).length){
      // 字符串类型的数据
      // return (<string>str).length
      return (str as string).length
    }else{
      // 是number类型的数据
      return str.toString().length
    }
  }

  console.log(getLength('abcd'))
  console.log(getLength(100))


  // 类型推断
   // 根据当前变量赋的值,自动的推断出当前的这个数据的类型 
   let result = 100
   // result = 'abc'
   console.log(result)


})();