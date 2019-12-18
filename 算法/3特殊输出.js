// 
// var b=1;
// (function c(){
   
//     // 'use strict'
//     // debugger
//     // b = 20;
//     // console.log(b); 
// })();
// var b=1;
// (function (){
//     b = 20;
//     console.log(b); 
// })();


// (function A() {
//     console.log(A); // undefined
//     var A = 1;
//     // console.log(window.A); // undefined
//     console.log(A); // 1
// }())

//1.分析

// （）的优先级最高

// 函数表达式（变量赋值） var a=function(){}
// 函数声明 function a(){}

// 这是一个立即执行的函数表达式（Immediately-invoked function expression, IIFE），更特殊的，该函数表达式是一个具名函数表达式（Named function expression, NFE）。
// 作为函数名的标识符（在这里是 A ）只能从函数体内部访问，在函数外部访问不到 (IE9+)。

/**
 * 概念
 * 1.立即执行的具名函数
 * 2.匿名函数
 * 3.iife是匿名函数子自调用
 */


// 简单改造下面的代码，使之分别打印 10 和 20。
// var b = 10;

// (function b(){
//     b = 20;
//     console.log(b); 
// })();

var b = 10;
// console.log(b);
// (function b(){
//     var b = 20;
//     console.log(b); 
// })();

// (function b(b){
//     // var b = 20;
//     console.log(b); 
// })(b);

// (function b(b){
//     // 这样相当内部声明了b
//     b=20;
//     console.log(b); 
// })(b);

// var b = 10;  //匿名函数
// (function (){
//   b = 20;
//   console.log(b);
// })();

// var b = 10;
// (function (){
//   console.log(b);
//   b = 20;
// })();

// var b = 10; //修改具名函数不一致
// (function a(){
//   console.log(b);
//   b = 20;
// })();
// var b = 10;
// (function a(){ //执行环境为window，this==window
//   console.log(this.b);
//   b = 20;
// })();

var b = 10;
(function b(b) {//作用局部
    console.log(b)
 window.b = 20;//作用全局
 console.log(b)
})(b)

// var b = 10;
// (function b(b) {//作用局部
//  b = 20;//未指定作用全局，先从内部寻找
//  console.log(b)
// })(b)