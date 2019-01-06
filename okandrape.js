function E_2() {//去唱卡拉ok
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='大哥哥們，可以跟你們一起唱歌嗎.jpg' >";
    str = '(到了KTV後)<br>阿，一個人是要怎麼唱卡拉OK啦，算了隨便進一個包廂好了。<br>(隨便選一間包廂開門) ';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", E_23, false);
}
function E_23() {//去唱卡拉ok
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='大哥哥們，可以跟你們一起唱歌嗎.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：大哥哥們，可以跟你們一起唱歌嗎><?';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", E_24, false);
}
function E_24() {//去唱卡拉ok
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='來啊來啊，哇，年輕的妹子耶，我最喜歡了，來來來這裡坐.jpg' >";
    str = '大哥哥：來啊來啊，哇，年輕的妹子耶，我最喜歡了，來來來這裡坐。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", E_25, false);
}
function E_25() {//去唱卡拉ok
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'ee1'  value='試試看好了' class='button_select1'>"
        + "<input type='button' id = 'ee2'  value='不行 抽菸傷身' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    str = '大哥哥：阿妹妹妳抽過菸嗎？要不要試試看？';
    typing_con(str);

    var ee1 = document.getElementById("ee1");//大哥哥全醉光 -> 看見爸爸摟著小三在街上晃，這時候該怎麼辦呢？(hh)
    ee1.addEventListener("click", hh, false);

    var ee2 = document.getElementById("ee2"); //被大哥哥非禮->該跟媽媽道歉嗎? (ff)
    ee2.addEventListener("click", ff, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}


function ff() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='給妳好臉色妳不要，兄弟們，開上！.jpg' >";
    str = '大哥哥：乾！叫妳抽就抽，給妳好臉色妳不要，兄弟們，開上！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff1, false);
}
function ff1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='轉場.png' >";
    str = '事情發生得太突然，我一下子沒來的及反應，只覺得人生好絕望、自己好髒...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff2, false);
}
function ff2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '等我再次醒來的時候，是躺在醫院的病床上。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff3, false);
}
function ff3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '媽媽不知道是什麼時候來的，坐在椅子上靠著牆睡著了。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff4, false);
}
function ff4() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '我真的很不乖，讓媽媽成天為了我煩惱，看著她最近因為家裡也因為我的事，白頭髮好像多了不少。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff5, false);
}
function ff5() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'gg1'  value='我才不道歉' class='button_select1'>"
        + "<input type='button' id = 'gg2'  value='道歉' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='媽媽：喔，茜茜妳醒了阿？.jpg' >";
    var name = document.getElementById("name").value;
    str = '媽媽：喔，' + name + '妳醒了阿？<br>媽媽突然醒來，輕聲細語地問著。該不該趁現在趕快跟媽媽道歉呢？';
    typing_con(str);

    var gg1 = document.getElementById("gg1");
    gg1.addEventListener("click", ggg, false);

    var gg2 = document.getElementById("gg2");
    gg2.addEventListener("click", ggend, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function ggg() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '做錯事並不可恥 可恥的是妳不敢承認 趕快給我道歉';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ff5, false);
}
function ggend() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜跟媽媽道歉.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：媽媽，對不起，我不該自顧自的生氣就這樣開始糟蹋自己。<br>媽媽：媽媽也要跟妳道歉，對不起，媽媽那天應該要陪妳一起去報警的，是我想的不夠周全。我是很愛我老公沒錯，但我更不想看到的是我的孩子沒有爸爸，所以才一直忍著，不然我不可能只為了我自己而堅持了這麼久...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ggend1, false);
}
function ggend1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜跟媽媽道歉.jpg' >";
    var name = document.getElementById("name").value;
    str = '雖然那天媽媽真的很過分，但我現在知道她的苦衷了。<br>' + name + '：媽媽，離婚吧，我真的沒關係，我有妳就夠了，我會好好讀書，不會再像之前一樣，我會努力向上，未來讓妳過好日子，不用依靠爸爸也沒關係，因為我只在意妳，好嗎？<br>媽媽：好，乖女兒。(媽媽沉默許久後笑著回答)';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ggend2, false);
}
function ggend2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜跟媽媽道歉後就努力讀書最後變成超強工程師.jpg' >";
    var name = document.getElementById("name").value;
    str = '之後的' + name + '真的一直認真讀書，努力的打程式，最後真的成為了月收入破幾十萬的工程師，也許不是多麼頂尖的人，但是至少' + name + '是肯努力的人，多麼勵志阿！';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
