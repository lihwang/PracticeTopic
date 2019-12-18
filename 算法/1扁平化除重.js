// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组


var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
const final = new Set();
let newArr=[];

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

function DealArr(arr){
    arr.forEach(item=>{
        if(Array.isArray(item)){
            DealArr(item);
        }else{
            final.add(item);
        }
    })
}
DealArr(arr);
console.log(final);
let aa=Array.from(final).sort((a,b)=>a-b);
console.log(aa)






Array.from({length:100})