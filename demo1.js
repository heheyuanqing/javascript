var index = 1,
    timer;
window.onload=init;
function init() {
   // eventBind();
    autoPlay();
}
/*自动轮播*/
function autoPlay() {
    timer = setInterval(function () {
        computeOffset(-500);
        //btnIndex(true);
    },1000);
}

function computeOffset(offset) {
    var list = document.getElementsByClassName('list')[0];
    var left =   parseInt(list.style.left.slice(0,list.style.left.indexOf("p"))) + offset;
    if(offset<-1500){
        list.style.left = 0;
    }
    else if (offset>-500){
        list.style.left = 0;
    }
    else{
        list.style.left = offset +"px";
    }
}