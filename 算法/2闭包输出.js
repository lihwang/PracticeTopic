//改造下面的代码，使之输出0 - 9，写出你能想到的所有解法

// for (let i = 0; i< 10; i++){
//     console.log(i)
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }
// console.log(i)

// for (语句 1; 语句 2; 语句 3)
// {
//     被执行的代码块
// }
// 语句 1 （代码块）开始前执行
// 语句 2 定义运行循环（代码块）的条件
// 语句 3 在循环（代码块）已被执行之后执行
// for语句执行顺序


/**
 * 解法1
 * let 块级作用域
 */

// for (let i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }
// console.log(i) //报错，可以看出for语句的声明是在{}内部进行的

/**
 * 解法2
 * 内部为匿名立即执行函数，在执行时参数i已经传入进去，
 * 函数在执行时内部已经声明了同样的变量并且复制过来
 * 把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样
 * 值传参针对基本类型，引用传参针对引用类型，传参可以理解为复制变量值。基本类型复制后俩个变量完全独立，之后任何一方改变都不会影响另一方；引用类型复制的是引用（即指针），之后的任何一方改变都会映射到另一方。
 */

//  可以学习函数传参数，JS中函数参数值传递和引用传递
// example1: 
// var a=5;
// function fn(param){
//     param=6;
// }
// fn(a);
// console.log(a)

//  for (var i = 0; i< 10; i++){
// 	((i)=>{
//         setTimeout(() => {
//             console.log(i);
//         }, 1000)
//     })(i)
// }

/**
 * 闭包
 * 类似传值
 */
//  for (var i = 0; i< 10; i++){
// 	(()=>{
//         var a=i;
//         setTimeout(() => {
//             console.log(a);
//         }, 1000)
//     })()
// }
 

//隐藏方法 1.定时器执行第三个参数i作为参数默认传入函数中
// for (var i = 0; i < 10; i++) {
//     setTimeout(console.log, 1000, i)
// }

//隐藏方法 2.利用执行时setTimeout第一个参数非函数时会作为字符串处理，然后到时间处理为eval，node环境直接报错
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout
for (var i = 0; i < 10; i++) { 
    setTimeout(console.log(i), 1000)
  }