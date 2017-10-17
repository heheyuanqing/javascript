var index = 1,
    timer;
window.onload=init;
function init() {
    eventBind();
    autoPlay();
}
/*自动轮播*/
function autoPlay() {
    timer = setInterval(function () {
        computeOffset(-500);
        btnIndex(true);
    },1000);
}
/*停止轮播*/
function stopPlay() {
    clearInterval(timer);
}
function computeOffset(offset) {
    var list = document.getElementsByClassName("list")[0];
    var left;
    if(list.style.left.indexOf("p") === -1){
        left = offset;
    }
    else{
        left = parseInt(list.style.left.slice(0, list.style.left.indexOf("p"))) + offset;
    }

    if(left<-1500){
        list.style.left = "0";
    }
    else if (left>-500){
        list.style.left = "0";
    }
    else{
        list.style.left = left +"px";
    }
}

function btnIndex(change) {
    if(change){
        index++;
    }
    else{
        index--;
    }
    if(index > 4){
        index = 1;
    }
    if(index<1){
        index = 4;
    }

    activeIndex();
}

function activeIndex() {
    var tags = document.getElementsByTagName("span");
    var len = tags.length;

    for(var i=0;i<len;i++){
        tags[i].className = "";
    }

    for(var i=0;i<len;i++){
        if(index === parseInt(tags[i].getAttribute("index"))){
            tags[i].className = "on";
        }
    }
}

function eventBind(){

/*当鼠标移到整个容器的时候停止轮播*/
    var container = document.getElementsByClassName("container")[0];

    container.onmousemove = function (e) {
      stopPlay();
      document.getElementsByClassName("prev")[0].style.display = "block";
      document.getElementsByClassName("next")[0].style.display = "block";
    };
    container.onmouseout = function (e) {
       autoPlay();
        document.getElementsByClassName("prev")[0].style.display = "none";
        document.getElementsByClassName("next")[0].style.display = "none";
    };
/*点击序列进行跳转*/
    var btns = document.getElementsByTagName("span");
    var len = btns.length;

    for(var i=0;i<len;i++){
        /*闭包*/
        (function (i) {
            btns[i].onclick = function (e) {
                var ind = parseInt(btns[i].getAttribute("index"));

                computeOffset(Math.abs(index - ind)*(-500));
                index  = ind;
                activeIndex();

            };
        })(i)

    }
/*点击箭头进行跳转*/
    var prev = document.getElementsByClassName("prev")[0],
        next = document.getElementsByClassName("next")[0];

    prev.onclick = function (e) {
      btnIndex(false);
      computeOffset(500);
    };
    next.onclick = function (e) {
       btnIndex(true);
       computeOffset(-500);
    };
}