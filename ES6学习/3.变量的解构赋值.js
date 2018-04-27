/** 
 * creat by 2018/4/26    xsdream
*/

//////////////////////对数组和对象提取值，赋值称为解构///////////////////
//////////////////总结：变量解析的用法
//1.交换变量的值
console.log('交换变量的值')
let x=1;
let y=2;
[x,y]=[y,x];
console.log(x)
console.log(y);
//2.函数返回多个值只能数组和对象,取出值很麻烦？不存在的
console.log('函数返回的用法');
function doit(){
    return [1,2,3];
}
let [a,b,c]=doit();
console.log(a);
console.log(b);
console.log(c);

function doobj(){
    return {
        q:111,
        w:222
    }
}
let {q,w}=doobj();
console.log(q)
console.log(w)
//3.函数参数的定义
console.log('函数参数的定义')
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}

f([1, 2, 3]);

function f({xx, yy, zz}) { 
    console.log(xx);
    console.log(yy);
    console.log(zz);
 }
f({xx: 3, yy: 2, zz: 1});
//4.提取json数据
let jsons={
    id:'21s12s1js12j12',
    name:'xusheng',
    age:123
}

let{id,name,age}=jsons;
console.log(id);
console.log(name);
console.log(age);

//5.函数参数的默认值
// jQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global = true,
//     // ... more config
//   } = {}) {
//     // ... do stuff
//   };

console.log('----------------------')
// function dododo(x=999,y){
//     console.log(x);
//     console.log(y);
// }
// dododo(12,33);

var obj={bb:99,cc:100,dd:101};

function dododo(x=999,{bb=99,cc=100,dd=101}={}){
    console.log(x);
    console.log(bb);
    console.log(cc);
    console.log(dd);
}

dododo(12,obj);
//6.遍历map结构
console.log('遍历map结构')
const map=new Map();
map.set('name','xusheng');
map.set('age',12)
for(let [key,value] of map){
    console.log(key+'is'+value);
}
//7.输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");





//es6可以同时给多个变量赋值
// let [a, b, c] = [1, 2, 3];

// console.log(a);
// console.log(b);
// console.log(c);


// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo);//1
// console.log(bar);//2
// console.log(baz);//3

// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// x // "a"
// y // undefined
// z // []

//不完全解析
// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a);
// console.log(b);
// console.log(d);

// let [foo] = 1;    //！！等号右边不是数组会报错
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

////总结：遵循匹配模式，一对一的关系

//结构解析可以带入默认值,只解析a,b赋初值
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// console.log(x);
// console.log(y);
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// console.log(x);
// console.log(y);
//ES6遵循严格相等运算===
// let [x = 1] = [undefined];     
//如果解析右边是undefined,那么会取初值。如果不是undefined，则会取解析的值
//必须严格等于undefined才能生效
// console.log(x);
// let [x = 1] = [null];


// let [x] = [null];
// let [y] = [undefined];
// console.log(x);
// console.log(y);

//结构解析可以取出对象中的值
// var obj={
//     name:'xs',
//     age:10
// }

//！！！！！！！！！变量必须与属性同名，才能取到正确的值！！！！！
// let {name:xxxx,age:sssss}=obj;
//注意别名写在后面！！  name是模式，xxxx是真正被赋值的变量  
// console.log(xxxx);
// console.log(sssss);

//注：变量必须严格等于undefined才能参与解析

// let x;
// ({x} = {x: 1})//如果不加（），会将{}当作一个代码块处理

// console.log(x);

//可以利用结构解析快速获得math中的方法
// let { log, sin, cos } = Math;
// console.log(log(222));
// console.log(sin(21));

//关于数组的解析
// let arr=[1,2,3,4]
// let {0:a,1:b,3:c}=arr;

// console.log(a);
// console.log(b);
// console.log(c);


// 字符串的结构解析
// const [a, b, c, d, e] = 'hello';
// console.log(a); // "h"
// console.log(b); // "e"
// console.log(c); // "l"
// console.log(d); // "l"
// console.log(e); // "o"
// //length属性会返回字符串的长度
// let {length : len} = 'hello';
// console.log(len);

//数组和布尔值的解构赋值  只要等号右边的值不是对象或数组，就先将其转为对象

// let {s} = true;
// console.log(s);


// 使用函数解析
// function add([x, y]){
//     return x + y;
//   }
  
//   add([1, 2]); 

// 函数解析可以使用默认值

// function add({x=0, y=0}={},z){
//     console.log(x+y+z);
//   }
  
//   add({x:1,y:2},3); 
//   add(); 

//   function move({x = 0, y = 0} = {}) {
//     return [x, y];
//   }
  
//   move({x: 3, y: 8}); // [3, 8]
//   move({x: 3}); // [3, 0]
//   move({}); // [0, 0]
//   move();

// console.log([1,2,3].map(Math.sqrt));

// var cc=[1, undefined, 3].map((x = 'yes') => x);

// console.log(cc);


