// define('c', function(){
//     return {
//         cNum: 0
//     }
// });

console.log('c1');
define(function(require,exports,module){
    console.log('inner c1');
});
console.log('c2')