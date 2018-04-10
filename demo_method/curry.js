function curry(context){
    var arg = Array.prototype.slice(arguments,1);
    var self = this;
    return function () {
        var innerArg = Array.prototype.slice(arguments);
        var finalArg = arg.concat(innerArg);
        return self.apply(context,finalArg);
    }
}

curry()