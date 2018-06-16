/*
* 深拷贝：在栈中重新开辟一段内存将对象/数组多有值进行拷贝，与原数据隔离开
* 浅拷贝：是对数据的引用，复制的是地址，与原数据之间会相互影响
* */

/*function shallowCopy(obj) {
    var newObj = {};

    for (var prop in obj) {
        newObj[prop] = obj[prop];
    }
    return newObj;
}*/

//object.assign()可以进行一层的深拷贝
function assignCopy(obj) {
    return Object.assign({}, obj);
}

//递归实现深拷贝
function deepCopy(initalObj, finalObj) {
    var newObj = finalObj || {};
    for (var i in initalObj) {

        //防止循环引用
        var prop = initalObj[i];
        if (prop === newObj) {
            continue;
        }


        //如果还有一层就继续复制
        if (typeof initalObj[i] === "object") {
            newObj[i] = initalObj[i].constructor === Array ? [] : {};

            // arguments.callee(deepCopy(initalObj[i], newObj[i]));
            deepCopy(initalObj[i], newObj[i])
        }
        else {
            newObj[i] = initalObj[i];
        }
    }
    return newObj;
}

function deepClone(obj) {
    var newObj;
    if (typeof obj === 'object') {
        newObj = obj.constructor === Array ? [] : {};
        for (var i in obj) {
            if (typeof obj[i] === "object") {
                newObj[i] = deepClone(obj[i]);
            }
            else {
                newObj[i] = obj[i];
            }
        }
    }
    else {
        newObj = obj;
    }
    return newObj;
}

//JSON方法实现深拷贝
function deepCopy2(obj) {
    var newObj = JSON.stringify(obj);
    return JSON.parse(newObj);
}

var obj1 = {name: "heheheyuanqing", age: 18, class: 1502};
var obj2 = {name: "hhh", age: 58, child: [{name: "sdd", age: 18}, {name: "eed", age: 12}]};

var arr1 = ["heheyuanqing", "jejehuisaf", "jklsduwo"];
var arr2 = [15, 20, 66, [1, 3, 3, 5, 6], 15, 22, 35];


//浅拷贝
// var newObj = obj1;
var newObj = deepCopy(obj2);
console.log(newObj.name+"\n"+newObj.age+"\n"+newObj.child);