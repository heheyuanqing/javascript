function Person() {
    var name = "heheyuanqing";
    this.age = 25;


    this.setName = function (name) {
        return name;
    }

}

function Teacher(n) {
    var name = n;
    Person.apply(this);
}

// Teacher.prototype = new Person();

var x = new Person();
var y = new Teacher();


console.log(y.age);
console.log(x.name);
console.log(x.age);
console.log(x.setName("hhh0"));