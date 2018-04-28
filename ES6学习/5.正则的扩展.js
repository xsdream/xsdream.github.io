// JavaScript RegExp 对象
//i不区分大小写查找   g全文搜索查找   m多行匹配

// 写法
var re = new RegExp("\\w+");
var re = /\w+/;


var str = "Visit RUnoob";
// /runoob/是规则  i是模式
var patt1 = /runoob/i;
//match方法会根据规则匹配字符串
document.write(str.match(patt1));

//test方法搜索字符串指定的值，返回真或者假
var patt1=new RegExp("e");
document.write(patt1.test("The best things in life are free"));

//exec方法检索字符串中的指定值，找到就返回，没找到返回false
var patt1=/e/
document.write(patt1.exec("The best things in life are free"));

//es6可以同时传入正则表达式和模式,模式会替代正则中的模式
var ss=new RegExp(/abc/ig, 'i').flags;
console.log(ss);
