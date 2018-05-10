console.log('-------------变量声明-------------')

//var 函数作用域，链式作用域

//let块级作用域

//函数作用域
function f1() {
    var message = "Hello, world!";

    return message;
}
console.log(f1());

//链式作用域  fun》》fun》》全局
var aa='我是全局变量';
function f2() {
    var a = 10;//内存泄漏~变量a会一直储存在内存中
    return function g() {
        var b = a + 1;
        console.log(aa);
        return b;
    }
}

var g = f2();
console.log(g());// returns 11;


function f(shouldInitialize: boolean) {
    var x;
    if (shouldInitialize) {
        x = 10;
    }
    return x;
}
//没有块级作用域
f(true);  // returns '10'
f(false); // returns 'undefined'

//常见面试题
for (var i = 0; i < 10; i++) {

    (function(i){
        // setTimeout(function() { console.log(i); }, 100 * i);
    })(i)
    
}
//10  10  10 10 10 10
//使用自执行后 1  2  3  4  5

//------------------使用let-------------------
function f3(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    // return b;//不能返回块级作用域的
}
console.log(f3(true));


//拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写

//暂时性死区:let声明变量之前的区域
//console.log(zanshi);//不存在变量提升，所以报错！
let zanshi=111;
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

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            //此处的let屏蔽了外层的i
            sum += currentRow[i];
        }
    }

    return sum;
}

//获取块级作用域变量
// for (let i = 0; i < 10 ; i++) {
//     setTimeout(function() {console.log(i); }, 100 * i);
// }

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}
console.log(theCityThatAlwaysSleeps());

//-------------const-------------声明

const NUMBER=999;
// NUMBER=111;//不能变

//---------------解构--------------
let arry=['猫','老鼠'];
let [first,seconde]=arry;

console.log(first);
console.log(seconde);

function f33([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

f33([122,122]);

//数组结构解析
//可以在数组里使用...语法创建剩余变量
let [one, ...other] = [1, 2, 3, 4];
console.log(one); // outputs 1
console.log(other); // outputs [ 2, 3, 4 ]

let [one2] = [1, 2, 3, 4];
console.log(one2); // outputs 1

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second);
console.log(fourth);

//对象结构解析
let o = {
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

//...跟数组一样，把其他的变量放到了passthrough中
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log(passthrough);

let p={name:'许胜',age:'xs'}

let {ww, e}: {aw: string, e: number} = p;

///看到属性命名
