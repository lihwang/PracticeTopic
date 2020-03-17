// var arr = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];
// //冒泡排序
// function Maopao(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var num = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = num;
//             }
//         }
//     }
//     return arr;
// }

// console.log(Maopao(arr))

// //自带sort
// function sort(arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(sort(arr));


// //快速排序
// //快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
// function quick_sort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     var pivotIndex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotIndex, 1)[0];

//     var left = [];
//     var right = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return quick_sort(left).concat([pivot], quick_sort(right));
// }

// var arr = [5, 6, 2, 1, 3, 8, 7, 1, 2, 3, 4, 7];
// console.log(quick_sort(arr));


// var arr=[1,2,3,4,5,6,7];

// console.log(arr.concat([1]))


// 一道面试题：传递两个参数m，n，返回长度为m，所有元素都为n的数组，要求不能用循环。

// 利用函数的递归和 concat() 方法可以实现

function nLength(m, n) {
    return m ? nLength(m - 1, n).concat(n) : []
}

console.log(nLength(4, 5))