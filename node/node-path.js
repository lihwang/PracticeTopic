// path.resolve
// 作用：path.resolve() 该方法将一些的 路径/路径段 解析为绝对路径。
// 语法：path.resolve([...paths])
// 说明：
// ...paths <string> 一个路径或路径片段的序列
// 如果没有传入 path 片段，或者path 片段长度为零（空字符），则 path.resolve() 会返回当前工作目录的绝对路径(相当于使用path.resolve(__dirname))

// 我当前的工作路径为/workspace/demo
console.log(path.resolve()) // returns /workspace/demo
console.log(path.resolve('')) // returns /workspace/demo
console.log(path.resolve(__dirname)) // returns /workspace/demo
console.log(path.resolve('/img/books', '/net')) // returns '/net'
console.log(path.resolve('img/books', '/net')) // returns '/net'

console.log(path.resolve('img/books', './net')) // returns '/workspace/demo/img/books/net'
console.log(path.resolve('/img/books', './net')) // returns '/img/books/net'
console.log(path.resolve('/img/books', 'net')) // returns '/img/books/net'
console.log(path.resolve('/img/books', '../net')) // returns '/img/net'
console.log(path.resolve('src', '/img/books', '../net')) // returns '/img/net'
console.log(path.resolve('src', './img/books', '../net')) // returns '/workspace/demo/src/img/net'
console.log(path.resolve('src', 'img/books', '../net')) // returns '/workspace/demo/src/img/net'

// 从后向前解析，
// 若字符以 / 开头，不会拼接到前面的路径；
// 若以 ../ 开头，拼接前面的路径，但是不含前面一节的最后一层路径；
// 若以 ./ 开头 或者没有符号 则拼接前面路径；




// path.join
// 作用：path.join()方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
// 语法：path.resolve([...paths])
// 说明：
// ...paths <string> 一个路径或路径片段的序列
// 长度为零的 path 片段会被忽略。 如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录

path.join('/img', 'book', 'net/abc', 'inter', '..'); // returns /img/book/net/abc
console.log(path.join('/img/books', '../net'))  // returns /img/net
console.log(path.join('img/books', '../net'))   // returns img/net
console.log(path.join('/img/books', './net'))   // returns /img/books/net
console.log(path.join('img/books', './net'))   // returns img/books/net
console.log(path.join('/img/books', 'net'))    // returns /img/books/net
console.log(path.join('img/books', 'net'))    // returns /img/books/net
console.log(path.join('/img/books', '/net'))   // returns /img/books/net
console.log(path.join('img/books', '/net'))    // returns img/books/net

// 总结一下 区别：join()只是拼接各个path片段，并不像resolve()一样除了拼接各个字段还拼接了工作目录的路径，
// 其次如果以/开头的字符串片段在join并不像resolve一样是只返回自身，还有就是.. 同 ../是一个意思都代表上一级目录