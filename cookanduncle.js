function Q() {//煮飯
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'escape'  value='逃跑' class='button_select1'>"
        + "<input type='button' id = 'stopfire'  value='試圖滅火' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='火燒屋子.jpg' >";
    str = '隨便煮個東西吃好了，但是吃完後發現火忘記關，廚房已經燒起來了。';
    typing_con(str);

    var escape = document.getElementById("escape");
    escape.addEventListener("click", R, false);

    var stopfire = document.getElementById("stopfire");
    stopfire.addEventListener("click", death, false);//茜茜死掉了

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function R() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '嗚嗚，趕快出門打119，但因為廚房有很多助燃物品，所以火勢蔓延的很快，等消防隊來，' + name + '家已經燒掉三分之一了<br>' + name + '的父母回家看到家中付之一炬，心中的難過與憤怒，無以言喻，當他們知道會發生這種事  是因為' + name + '的不小心，他們心中不禁對' + name + '起了怨懟';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", R2, false);
}
function R2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '因為家裡不能住人，' + name + '一家搬進了附近的二伯家，二伯對' + name + '一家很好，他很早就跟妻子離婚，家中只有和前妻所生，現在已經高中的兒子<br>雖然二伯對' + name + '家很好，但畢竟寄人籬下，' + name + '的父母為了賺錢一直在加班，跟' + name + '相處的時間也越來越少，而' + name + '自己也有意識地避開他的父母，因為他心中有很大的歉疚感';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", R3, false);
}
function R3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='噁心的二伯.jpg' >";
    var name = document.getElementById("name").value;
    str = '最近她發現二伯對她的眼神怪怪的，常常盯著剛洗完澡的她，或是常常有意無意的觸碰她的身體，但是當她告訴媽媽時，她只是用不耐煩的語氣告訴' + name + '「二伯這麼好心的收留我們，他對你只是一般長輩關心小孩而已，不要自我意識過剩了」';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", R4, false);
}
function R4() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '聽了這番話，' + name + '只好當作是自己多想了，直到有一天…';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", R5, false);
}
function R5() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='二伯與茜茜.jpg' >";
    var name = document.getElementById("name").value;
    str = '那一天' + name + '爸媽又會加班到很晚，' + name + '剛洗好澡出來，又看到二伯一直盯著她的身體看，當她想趕快走回房間時，二伯叫他過來沙發上，當' + name + '一坐下，二伯突然把身體壓了上去...<br>' + name + '驚慌失措的掙扎，但一個女生的力氣怎麼可能比得過正值壯年的男人，' + name + '很快地落於下風...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", R6, false);
}
function R6() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'parents'  value='告訴爸媽' class='button_select1'>"
        + "<input type='button' id = 'police'  value='直接報警' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    str = '當二伯從' + name + '的身上起來後，他告訴' + name + '「別說出去，明天帶妳去買你想要的，反正妳說出去只會破壞我跟妳爸的關係，妳又想無家可歸嗎？」說完之後就回房間了' + name + '呆坐在沙發上，過了一陣子才想到她得收拾一下自己，還得想想之後該怎麼辦...';
    typing_con(str);

    var parents = document.getElementById("parents");
    parents.addEventListener("click", S, false);//告訴父母

    var police = document.getElementById("police");
    police.addEventListener("click", T, false);//直接報警

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function S() {//告訴父母
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = name + '決定還是告訴父母好了，她覺得他們還是會站在自己這邊的<br>到了隔天，' + name + '追上正要去上班的媽媽，當她把衣服掀開給媽媽看時，並告訴媽媽二伯做了什麼，媽媽沉默了...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", S1, false);
}
function S1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";
    var name = document.getElementById("name").value;
    str = '媽媽：你就忍一忍…我們現在寄人籬下，房子的維修費也是你二伯借給我們的...以後也不要穿太少在家晃啊晃的...<br>之後的話' + name + '都聽不進去了，自己的媽媽竟然覺得是自己穿太少，而且要自己...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", S2, false);
}
function S2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";
    var name = document.getElementById("name").value;
    str = '媽媽：' + name + '！知道了嗎？別跟爸爸說，他最近壓力很大，不要讓他因為這種事煩惱<br>' + name + '麻木的點頭，但她已經不相信這個家了，她開始逃避，對上學也漠不關心，開始翹課';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", S3, false);
}
function S3() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='轉場.png' >";
    var name = document.getElementById("name").value;
    str = '直到有一天  ' + name + '翹課的生活起了點小變化<br>她遇到了...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", A, false);
}

function T() {//直接報警
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜拚了命衝刺.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '打算直接報警，因為媽媽說過的那些話，她覺得他直接報警比較能得到幫助<br><br>怕被二伯聽到，' + name + '不打算打電話，她迅速的披了件外套，打算直接衝去警局<br>輕輕的小心地不發出聲音的關上大門，' + name + '衝出家門，警察局只要過兩個路口就到了，' + name + '拚了命的衝刺，突然...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", T1, false);
}
function T1() {//直接報警
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'haaa'  value='打哈哈' class='button_select1'>"
        + "<input type='button' id = 'truth'  value='告訴實情' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜拚了命衝刺.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '表弟：' + name + '你怎麼在這裡？<br>' + name + '：阿...(看來表弟剛補習完)<br>怎麼辦呢?';
    typing_con(str);

    var haaa = document.getElementById("haaa");
    haaa.addEventListener("click", U, false);

    var truth = document.getElementById("truth");
    truth.addEventListener("click", V, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function U() {////end
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜生活重回軌道.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：哈哈沒有啦，只是突然想出來買宵夜，那我先走了喔！<br>不等表弟回應' + name + '馬上跑走<br>到了警局，' + name + '馬上一五一十的告訴員警，警察姐姐馬上幫他連絡醫院，準備驗傷...<br>過了兩個月，二伯被定罪了，' + name + '一家也因為大筆的賠償金，生活重回軌道，真是可喜可賀';
    typing(str);

    
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
   
}
function V() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜驚慌失措end.jpg'>";
    var name = document.getElementById("name").value;
    str = name + '把剛剛發生的事一五一十的告訴表弟，表弟的臉色越來越差<br>表弟：沒想到爸爸是這種人阿...這樣的話應該去醫院驗傷才對！之後再報警，我們先去醫院吧!<br>表弟平常對' + name + '就很好了，現在又很成熟的說要帶' + name + '去醫院，' + name + '馬上安心下來，跟著表弟一路上表弟一直傳著訊息，他告訴' + name + '他要先請醫院的朋友先幫' + name + '插隊，這樣等等就可以直接驗傷了<br>但是快到醫院的時候，突然開來一輛廂型車，上面下來兩個彪形大漢，把' + name + '架上車了<br>' + name + '看到表弟表情平靜的上車後，也知道到底是怎麼回事了<br>表弟：爸爸差點就出事了，幸好妳被我遇到，爸爸做事真是不細心<br>表弟：別擔心，不會殺死妳的，畢竟親戚一場，只要妳保證不說出去，而且乖乖待到妳的傷口復原，就放妳一條活路<br>' + name + '別無選擇...<br>失蹤三個月的' + name + '終於回到家了，她絕口不提這三個月到底發生什麼事，但回來後，二伯和表弟常常會叫她進去他們的房間...';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}

function death() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '死掉了<br>哈哈哈哈哈哈哈哈哈  看看你玩得一團糟  跟你的人生一樣';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}