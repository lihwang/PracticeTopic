// define('a', ['c'], function(c){
//     return {
//         aStr: 'aa',
//         aNum: c.cNum + 1
//     }
// });

console.log('a1');
define(function(require,exports,module){
    console.log('inner a1');
    require('./c.js')
});
console.log('a2')