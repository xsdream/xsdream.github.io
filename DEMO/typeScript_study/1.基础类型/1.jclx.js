"use strict";
console.log('-------------基础类型-------------');
// 声明布尔值
var isbo = false;
console.log(isbo);
//声明number类型
var sum = 6;
var sum2 = 4; //支持二进制和八进制
console.log(sum);
console.log(sum2);
// 字符串
var isName = '许胜';
console.log(isName);
isName = '我是改变后的许胜';
console.log(isName);
//使用模板字符串
var mubanstr = "\u6211\u662F\u666E\u901A\u6A21\u677F\u5B57\u7B26\u4E32";
var mubanstr2 = "\u6211\u662F\u5D4C\u5165\u8868\u8FBE\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u6211" + sum + "\u5C81\uFF0C\u6211\u53EB" + isName;
console.log(mubanstr);
console.log(mubanstr2);
//数组
var list = [1, 2, 3]; //指定类型
var list2 = [4, 5, 6]; //指定泛型
console.log(list);
console.log(list2);
//元组Tuple(数组里面什么都能放，你可以指定类型)
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x); //访问全部
console.log(x[0]);
console.log(x[0].substr(1));
console.log(x[0].substr(2));
console.log('元组的类型是' + typeof x);
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型,空余的会是empty
//x[0]=122;//你不能给错误的指定类型赋值
console.log(x[5]); // OK, 'string' 和 'number' 都有 toString
console.log(x);
//枚举(打上标记，默认从0开始，你也可以自己定义，方便取值)
// enum Color {Red=1, Green=2, Blue=4}
// let c: Color = Color.Blue;
// console.log(c);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
//Any 所有类型，不会检查类型
var ss = 123;
var sss = 'any';
var notSure = 4; //any可以赋很多值，也可以调很多方法
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
notSure.toString();
var prettySure = 4; //object可以赋任何值，但是不能调所有方法
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'
notSure.toString();
//当不知道数组里面的类型时，可以使用any
var anylist = [1, true, "free"];
console.log(typeof anylist);
list[1] = 100;
//voide,当函数没有返回值时
function warnUser() {
    alert("This is my warning message");
}
//声明void值，只能赋予undefined或者null
var unusable = undefined;
//Null和undefined
var nn = undefined;
var nnn = null;
//Never表示那些【【永不存在的值】】得类型,never是任何类型的子类型，也可以赋值给任何类型
//总是会抛出异常和根本就不会有返回值的表达式，变量也可能是never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
    // return 11;error
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    // let a=10;
    // while (a>1) {
    // } 错误
    while (true) {
        //正确，死循环没有终点
    }
}
//类型断言
//当你清除的知道any是string时，你就可以将他转换为string来使用
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength);
console.log(strLength2);
// function getLength(something: string | number): number {
//     if (something.length) {  //error
//         return something.length;  //error
//     } else {
//         return something.toString().length;
//     }
// }
//这里使用了联合类型！那么类型断言就起作用了
function getLength2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength2(122)); //3
//关于let
