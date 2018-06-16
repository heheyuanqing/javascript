new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num>5){
                resolve(num);
            }
            else{
                reject('数字太大了');
            }
        }, 2000);
    })
    .then(function (data) {
        console.log('resolved');
        console.log(data);
        console.log(somedata); //此处的somedata未定义
    })
    .catch(function (reason) {
        console.log('rejected');
        console.log(reason);
    }).then(function () {
    console.log("执行结束");
});