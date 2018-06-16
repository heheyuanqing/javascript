var index = 1;
var animated = false;
var timer;

window.onload = init;

function init() {
    eventBind();
    autoPlay();
}

function autoPlay() {
    timer = setInterval(function () {
        getLeft(-500);
        changeIndex(true);
    }, 1000);
}

function getLeft(offset) {
    var list = document.getElementsByClassName("img-lists")[0];
    var newLeft = parseInt(list.style.left) + offset;
    var time = 300;
    var interval = 10;
    var speed = offset/(time/interval);
    animated = true;

    function go() {
        if((speed<0&&parseInt(list.style.left)>newLeft)||(speed>0&&parseInt(list.style.left)<newLeft)){
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go,interval);
        }
        else {
            animated = false;
            list.style.left = newLeft + 'px' ;
            if (newLeft < -2000) {
                list.style.left = -500 + "px";
            }
            if (newLeft > -500) {
               list.style.left = -2000 + 'px';
            }
        }
    }
    go();

}
function changeIndex(action) {
    if (action) {
        index++;
    }
    else {
        index--;
    }
    if (index === 4) {
        index = 1;
    }
    if (index === 1) {
        index = 4;
    }
    activeBtn();
}
function activeBtn() {
    var btns = document.getElementsByTagName("span");
    var len = btns.length;

    for (var i = 0; i < len; i++) {
        btns[i].className = "";
    }
    for (var i = 0; i < len; i++) {
        if (index === parseInt(btns[i].getAttribute("index"))) {
            btns[i].className = "on";
        }
    }
}

function stopPlay() {
    clearInterval(timer);
}

function eventBind() {
    var container = document.getElementsByClassName("container")[0];
    var list = document.getElementsByClassName("img-lists")[0];
    var btns = document.getElementsByTagName("span");
    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];

    container.onmousemove = stopPlay;
    container.onmouseout = autoPlay;

    var len = btns.length;
    for (var i = 0; i < len; i++) {
        (function (i) {
            btns[i].onclick = function () {
                var ind = btns[i].getAttribute("index");
                getLeft(-500 * (ind - index));
                index = parseInt(ind);
                activeBtn();
            };
        })(i);
    }
    
    next.onclick = function () {
        changeIndex(true);
        if (!animated){
            getLeft(-500);
        }
    };
    prev.onclick = function () {
        changeIndex(false);
        if (!animated){
            getLeft(500);
        }
    };
}