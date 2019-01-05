function W() {//玩遊戲
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='對話-1.jpg' >";
    var name = document.getElementById("name").value;
    str = '來打遊戲好了，最近這個「乂煞氣a權乂」，對我好好，一直送我東西，喔喔，他上線了<br>乂煞氣a權乂：' + name + '怎麼這時候上線？不是要上課嗎？<br>' + name + '：學校好無聊，人家翹課了啦<br>乂煞氣a權乂：妳壞壞！打妳屁股喔!<br>' + name + '：哼哼來打阿，你才打不到呢';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", W1, false);
}
function W1() {//玩遊戲
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '乂煞氣a權乂：哼哼告訴我妳在哪阿，我打給妳看<br>' + name + '：好啊，我在...<br>乂煞氣a權乂下線了';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", W2, false);
}
function W2() {//玩遊戲
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='對話-2.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '也沒在意，繼續玩遊戲，過了一個小時，乂煞氣a權乂上線了<br>乂煞氣a權乂：' + name + '，我真的來了唷！要不要出來見面啊?<br>' + name + '：?!  你騙人!  我們住那麼近嗎?<br>乂煞氣a權乂：對阿，我在你這邊的XX網咖，離我家坐個20分鐘的公車就到了';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", W3, false);
}
function W3() {//玩遊戲
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='帥氣ㄉ子權.jpg' >";
    var name = document.getElementById("name").value;
    str = '因為無聊，' + name + '就過去了，他們約在一間咖啡廳...<br>原本以為乂煞氣a權乂會是一個醜陋肥宅，結果沒想到 乂煞氣a權乂 身高180，長相帥氣<br>' + name + '一看到就覺得這次來對了<br>乂煞氣a權乂說可以叫他阿權，他們的談話非常順利，阿權本人跟他遊戲中一樣幽默風趣、出手闊綽';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", W4, false);
}
function W4() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'nothk'  value='不去' class='button_select1'>"
        + "<input type='button' id = 'yeah'  value='去' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '他們聊到天色暗下來，阿權問' + name + '要不要去看電影...';
    typing_con(str);

    var nothk = document.getElementById("nothk");
    nothk.addEventListener("click", Y, false);

    var yeah = document.getElementById("yeah");
    yeah.addEventListener("click", Z, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function Y() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='Y+Z的結局圖.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：不行ㄟQQ 我要趕快回家了<br>阿權：QQ好吧，再聯絡?<br>' + name + '：好啊<br>這之後' + name + '發現阿權越來討人厭，常常沒跟他說，就到他的學校找她，還喜歡亂摸她，明明說過不喜歡了，還是亂碰！<br>' + name + '對他越來越冷淡  但阿權像個變態一樣，一直黏著他  終於有一天' + name + '受不了...<br>她去跟好幾個她的愛慕者哭訴，那些愛慕者這段時間也看在眼裡，他們早就想好好處理他了...<br>這兩個禮拜，阿權都沒來找' + name + '，' + name + '不禁好奇地去問他們到底對阿權做了什麼<br>但是他們都神神秘秘的，不過至少' + name + '可以繼續快樂的過他的校園公主生活了OuO';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
function Z() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='Y+Z的結局圖.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：好挖，走吧<br>阿權帶他來到V2電影院，' + name + '雖然發現了他的意圖，但是都答應了，只好進去了<br>' + name + '當然不打算和阿權做那些事，所以她一直閃避阿權的肢體接觸，但阿權當作欲擒故縱，一直不放棄<br>後來' + name + '爆氣了，直接踹他的老二，還拿桌上的飲料潑他，然後趁他還反應不過來，逃出去了<br>一路上，' + name + '一直咒罵阿權，遇到這種事，' + name + '也蛻變了，她決定認真念書，降低遇到這種人的機率<br>後來' + name + '考上了資工系，成為了一個工程師，但也變成了沒人要的臭肥宅';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}


function X() {//躺在沙發睡覺
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='在家睡覺的下場.jpg' >";
    var name = document.getElementById("name").value;
    str = 'ZZZZZZ...  ' + name + '睡到晚上八點，被爸媽得知都沒去上課後被狠狠罵了一頓，原本就生性乖巧的' + name + '被狠狠罵過後，變得更加畏縮，之後便乖乖去上課<br>她的人生也不曾走歪過，雖然因為懦弱的個性，導致就算知道丈夫劈腿，也不敢戳破小三找上門也只敢乖乖簽字，捨不得小孩離開便拿了小孩的監護權，卻又不敢要贍養費，貧困的把小孩拉拔長大<br>但因為需要長時間工作賺錢養小孩，沒時間教育他，小孩跑去混陣頭，變成8+9，這就是' + name + '在家睡覺的下場0.<';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}