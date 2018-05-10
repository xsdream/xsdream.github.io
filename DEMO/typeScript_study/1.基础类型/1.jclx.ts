console.log('-------------基础类型-------------');

// 声明布尔值
let isbo:boolean=false;
console.log(isbo);

//声明number类型
let sum:number=6;
let sum2:number=0b100;//支持二进制和八进制
console.log(sum);
console.log(sum2);

// 字符串
let isName:string='许胜';
console.log(isName);
isName='我是改变后的许胜';
console.log(isName);

//使用模板字符串
let mubanstr:string=`我是普通模板字符串`;
let mubanstr2:string=`我是嵌入表达式的字符串，我${sum}岁，我叫${isName}`
console.log(mubanstr);
console.log(mubanstr2);

//数组
let list:number[]=[1,2,3];//指定类型
let list2:Array<number>=[4,5,6]//指定泛型
console.log(list);
console.log(list2);

//元组Tuple(数组里面什么都能放，你可以指定类型)

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x);//访问全部
console.log(x[0]);
console.log(x[0].substr(1));
console.log(x[0].substr(2));
console.log('元组的类型是'+typeof x)

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型,空余的会是empty

//x[0]=122;//你不能给错误的指定类型赋值

console.log(x[5]); // OK, 'string' 和 'number' 都有 toString

console.log(x);

//枚举(打上标记，默认从0开始，你也可以自己定义，方便取值)
// enum Color {Red=1, Green=2, Blue=4}
// let c: Color = Color.Blue;
// console.log(c);
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2


//Any 所有类型，不会检查类型
let ss:any=123;
let sss:any='any';

let notSure: any = 4;//any可以赋很多值，也可以调很多方法
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
notSure.toString();

let prettySure: Object = 4;//object可以赋任何值，但是不能调所有方法
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'
notSure.toString();

//当不知道数组里面的类型时，可以使用any
let anylist: any[] = [1, true, "free"];
console.log(typeof anylist);
list[1] = 100;


//voide,当函数没有返回值时
function warnUser(): void {
    alert("This is my warning message");
}
//声明void值，只能赋予undefined或者null
let unusable: void = undefined;
 
//Null和undefined
let nn: undefined = undefined;
let nnn: null = null;

//Never表示那些【【永不存在的值】】得类型,never是任何类型的子类型，也可以赋值给任何类型
//总是会抛出异常和根本就不会有返回值的表达式，变量也可能是never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail():never {
    return error("Something failed");
    // return 11;error
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    // let a=10;
    // while (a>1) {
    // } 错误
    while(true){
        //正确，死循环没有终点
    }
}

//类型断言
//当你清除的知道any是string时，你就可以将他转换为string来使用
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

let strLength2: number = someValue.length;

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
function getLength2(something: string | number): number {
    if ((something as string).length) {
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}
console.log(getLength2(122));//3

//关于let
