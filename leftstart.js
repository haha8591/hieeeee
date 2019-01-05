function D() {/////到學校頂樓16樓吹吹風
    i = 0;
    stop = 0;
    //step = 9;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='頂樓的風也太涼爽了吧.jpg' >";

    str = '阿~啊~~~喔齁~~~~~~頂樓的風也太涼爽了吧';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", D_1, false);
}
function D_1() {
    i = 0;
    stop = 0;
    //step = 10;
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'D_1'  value='打個招呼就走' class='button_select1'>"
        + "<input type='button' id = 'D_2'  value='趁機告白' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    str = '寬寬：學妹，妳怎麼在這?<br>(啊 是我喜歡已久的寬寬學長耶 >/////<)';
    typing_con(str);

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='學妹，妳怎麼在這.jpg' >";

    var D_1 = document.getElementById("D_1");
    D_1.addEventListener("click", D_1_1, false);

    var D_2 = document.getElementById("D_2");
    D_2.addEventListener("click", D_1_2, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}

function D_1_1() {/////打個招呼就走
    i = 0;
    stop = 0;
    //step = 19;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='學妹，妳怎麼在這.jpg' >";

    str = '妳只打招呼就走要我劇情怎麼下去 給我選另一個選項喔';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", D_1, false);
}

function D_1_2() {/////告白
    i = 0;
    stop = 0;
    //step = 11;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='學長，我喜歡你.jpg' >";
    var name = document.getElementById("name").value;////名字
    str = name + ':學….學長，我喜歡你!!!!!!!!';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", D_1_22, false);
}
function D_1_22() {/////告白第二段話 
    i = 0;
    stop = 0;
    //step = 12;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='可是我有女友了.jpg' >";

    var name = document.getElementById("name").value;////名字
    str = '寬寬呆滯：可是...我有女友了，抱歉<br>' + name + '：那學長的女朋友是誰呢?';

    typing_con(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", D_1_23, false);
}
function D_1_23() {/////告白第三段話  //有btn 
    i = 0;
    stop = 0;
    //step = 18;
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'E__1'  value='和學姊搶男人' class='button_select1'>"
        + "<input type='button' id = 'E__2'  value='因為太難過所以去KTV轉換心情' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='是涵涵學姐唷.jpg' >";

    str = '寬寬：是涵涵學姊唷<3';
    typing_con(str);

    var E__1 = document.getElementById("E__1");
    E__1.addEventListener("click", E_11, false);

    var E__2 = document.getElementById("E__2");
    E__2.addEventListener("click", E_2, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";//移除skip
}
function E_11() {/////告白第二段話 
    i = 0;
    stop = 0;
    //step = 12;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='在這之後茜茜一直以各種理由約寬寬學長出門，今天要約寬寬去哪呢.jpg' >";

    var name = document.getElementById("name").value;////名字
    str = '學長抱歉QQ 我不知道你有女朋友了，但是我們可以繼續當朋友吧？<br>寬寬：當然可以啊^_^ <br>但在這之後，' + name + '一直以各種理由約寬寬學長出門...';

    typing_con(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", E_1, false);
}