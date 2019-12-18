class A {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHi(){
        console.log('hellow,'+this.name)
    }

    _test(){
        console.log('test')
    }

    static test(){
        console.log('aaaaa')
    }
}

A.test();
A.aaaa=1;


let a=new A('李成杰23',23);
let b=new A('李成杰21',21);
// console.log(a.name)
// a.name='1222';
a.__proto__.say=()=>{console.log(1111)}
// console.log(a.sayHi())
// console.log(a.age,a.name)
// console.log(b.age,b.name)
b.say();
a.say();
a._test();
console.log(a.aaaa)
