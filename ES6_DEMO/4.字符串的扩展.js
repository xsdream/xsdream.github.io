/** 
 * creat by 2018/4/28    xsdream
*/
console.log('字符串的扩展')


// //读取阿斯科码字符串

// var a="\uD842\uDFB7";
// console.log(a);

// //codePointAt()

// //for in遍历key     for of遍历value
// for (let codePoint of 'foo') {
//     console.log(codePoint)
// }
//返回该位置在字符串中的字符
'今天天气真的很好'.charAt(0)

var qq='goods'.indexOf('d');//返回d在字符串中的下标，没有返回-1
var ww='goods'.includes('d');//是否找到字符串
var ee='goods'.startsWith('d');//字符串在头部吗？
var rr='goods'.endsWith('d');//字符串在尾部吗？
console.log(qq);//返回所在位置
console.log(ww);
console.log(ee);
console.log(rr);

//repeat可以将字符串重复打印,传数值和字符串数值都行，传自己就是删除自己
var a1='good'.repeat(2);
var a2='good'.repeat('2');
var a3='good'.repeat('good');

console.log(a1);
console.log(a2);
console.log(a3);

var a4='x'.padStart(5, 'ab') // 'ababx'
var a5='x'.padStart(4, 'ab')
console.log(a4);
console.log(a5);
var a7='xxx'.padEnd(5, 'ab') //尾部补全
console.log(a7)
var a8='xxx'.padEnd(2, 'ab') //补全位数不够？按照原来
console.log(a8)
var a9='x'.padStart(4)//没有第二个参数，那么会以空格补全 
console.log(a9);

var b1='12'.padStart(10, 'YYYY-MM-DD')
var b2='09-12'.padStart(10, 'YYYY-MM-DD');
console.log(b1);
console.log(b2);

//!!!!!!!!!!!模板字符串   
var basket={
    count:10,
    onSale:true
}
//${obj.value}是在对象中取值
$('#demo').append(`
  There are <b>${basket.count}</b> items 
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
//可以插入变量，插入多行字符串，插入对象值
let name = "Bob", time = "today";
var b3=`Hello ${name}, how are you ${time}?`
console.log(b3);

let greeting = `\`Yo\` World!`;
console.log(greeting);//在``中使用`需要用\转义

$('#demo').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

//在模板字符串中可以使用计算
let [x,y]=[1,2];

let b4=`${x} + ${y * 2} = ${x + y * 2}`
console.log(b4);

let obj = {x: 1, y: 2};
var b5=`${obj.x + obj.y}`
console.log(b5);

//模板字符串中调用函数
function fn() {
    return "Hello World";
  }
  
var b6=`foo ${fn()} bar`
console.log(b6);

// 变量place没有声明,会报错
// let msg = `Hello, ${place}`;

//括号内部是字符串会原样输出字符串
console.log(`Hello ${'World'}`);


let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
let b7=func('Jack') // "Hello Jack!"
console.log(b7);

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

console.log(template);

// alert`123`



//tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，也就是说，
//变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推

//设计的是真tm诡异，卧槽！！！
function tag(stringArr, value1, value2){
    console.log('11111')
    console.log(stringArr);
    console.log(value1);
    console.log(value2);
}

let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;


console.log(String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2));

