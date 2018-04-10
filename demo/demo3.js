window.onload = function () {
    waterFall('container', 'box');
    var dataInt = {"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}]};
    window.onscroll = function () {
        if (checkScrollSlide) {
            console.log(1111111);

            var container = document.getElementById("container");

            for (var i = 0; i < dataInt.data.length; i++) {
                var box = document.createElement("div");
                box.className = "box";
                container.appendChild(box);
                var pic = document.createElement("div");
                pic.className = "pic";
                box.appendChild(pic);
                var img = document.createElement("img");
                img.src = "img/" + dataInt.data[i].src;
                pic.appendChild(img);
            }
            waterFall('container', 'box');
        }
    }
};

function waterFall(parent, box) {
    var oParent = document.getElementById(parent);
    var oBox = getByClass(oParent, box);
    var cols = Math.floor(document.documentElement.clientWidth / oBox[0].offsetWidth);

    oParent.style.cssText = "width:" + cols * oBox[0].offsetWidth + "px;margin:0 auto";

    var hArr = [];

    for (var i = 0; i < oBox.length; i++) {
        if (i < cols) {
            hArr.push(oBox[i].offsetHeight);
        }
        else {
            var hMin = Math.min.apply(null, hArr);
            var index = getIndex(hArr, hMin);
            oBox[i].style.position = "absolute";
            oBox[i].style.top = hMin + 'px';
            oBox[i].style.left = index * oBox[i].offsetWidth + "px";
            hArr[index] += oBox[i].offsetHeight;
        }
    }
}

function getByClass(parent, box) {
    var boxArr = [];
    var elements = parent.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className === box) {
            boxArr.push(elements[i]);
        }
    }
    return boxArr;
}

function getIndex(hArr, hMin) {
    for (var i in hArr) {
        if (hArr[i] === hMin) {
            return i;
        }
    }
}

function checkScrollSlide() {
    var oParent = document.getElementById('container');
    var oBoxs = getByClass(oParent, 'box');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;

    return (lastBoxH > scrollTop + height) ? true : false;
}