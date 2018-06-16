/*
* 数组去重
* */

//方法一：使用es6的新数据结构set具有元素不重复的特点
function removal1(arr) {
    var arr2 = new Set(arr);
    return Array.from(arr2);
}

//方法二:使用map/forEach遍历，indexOf查找
function removal2(arr) {
    var result = [];
    arr.map(function (ele, index, arr) {
        if (arr.indexOf(ele, index + 1,arr) === -1) {
            result.push(ele);
        }
    });
    return result;
}

//方法三：将原数组进行排序，然后再与旁边进行比较存储
function removal3(arr) {
    var arr2 = arr.sort(function (a, b) {
        return a - b;
    });

    var res = [arr2[0]];

    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] !== res[res.length - 1]) {
            res.push(arr2[i]);
        }
    }
    return res;
}

//方法四：利用对象属性存在的特性
function removal4(arr) {
    var res = [];
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            res.push(arr[i]);
        }
    }
    return res;
}

//方法五：利用 includes 方法
function removal5(arr) {
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

//方法六：使用splice将重复元素进行删除
function removal6(arr) {
    var len = arr.length;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
                j--;
                len--;
            }
        }
    }
    return arr;
}

var arr = [5, 6, 8, 6, 9, 4, 5, 5, 5, 5, 6];
console.log(removal5(arr));