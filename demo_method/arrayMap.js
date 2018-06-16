/*
* 实现数组map方法
    map()传入一个函数作为参数，在函数中有三个参数分别为element、index、array；对数组中的每一个元素进行操作
*/

var arr=[2,4,4,55,67,7];
arr.map(function (ele) {
  ele = ele+1;
});

console.log(arr);
