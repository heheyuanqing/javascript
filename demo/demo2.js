window.onload = goUp;

function goUp() {
    var btn = document.getElementsByClassName("btn")[0];
    var isTop = true;
    var timer;


    window.onscroll = function () {
        btnStatue();
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };
    btn.onclick = function () {
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
             timer = setInterval(function () {
            isTop = true;
            sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (sTop > 0) {
                var speed = Math.floor(-sTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = sTop + speed;
            }
            if (sTop === 0) {
                clearInterval(timer);
            }
        }, 50);

    };
}

function btnStatue() {
    var btn = document.getElementsByClassName("btn")[0];
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    if (scroll >=clientHeight) {
        console.log(222);
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}