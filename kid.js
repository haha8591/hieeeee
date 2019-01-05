function L_1() {//不吃
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = name + '：哈哈寶貝，可是我不太想吃ㄟ<br>炫鋒：別擔心啦，這不會上癮的，這個吸下去，很快樂唷<br> ' + name + ':你不要逼人家嘛，人家就是不想吃啊QQ<br>炫鋒：喔喔好吧...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", L_2, false);
}
function L_2() {//不吃
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '自從這件事以後，炫鋒一直軟硬兼施地要' + name + '吃毒品，但' + name + '都拒絕了，因為他發現炫鋒不會碰毒品，女人的直覺讓他知道，炫鋒有別的心思。<br>漸漸的炫鋒不太理' + name + '了，' + name + '也察覺到了這件事，但他一點都不在意，因為他已經跟炫鋒的手下王瑋好上了，正打算分手。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", L_3, false);
}
function L_3() {/////翹家
    i = 0;
    stop = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'eatloop'  value='吃' class='button_select1'>"
        + "<input type='button' id = 'stupid'  value='不吃 而且說跟王瑋在一起' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '有一天，' + name + '照常跟著炫鋒鬼混，王瑋也跟在旁邊，炫鋒拿出一袋毒品，對著' + name + '說「吃下去，不吃的話我們就分手」。';
    typing_con(str);


    var eatloop = document.getElementById("eatloop");
    eatloop.addEventListener("click", I_1, false);

    var stupid = document.getElementById("stupid");
    stupid.addEventListener("click", M, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function M() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='拜把王瑋.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：笑死了 誰稀罕跟你在一起，誰不知道你拿毒品給我是為了讓我變成你的賺錢工具，你的拜把王瑋早就跟我在一起一個月了，誰叫他身材好、不抽菸、雞雞比你長。<br>炫鋒：...是真的嗎？王瑋？<br>王瑋:：(幹這低能)...沒...沒有啦...老...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", M_1, false);
}
function M_1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '炫鋒：沒關係反正我們是兄弟，衣服共穿，女人共用，你想上的話早點跟我說，也不用一直躲躲藏藏嘛！倒是這個婊子該好好處理一下了，竟然敢背叛我。<br>王瑋：謝謝老大，我下次會早點跟你說。都是這女人勾引我的！<br>' + name + '：王瑋哥！你不說你是真心愛我的嗎？還說可以為了我當上老大！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", M_2, false);
}
function M_2() {
    i = 0;
    stop = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'save'  value='留' class='button_select1'>"
        + "<input type='button' id = 'abortion'  value='不留' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='閉嘴啦臭鮑魚.jpg' >";

    var name = document.getElementById("name").value;
    str = '王瑋：閉嘴啦！臭鮑魚！(還不是妳沒長腦亂說話...)<br>因為這件事，' + name + '被炫鋒賣去酒店上班，還被強迫餵毒，炫鋒還會時不時地打她出氣...<br>直到有一天' + name + '發現自己懷孕了，她得下定決心...';
    typing_con(str);


    var save = document.getElementById("save");
    save.addEventListener("click", N, false);

    var abortion = document.getElementById("abortion");
    abortion.addEventListener("click", O, false);
    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function N() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '(我要為了這孩子活下去...)<br>' + name + '下了決心要離開這裡，好好做人給這個孩子一個好環境。<br>於是他決定離開酒店，而炫鋒給她定下的贖身費是一百萬，而酒店付給她的薪水被剝削的很嚴重所以她決定多兼一份工，開始了他每天只睡四個小時的生活。<br>過了五個月，就算' + name + '再怎麼隱藏自己的身形，也瞞不住自己那個越來越大的肚子，當炫鋒知道' + name + '懷孕並打算生下孩子後非常生氣<br>炫鋒：你瘋了嗎？你這種人竟然想要養小孩？趕快打掉，不然你要怎麼去上班？<br>' + name + '：這是我的孩子，反正孩子的爸大概也不是你吧？，我自己會存到我的贖身費，我們就一刀兩斷吧<br>炫鋒聽了非常生氣，拿起旁邊的酒瓶砸' + name + '，' + name + '也不甘示弱的回擊，但' + name + '的身體本來已經很疲憊了，加上力氣比不過炫鋒，很快被打倒在地，但炫鋒怒氣未消，他踢' + name + '的肚子，一邊罵 「現在就把他流掉」，' + name + '便失去意識了。<br>醒過來的時候，' + name + '已經在醫院了，炫鋒也怕他把' + name + '打死，想當然孩子是沒了，' + name + '的精神狀況也變得很不穩定...<br>住院期間，沒有任何人來看' + name + '，炫鋒也只是傳了一條簡訊威脅' + name + '不准說出去，而且要回來繼續償還他的贖身費。<br>' + name + '因為沒錢，只能盡快出院，她回到酒店後，整個人變得很陰沉，客人不喜歡她、賺的錢越來越少。<br>炫鋒的拳打腳踢越來越嚴重，但' + name + '不再反抗了，但' + name + '的眼神漸漸變了…<br>某天晚上喝醉的炫鋒又在打' + name + '，喝醉的他又開始說出羞辱' + name + '的話，「低能白癡，反正妳的小孩生出來也是和你一樣啦！」 「要不要現在送你去跟你小孩作伴？」<br>聽了這些話，' + name + '心裡的一角破碎了，那個未出世的小生命，是她充滿後悔的一生唯一想守護的東西了。<br>但炫鋒不但毀了他，還如此不屑他，這是壓垮' + name + '的最後一根稻草。<br>晚上，炫鋒喝下了被加入安眠藥的啤酒，' + name + '拿出菜刀割斷了炫鋒的脖子，他看著炫鋒只能發出微弱呻吟的身體，哭了出來<br>她已經不知道能為了什麼而活了，她拿起了沾滿炫鋒鮮血的刀子，也朝自己的脖子劃了下去...';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}

function O() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜死了.jpg' >";
    
    var name = document.getElementById("name").value;
    str = '(得拿掉才行...) ' + name + '覺得他的人生不需要更多負擔了，她拿了自己存的一些錢，打算找個密醫把小孩拿掉。<br>那天，' + name + '一個人走進診所，她身邊沒有朋友沒有親人，在手術台上她哭了出來，醫生只是冷漠地說「自己做的 還覺得後悔？」<br>手術完，' + name + '在恢復室裡，默默地流淚，她發現他什麼都沒剩下了，她知道她該做什麼了...<br>那天他抱著石頭跳進了最近的港口。';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}