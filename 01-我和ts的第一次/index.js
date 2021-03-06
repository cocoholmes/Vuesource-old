// 第一次书写ts代码
(function () {
    // 定义一个函数,str的参数的类型应该是string类型
    function showMsg(str) {
        console.group(str);
    }
    // 定义变量
    var msg = '阿内哈谁有';
    // 调用函数,传参数,参数的类型必须是string
    showMsg(msg);
    var num = 100;
    showMsg(num);
})();
