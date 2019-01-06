function B() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='轉場.png' >";
    str = '(呃呃呃呃阿阿  怎麼突然有狗跑出來了?!)<br>咦...？有一群身上刺龍刺鳳的哥哥們幫我把狗趕跑了！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", B_1, false);
}
function B_1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'H'  value='跟他們玩' class='button_select1'>"
        + "<input type='button' id = 'G'  value='拒絕他們的邀請 跑掉' class='button_select2'>"
        + "<div id='word' class='story'></div>";
        var hello = document.getElementById("hello");
        hello.innerHTML = "<img src='旋風：帶妳去好玩的地方吧.jpg' >";
    str = '他們問我要不要跟他們一起玩?';
    typing_con(str);

    var H = document.getElementById("H");
    H.addEventListener("click", H_1, false);

    var G = document.getElementById("G");
    G.addEventListener("click", G_1, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function H_1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='旋風：帶妳去好玩的地方吧.jpg' >";
    str = '金髮哥哥：嘿嘿我帶你去好玩的地方吧';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_2, false);
}
function G_1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '嗚嗚被抓回來了QQ';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", B_1, false);
}
function H_2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='鋒哥好.jpg' >";
    str = '來到一個地下的撞球間 裡面煙霧迷漫 一進去裡面的人都和金髮哥哥打招呼<br>眾人：鋒哥好！  阿鋒又帶妹來了～  真羨慕鋒哥，有錢真好！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_3, false);
}
function H_3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = name + '聽旁邊的人的話，得知金髮哥哥叫炫鋒，是附近堂口老大的獨生子，備受寵愛的他，從小就有一堆8+9跟著他';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_4, false);
}
function H_4() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='鋒哥與茜茜的甜蜜畫面.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '心底雖然有點不安，但是炫鋒一直叫他放鬆，又聽到炫鋒對旁邊的小弟說「這是你們的大嫂，不准亂來」，在炫鋒的甜言蜜語下，' + name + '也漸漸放鬆了起來';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_5, false);
}
function H_5() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '在眾人的鼓譟下，' + name + '喝了幾杯啤酒，也開始玩開了，還交換了聯絡方式';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_6, false);
}
function H_6() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '這三個月來，' + name + '幾乎沒去上課，都在跟炫鋒一夥玩，' + name + '學會了抽菸喝酒，甚至和炫鋒做了炫鋒所謂的「大人的事」，直到有一天...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", H_7, false);
}
function H_7() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'I'  value='吃' class='button_select1'>"
        + "<input type='button' id = 'L'  value='不吃' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='旋風說「寶貝妳來吃看看這個吧」with白色粉末.jpg' >";
    var name = document.getElementById("name").value;
    str = '「寶貝 你來吃吃看這個吧」，炫鋒拿出了一小袋白白的粉末，' + name + '知道那是毒品，炫鋒大把的零用錢都是賣他爸爸堂口的毒品得來的。';
    typing_con(str);

    var I = document.getElementById("I");//吃
    I.addEventListener("click", I_1, false);

    var L = document.getElementById("L"); //不吃
    L.addEventListener("click", L_1, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}

function I_1() {//吃
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '好挖，謝謝你，這個很貴吧<3 ' + name + '吃了炫鋒給的毒品，身體飄飄然的，總覺得自己什麼都可以做到的樣子';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", I_2, false);
}
function I_2() {//吃
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='鋒哥與茜茜的甜蜜畫面.jpg' >";
    var name = document.getElementById("name").value;
    str = '從此以後，' + name + '就離不開毒品了，為了拿到毒品，炫鋒不管叫他做什麼，他都會做<br>為了毒品出賣肉體也在所不惜，' + name + '從此變成炫鋒的生財工具和單純的洩慾對象 這樣的日子過了兩年，' + name + '在一次警察的突襲檢查中被抓到了';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", I_3, false);
}
function I_3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'J'  value='奮發向上' class='button_select1'>"
        + "<input type='button' id = 'K'  value='向下沉淪' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='向上還向下呢.jpg' >";

    str = '驗尿結果導致他必須進入勒戒所，現在的她必須想想要奮發向上還是向下沉淪。';
    typing_con(str);

    var J = document.getElementById("J");
    J.addEventListener("click", Jend, false);

    var K = document.getElementById("K");
    K.addEventListener("click", Kend, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function Jend() {//奮發向上
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";
    
    var name = document.getElementById("name").value;
    str = '因為決定重新做人，' + name + '拒絕與監獄各個派系往來，但是這樣太天真了<br>因為這樣，她反而變成各個派系一起玩弄的目標<br>肉體和精神上的折磨讓' + name + '身心俱疲，身體也漸漸出了狀況，她開始會對著牆壁自言自語但勒戒所所方和裏頭的犯人都不希望這個最體層的玩具消失，一直不讓' + name + '出去接受正規的醫療<br>等到' + name + '被發現時，為時已晚，' + name + '已經變成一個徹底的瘋子了...<br>而為了支付' + name + '龐大的醫療費用，' + name + '的家承受著龐大的經濟壓力，而因為' + name + '離家出走兩年<br>其實親子關係已經產生嫌隙最終受不了的' + name + '雙親，趁著探視時間，把' + name + '活活悶死了';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
function Kend() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";

    var name = document.getElementById("name").value;
    str = '決定放棄人生的' + name + '，繼續在勒戒所幹起了老本行<br>要從腐敗的執法人員手中拿到毒品或其他違禁品並不是一件難事<br>而因為' + name + '的”事業”做的不錯，漸漸在勒戒所也有了一席之地' + name + '漸漸開始以為自己也是個黑道，就像當初他的男友炫鋒一樣<br>開始變的蠻橫且目中無人的' + name + '，讓其他的黑道們不爽了，他們決定一起懲罰她某天他們支開了所方，將' + name + '好好的”教育”了一下受到這次的教訓，' + name + '的地位一落千丈，變成勒戒所的玩物<br>過了三個月的生活，' + name + '受不了自殺了';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}