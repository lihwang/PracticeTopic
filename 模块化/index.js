define('index', ['a', 'b'], function(a, b){
    return function(){
        console.log(a.aNum, b.bStr);
    }
});