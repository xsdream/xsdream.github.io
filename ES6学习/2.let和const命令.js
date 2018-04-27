/** 
 * creat by 2018/4/25    xsdream
*/

// console.log('let和const命令')


////////////////1.暂时性锁死  有let和const，那么代码块中形成封闭作用于 定义：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
// var tmp = 123;

// if (true) {
//   window.tmp = 'abc'; //不报错

//   tmp='aaa';//error

//   //注意let前是死锁区，未定义的变量不能直接赋值
//   let tmp;

//   tmp='aaa';//不报错
//   //注意let前是死锁区，未定义的变量不能直接赋值
  
// }


// function bar(y= x, y = 2) {
//     return [x, y];
//   }
  
//   bar(); 


//////////////////2.同一作用域内不能出现两个let
// function func(arg) {
//     // let arg; // 报错
//   }
  
//   function func(arg) {
//     {
//       let arg; // 不报错
//     }
//   }


//   var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i); 



// var tmp = new Date();

// console.log(tmp);

// function f() {
//     debugger;
//   console.log(tmp);
//   if (true) {
//     var tmp = 'hello world';
//   }
// }

// f();//undefined


//let中会产生块级作用域
// function f1() {
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n); // 5
// }

//////////////块级作用域的出现让立即执行函数不再必要

// (function(){
//   var tmp = '立即执行函数';
//   alert(tmp);
// })()

// // 块级作用域写法
// {
//   let tmp ='块级作用域';
//   alert(tmp);
// }


// // 情况一
// if (true) {
//   function f() {}
// }

// // 情况二
// try {
//   function f() {}
// } catch(e) {
//   // ...
// }


// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//   f();
// }());//报错

///////////////const声明是只读的常量，一旦声明常量的值就不能改变
// const PI = 3.1415;

// PI=222;//报错

////const也是块级作用域内有效


///////////////////////首先需要掌握变量声明和变量替身

// var x = 5; // 初始化 x

// elem = document.getElementById("demo"); // 查找元素
// elem.innerHTML = x + " " + y;           // 显示 x 和 y

// var y = 7;    // 设置 y 为 7



// var x = 5; // 初始化 x
// var y;

// elem = document.getElementById("demo"); // 查找元素
// elem.innerHTML = x + " " + y;           // 显示 x 和 y

// y = 7;    // 设置 y 为 7

///////////////变量提升就是如果你 var y=7；那么在函数顶部帮你声明一个var y;



/////////////////////////常量  const是固定了内存中的指针，所以改变对象的内容是不会报错的，那是改变对象就会报错
// const foo = {};

// // 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// foo.prop // 123

// // 将 foo 指向另一个对象，就会报错
// foo = {};

// ///数组同样也是
// const a = [];
// a.push('Hello'); // 可执行
// a.length = 0;    // 可执行
// a = ['Dave'];//此处将另一个数组指向a，就会报错

// ////////冻结对象！！！
// const foo = Object.freeze({});

// foo.prop = 123;

// alert(foo.prop);

//es6中   全局变量！=顶层对象了   window.b==var b        window.b！=let  b  
// let b = 1;

// window.b



////////////////////////////////// this的指向问题

// function as(){
//     //这里this是指向全局
//     this.a=2;
//     console.log(a);
// }

// console.log(window.a);

// as();


// var ob={
//     aa:function(){
//         this.a=1;
//         console.log(1);
//     }
// }

// ob.aa();

// console.log(window.a);
//////////////////////////总结：在单函数中，this会指向到全局。在对象中的函数中，this会指向对象


/////////////////如何取得全局对象
// CommonJS 的写法
// var global = require('system.global')();

// ES6 模块的写法
// import getGlobal from 'system.global';
// const global = getGlobal();
