"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
console.log('-------------变量声明-------------');
//var 函数作用域，链式作用域
//let块级作用域
//函数作用域
function f1() {
    var message = "Hello, world!";
    return message;
}
console.log(f1());
//链式作用域  fun》》fun》》全局
var aa = '我是全局变量';
function f2() {
    var a = 10; //内存泄漏~变量a会一直储存在内存中
    return function g() {
        var b = a + 1;
        console.log(aa);
        return b;
    };
}
var g = f2();
console.log(g()); // returns 11;
function f(shouldInitialize) {
    var x;
    if (shouldInitialize) {
        x = 10;
    }
    return x;
}
//没有块级作用域
f(true); // returns '10'
f(false); // returns 'undefined'
//常见面试题
for (var i = 0; i < 10; i++) {
    (function (i) {
        // setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
//10  10  10 10 10 10
//使用自执行后 1  2  3  4  5
//------------------使用let-------------------
function f3(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    // return b;//不能返回块级作用域的
}
console.log(f3(true));
//拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写
//暂时性死区:let声明变量之前的区域
//console.log(zanshi);//不存在变量提升，所以报错！
var zanshi = 111;
console.log(zanshi);
// function foo() {
//     // okay to capture 'a'
//     return a;
// }
// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();
// let a;
//重定义 
// let x = 10;
// let x = 20; // 错误，不能在1个作用域里多次声明`x`
//屏蔽  在一个嵌套作用域里引入一个新名字的行为称做屏蔽
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            //此处的let屏蔽了外层的i
            sum += currentRow[i_2];
        }
    }
    return sum;
}
//获取块级作用域变量
// for (let i = 0; i < 10 ; i++) {
//     setTimeout(function() {console.log(i); }, 100 * i);
// }
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
//-------------const-------------声明
var NUMBER = 999;
// NUMBER=111;//不能变
//---------------解构--------------
var arry = ['猫', '老鼠'];
var first = arry[0], seconde = arry[1];
console.log(first);
console.log(seconde);
function f33(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f33([122, 122]);
//数组结构解析
//可以在数组里使用...语法创建剩余变量
var _a = [1, 2, 3, 4], one = _a[0], other = _a.slice(1);
console.log(one); // outputs 1
console.log(other); // outputs [ 2, 3, 4 ]
var one2 = [1, 2, 3, 4][0];
console.log(one2); // outputs 1
var _b = [1, 2, 3, 4], second = _b[1], fourth = _b[3];
console.log(second);
console.log(fourth);
//对象结构解析
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//不用取值了啊
// let { a, b } = o;
// console.log(a);
// console.log(b);
// let a;
// let b;
//注意此处必须要用（）括起来，因为js会把{}当作一个语法块
// ({ a, b } = { a: "bazzzzz", b: 10111111 });
// console.log(a);
// console.log(b);
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(passthrough);
