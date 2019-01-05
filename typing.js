function typing(str) {
    var two = document.getElementById("two");
    // document.getElementById("hello").style.zIndex = "-4";
    document.getElementById("hello").style.opacity = "0.4";
    document.getElementById("two").style.paddingLeft = "20px";
    document.getElementById("two").style.paddingTop = "20px";
    
    if (i <= str.length) {
        two.innerHTML = str.slice(0, i++) + '|';
        setTimeout('typing(str)', 10);//遞歸調用
        if (stop != 0) {
            i = str.length + 3;
            story();
            return;
        }
    }
}

function typing_con(str) {
    var word = document.getElementById("word");
    document.getElementById("hello").style.opacity = "1";
    // document.getElementById("two").style.paddingLeft = "0px";
    // document.getElementById("two").style.paddingTop = "0px";
    if (i <= str.length) {
        word.innerHTML = str.slice(0, i++) + '|';
        setTimeout('typing_con(str)', 47);//遞歸調用
        if (stop != 0) {
            i = str.length + 3;
            return;
        }
    }
}