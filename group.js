function step_2_1_1() {/////到社辦看一看
    i = 0;
    stop = 0;
    //step = 2;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='現在來偷偷練習一下吉他好了.jpg' >";
    var name = document.getElementById("name").value;////名字
    str = name + '：平常社課的時候都碰不太到什麼吉他，只能聽博凱可怕的自彈自唱，現在來偷偷練習一下好了。';
    typing_con(str);////第一段話

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_1, false);
}

function step_2_1_1_1() {//博凱：茜茜，妳在說些什麼阿？
    i = 0;
    stop = 0;
    //step = 3;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='博凱ㄉ倩影.jpg' >";
    var name = document.getElementById("name").value;
    str = '博凱：' + name + '，妳在說些什麼阿？';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_2, false);
}
function step_2_1_1_2() {/////乾…該死的，他怎麼都不去上課，還跑來社辦混！
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='現在來偷偷練習一下吉他好了.jpg' >";
    str = '乾...該死的，他怎麼都不去上課，還跑來社辦混！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_3, false);
}
function step_2_1_1_3() {/////茜茜：哈哈哈，沒有啦，想說來
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var name = document.getElementById("name").value;
    str = name + '：哈哈哈，沒有啦，想說來這邊自己練習一下，因為我覺得我平常彈得真的很糟糕。(你妹的還不都是因為博凱你一直自己秀害我沒有機會彈)<br>博凱：我來教妳呀！我們先來調音！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_4, false);
}
function step_2_1_1_4() {/////博凱：妳看，C要這樣按
    i = 0;
   
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var name = document.getElementById("name").value;
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='博凱ㄉ倩影.jpg' >";
    str = '博凱：妳看，C要這樣按，把手放在這...對對對！<br>' + name + '：(心想) 天啊，博凱這樣是在吃我豆腐嗎，鹹豬手！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_5, false);
}
function step_2_1_1_5() {/////博凱：那妳就好好自己練習一下
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var name = document.getElementById("name").value;
    str = '博凱：那妳就好好自己練習一下好了，我要來補眠，妳如果有問題的話就把我叫醒沒關係，一定把妳教到會！<br>' + name + '：好，謝謝你^_^ (拍咪亞趕快給我走開去睡去睡)';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", step_2_1_1_6, false);
}
function step_2_1_1_6() {/////呃……尷尬了，我不會按Bm，要叫醒他要他來教我嗎？
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'select_2_1_1'  value='叫醒他' class='button_select1'>"
        + "<input type='button' id = 'nnend'  value='讓他睡死ㄅ' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    str = '呃...尷尬了，我不會按Bm，要叫醒他要他來教我嗎？';
    typing_con(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "";///skip拿掉
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='現在來偷偷練習一下吉他好了.jpg' >";
    var select_2_1_1 = document.getElementById("select_2_1_1");//叫醒他
    select_2_1_1.addEventListener("click", ll, false);

    var nnend = document.getElementById("nnend"); //讓他睡死
    nnend.addEventListener("click", nn, false);////nn_end
}
//////////////////////////////////////////////////////////////////
function nn() {/////end
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='連廢物博凱都有工作了，茜茜完全被打敗.jpg' >";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = '唉，' + name + '這種個性真的很糟糕，不會的東西老是不去問會的人，所以在學習的路上一直沒有學好，因為她一直秉持著「唉呀沒關係啦」的態度，所以很多事情得過且過，到最後就一事無成。於是大學畢業後，連耍廢的博凱都找到工作了，' + name + '都還找不到，大家一定要注意「不懂的問題一定要趕快問老師」，這樣才可以解決問題、這樣才不會輸給博凱喔 \^_^/！';
    typing(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
///////////////////////////////////
function ll() {/////博凱叫我回去上課不然會變跟他一樣 要回去嗎 (ll)
    i = 0;
    //stop = 0;
    //step = 13;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = name + '：博凱抱歉吵到你睡覺了，但我不太會按Bm，可以教我嗎？<br>博凱：喔哈哈沒關係沒關係，Bm比較困難，是封閉式和弦，妳才剛學其實不用要求這麼高就先學會這個，其實妳有學會剛剛前面的幾個CGEDAF就夠彈很多歌了！來，試試這首。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ll_1, false);

}
function ll_1() {/////博凱叫我回去上課不然會變跟他一樣 要回去嗎 (ll)
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '其實博凱人好像真的不錯耶，只是他話太多了。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ll_2, false);

}
function ll_2() {/////博凱叫我回去上課不然會變跟他一樣 要回去嗎 (ll)
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='博凱ㄉ倩影.jpg' >";
    var name = document.getElementById("name").value;
    str = '博凱：阿妳這節沒有課嗎？<br>' + name + '：有阿，是馬老師的課。<br>博凱：馬老師？妳是說長得比較帥的那個馬老師嗎？' + name + '：對阿對阿。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ll_3, false);

}
function ll_3() {/////博凱叫我回去上課不然會變跟他一樣 要回去嗎 (ll)
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '博凱：那妳還在這裡混！給我回去好好上馬老師的課！馬老師是學校數一數二認真的老師耶！<br>' + name + '：又沒有關係，每次我不會的話靖哥哥都會教我啊！<br>博凱：不管啦，去上課！妳要是再這樣繼續混下去，會變跟我一樣喔！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ll_4, false);

}
function ll_4() {/////博凱叫我回去上課不然會變跟他一樣 要回去嗎 (ll)
    i = 0;
    
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'll1'  value='當然要阿誰想變成博凱' class='button_select1'>"
        + "<input type='button' id = 'll2'  value='當然要阿變成博凱也太可怕了吧' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='現在來偷偷練習一下吉他好了.jpg' >";
    str = '天啊，博凱說繼續混下去會變跟他一樣欸...太可怕了吧，那我要回去好好上課嗎？';
    typing_con(str);

    var ll1 = document.getElementById("ll1");//叫醒他
    ll1.addEventListener("click", llend, false);

    var ll2 = document.getElementById("ll2"); //讓他睡死
    ll2.addEventListener("click", llend, false);////nn_end

    var sk = document.getElementById("sk");
    sk.innerHTML = "";
}
function llend() {
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='茜茜因為不想跟博凱一樣而努力.jpg' >";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = '於是' + name + '就因為博凱的一句「再繼續混下去，會變跟我一樣喔！」而開始好好認真上課，未來一想耍廢的時候就會想到不能跟博凱一樣，所以自此之後的生活一直都很積極，真的是可喜可賀，可口可樂^.<！';
    typing(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}