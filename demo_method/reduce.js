Array.prototype.reduceJs = function (fn) {
    var self = this;
    var len = this.length, index = 1;
    var arr = this, cur;
    if (arguments.length === 2) {
        pre = arguments[0];
    }
    else {
        if (index <= len && index > 1) {
            pre = arr[index - 1];
        }
        else {
            pre = 0;
        }
    }
    for (; index <= len; index++) {
        cur = arr[index - 1];
        pre = fn(pre, cur, index, arr);
    }
    return pre;
};

var arr = [1, 2, 3, 4, 5, 6, 7];
/*var sum = arr.reduce(function (pre, curr, index, arr) {
    return pre + curr;
});*/
var sumJs = arr.reduceJs(function (pre, curr, index, arr) {
    return pre + curr;
});
console.log(sumJs);
// console.log(sum);