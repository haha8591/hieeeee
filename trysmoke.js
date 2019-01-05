function hh() {//大哥哥全醉光 -> 看見爸爸摟著小三在街上晃，這時候該怎麼辦呢？(hh)
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜在KTV裡跟大哥哥們玩的不亦樂乎.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：哇，這菸的味道也太飄飄然了吧，我喜歡！<br>大哥哥：那妹妹多抽幾根阿！自己拿沒關係！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", hh1, false);
}
function hh1() {//大哥哥全醉光 -> 看見爸爸摟著小三在街上晃，這時候該怎麼辦呢？(hh)
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜在KTV裡跟大哥哥們玩的不亦樂乎.jpg' >";
    var name = document.getElementById("name").value;
    str = '在包廂裡，' + name + '和大哥哥們玩的不亦樂乎。不少大哥哥也喝掛了，但' + name + '卻意外的酒量很好，看著大哥哥們從10個醒著到現在只剩2個人是半醒的狀態，其他人全掛了，' + name + '開始覺得很無趣，只好開始摸他們身上的錢包，搜刮了將近2萬塊才走人。<br>' + name + '：哈哈，可以去買好多東西了！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", hh2, false);
}
function hh2() {//大哥哥全醉光 -> 看見爸爸摟著小三在街上晃，這時候該怎麼辦呢？(hh)
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'ii'  value='忍無可忍，上前揍他' class='button_select1'>"
        + "<input type='button' id = 'jj'  value='不管他' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='爸爸與小三.jpg' >";
    str = '結果一出包廂的門，就看見爸爸摟著小三在街上晃，這時候該怎麼辦呢？';
    typing_con(str);

    var ii = document.getElementById("ii");
    ii.addEventListener("click", iiend, false);

    var jj = document.getElementById("jj");
    jj.addEventListener("click", jjend, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function iiend() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='女兒跟爸爸吵架.jpg' >";
    var name = document.getElementById("name").value;
    str = '(上前揮爸爸一拳)<br>' + name + '：爸，你到底什麼時候才要改過自新阿？<br>小三：妳叫他爸？你結婚生子了？你不是說你這輩子只愛過我一個人嗎！什麼山盟海誓都是屁啦，你長得醜就算了，還這麼不知羞恥！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", iiend1, false);
}
function iiend1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='女兒跟爸爸吵架.jpg' >";
    var name = document.getElementById("name").value;
    str = '爸爸：不是這樣的，妳們聽我解釋...<br>' + name + '：誰要聽你解釋阿！阿姨妳看清楚這個人了吧！不要浪費自己的青春在我們家愚蠢的老爸上面，他不值得妳這樣！<br>小三：你完蛋了，我一定會讓你不得好死！<br>(小三生氣地踩著高跟鞋揚長而去)';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", iiend2, false);
}
function iiend2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='女兒跟爸爸吵架.jpg' >";
    var name = document.getElementById("name").value;
    str = '爸爸：' + name + '，妳原諒爸爸好不好？<br>' + name + '：原諒？你有想過媽媽的感受嗎？~!@#$%^&*()_+~!@#$%^&*()_+(' + name + '開始長篇大論罵人)<br>爸爸：對不起對不起，我真的知道錯了。<br>' + name + '：那我們回家吧。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", iiend3, false);
}
function iiend3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='小三縱火.jpg' >";
    var name = document.getElementById("name").value;
    str = '結果當天深夜，在一家三口的熟睡時間，' + name + '家起火了。三個人都沒能逃出來。不過警方在調查的時候，有看見屋子旁有幾罐汽油桶，那，是誰縱火的呢...？';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
function jjend() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='小三跟爸爸ㄉ照片.jpg' >";
    var name = document.getElementById("name").value;
    str = '原本想掉頭走人的，結果看到爸爸跟小三開始吵架了。<br>小三：我說我要那個2萬塊的包包，快點買給我！<br>爸爸：我真的沒那麼多錢，不然我先買個2千塊的給妳用用？<br>小三：我不管！我要2萬塊的！<br>' + name + '看著手上的2萬元大鈔，開心地走到他們面前。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", jjend1, false);
}
function jjend1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='小三跟爸爸ㄉ照片.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：阿姨，那如果我送給妳2萬塊的包包，妳願不願意跟這個老頭分手？<br>小三猶豫了一陣子，而後猛力的點點頭。<br>' + name + '：喏，這裡剛剛好不多不少2萬塊，趕快離開這老頭的身邊吧！<br>小三：耶！妹妹妳真給力！<br>小三開心地踩著高跟鞋走了。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", jjend2, false);
}
function jjend2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='女兒跟爸爸吵架.jpg' >";
    var name = document.getElementById("name").value;
    str = '爸爸：沒想到她是這種人...<br>' + name + '：我才沒想到爸你是這種人吧，媽媽這麼好的女人你不要，你在外面找這種只愛錢的女人，應該嗎？<br>爸爸：抱歉，爸爸也有自己的苦衷。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", jjend3, false);
}
function jjend3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='女兒跟爸爸吵架.jpg' >";
    str = '爸爸：但今天這件事真的讓我對外面這些女人心死了，我以後不跟她們連絡了，好嗎？';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", jjend4, false);
}
function jjend4() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='爸爸牽著茜茜回家.jpg' >";
    var name = document.getElementById("name").value;
    str = '於是爸爸牽著' + name + '的手回家，就像小時候爸爸還沒在外亂來的時候那樣，夕陽把他們倆的影子拉的好長好長，' + name + '沉重的心事也被拉的好遠好遠。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", jjend5, false);
}
function jjend5() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '爸爸真的會改過自新嗎？' + name + '又真的能放下這一切嗎？媽媽自此之後就會快樂起來了嗎？這些我們都無從得知，但人生總有很多不如意的事、或是有很多你極力想改變但始終沒辦法挽轉局勢的情形，也許未來他們一家三口互相隱藏著心裡某部分傷心的事而不去談，對他們來說是幸福的。<br>那你呢，你覺得他們幸福嗎？';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
