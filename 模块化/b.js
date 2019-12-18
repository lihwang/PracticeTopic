// define('b', ['a'], function(a){
//     return {
//         bStr : a.aStr + ' bb'
//     }
// });

console.log('b1');
define(function(require,exports,module){
    console.log('inner b1');
});
console.log('b2')