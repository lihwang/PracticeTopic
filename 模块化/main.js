requirejs.config({
    shim: {
        // ...
    },
    paths: {
        a: './a',
        b: './b',
        c: './c',
        index: './index'
    }
});

require(['index'], function(index){
    index();
});
