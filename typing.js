function typing(str) {
    var two = document.getElementById("two");
    //var sk = document.getElementById("sk");

    if (i <= str.length) {
        two.innerHTML = str.slice(0, i++) + '|';
        setTimeout('typing(str)', 10);//遞歸調用
        if (stop != 0) {
            i = str.length + 3;
            step_1();
            return;
        }
    }
}

function typing_con(str) {
    var word = document.getElementById("word");

    if (i <= str.length) {
        word.innerHTML = str.slice(0, i++) + '|';
        setTimeout('typing_con(str)', 10);//遞歸調用
        if (stop != 0) {
            i = str.length + 3;
            step_2_1();
            return;
        }
    }
}