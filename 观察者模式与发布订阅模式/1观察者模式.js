// //是软件设计模式的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。
// const Subject=(()=>{
//     const observers=[];
//     const addOb=(ob)=>{
//         observers.push(ob);
//     }
//     const notify=()=>{
//         for(let ob of observers){
//             if(typeof ob.update=='function'){
//                 ob.update();
//             }
//         }
//     }
//     return {
//         addOb,notify
//     }
// })();

// let subA = {
//     update: () => {
//         console.log('updateSubA');
//     }
// },
// subB = {
//         update: () => {
//             console.log('updateSubB');
//         }
// };


// Subject.addOb(subA);    //添加观察者subA
// Subject.addOb(subB);    //添加观察者subB
// Subject.notify();       //通知所有观察者

//是一种消息范式，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。

// 上图所示，发布者与订阅者直接不是互相依赖和关联的，两者之间有一个通信结构（事件通道）。这个事件通道会处理发布者发布的不同类型的通知，并且将这些通知发送给相应的订阅者。


// const PubSub=(()=>{
//     const topic={};//保存订阅主题
//     const subscribe=function(type,fn){//订阅某种主题
//         if(!topic[type]){
//             topic[type] = [];
//         }
//         topic[type].push(fn);
//     }
//     const publish =function (type,...args){
//         if (!topic[type]) {
//             return;
//         }
//         for (let fn of topic[type]) {      //通知相关主题订阅者
//             fn(args);
//         }
//     }
//     return {subscribe, publish}; 
// })();

// let subA = {type: 'event1'},
//     subB = {type: 'event2'},
//     subC = {type: 'event1'};

// PubSub.subscribe(subA.type, (arg) => console.log(`update eventType: ${subA.type} subA`,arg));   //订阅者A订阅topic1
// PubSub.subscribe(subB.type, () => console.log(`update eventType: ${subB.type} subB`));   //订阅者B订阅topic2
// PubSub.subscribe(subC.type, (arg) => console.log(`update eventType: ${subC.type} subC`,arg));   //订阅者C订阅topic1
// PubSub.publish(subA.type,'hhhhhhh');  //发布topic通知，通知订阅者A、C

var a = true;
// if(a == 1 && a == 2 && a == 3){
//  	console.log(1);
// }
console.log(true == 1 && true == 2 && true == 3)