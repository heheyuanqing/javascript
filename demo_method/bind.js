//arguments不是一个数组
Function.prototype. bindJs = function (context) {
    var self = this;
    console.log(arguments);
    var args = Array.prototype.slice(arguments, 1);
    return function () {
        var innerArg = Array.prototype.slice(arguments);
        return self.apply(context, args.concat(innerArg));
    }
};

var obj = {
    name:"heheheyuanqing",
    fx:function () {
        console.log("I am so cute");
    }
};
var f = function () {
    console.log(this.name);
};

f.bindJs(obj)();
console.log(f.bindJs(obj));

