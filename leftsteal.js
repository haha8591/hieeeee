function E_1() {//和學姊搶男人
    i = 0;
    stop = 0;
    //step = 19;
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'E_12'  value='約學長去看比悲傷更悲傷的故事' class='button_select1'>"
        + "<input type='button' id = 'E_22'  value='買添好茶喝' class='button_select2'>"
        + "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='在這之後茜茜一直以各種理由約寬寬學長出門，今天要約寬寬去哪呢.jpg' >";
    str = '那要約學長做什麼呢?';
    typing_con(str);

    var E_12 = document.getElementById("E_12");//movie
    E_12.addEventListener("click", movie, false);

    var E_22 = document.getElementById("E_22");//tea
    E_22.addEventListener("click", tea, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";//移除skip
}
function tea() {
    i = 0;
    stop = 0;
    //step = 22;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='肥胖版茜茜.jpg' >";
    str = '妳都這麼胖了還喝，重新給妳一次機會選喔!';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", E_1, false);

}
function movie() {/////movie
    i = 0;
    stop = 0;
    //step = 20;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='在這之後茜茜一直以各種理由約寬寬學長出門，今天要約寬寬去哪呢.jpg' >";

    var name = document.getElementById("name").value;////名字
    str = name + '：學長學長，我買了兩張電影票了，我們一起去看最近很紅的電影吧!<br>寬寬：那妳票借我看一下可以嗎？(伸手遞電影票)';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", moviea, false);

}
function moviea() {/////movie
    i = 0;
    stop = 0;
    //step = 21;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='是涵涵學姐唷.jpg' >";

    str = '寬寬接起電話說：涵涵~~~~對阿對阿我們等下一起去看電影吧<3!<br>寬寬：學妹謝囉，呵呵^.< 886';
    typing_con(str);
    
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", movieb, false);
}
function movieb() {/////movie
    i = 0;
    stop = 0;
    //step = 22;
    
    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'changeend'  value='再買一張票坐在他們兩個後面' class='button_select1'>"
        + "<input type='button' id = 'run'  value='跑過去死命拉著學長不讓他走' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='沒想到……學長竟然這麼過分……(心碎)我一定要報仇.jpg' >";

    str = '沒想到......學長竟然這麼過分......(心碎)<br>我一定要報仇!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';

    typing_con(str);
    var sk = document.getElementById("sk");
    sk.innerHTML = "";

    var changeend = document.getElementById("changeend");//買票坐後面
    changeend.addEventListener("click", chend1, false);

    var run = document.getElementById("run");//不讓學長走
    run.addEventListener("click", cc, false);
}

function cc() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 28;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='(抱上去)我不放，寬寬，我知道你對我有意思.jpg' >";

    var name = document.getElementById("name").value;
    str = name + '：學長，拜託，我想跟你一起看電影！<br>寬寬：放開我！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc2, false);
}
function cc2() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 29;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = '(抱上去)' + name + '：我不放！我不放！我能感受出來你其實多少對我有意思的，對吧！但你怕的是被其他人說閒話對嗎？學長，告訴你，為了你，我什麼都不怕。就算大家說我賤、說我搶男人，我都不怕，我怕的...只有我不能跟你在一起...';
    typing_con(str);
    
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc3, false);
}
function cc3() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 30;
    
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    str = '(沉默許久)';
    typing_con(str);
    
    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc4, false);
}
function cc4() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 31;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    str = '寬寬：對，我其實也很喜歡妳，但我不能辜負涵涵，對不起！(轉身離開)';
    typing_con(str);

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='對，我其實也很喜歡妳，但我不能辜負涵涵，對不起！(轉身離開.jpg' >";

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc5, false);
}
function cc5() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 32;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='轉場.png' >";

    str = '隔天上學的時候，感覺大家都在對我指指點點。';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc6, false);
}
function cc6() {//死命抓學長
    i = 0;
    stop = 0;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='阿莉阿朱竊竊私語.jpg' >";
    str = '阿莉同學：欸欸欸妳們有聽說嗎，寬寬出軌ㄟ，天啊，誇張，爛男人！<br>阿朱同學：真假！好扯喔！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc7, false);
}
function cc7() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 34;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    str = '為什麼今天到處都充斥著這種奇怪的謠言呢？';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc8, false);
}
function cc8() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 35;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵：茜茜，妳給我出來把話說清楚。.jpg' >";
    str = '涵涵：' + name + '，妳給我出來把話說清楚。<br>涵涵：是不是妳要寬寬跟我分手的？';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc9, false);
}
function cc9() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 36;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = name + '：我…我沒有阿！<br>涵涵：妳騙人！不然他怎麼昨天一看完電影就說要跟我分手？妳這個賤人！';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc10, false);
}
function cc10() {//死命抓學長
    i = 0;
    stop = 0;
    //step = 37;

    var two = document.getElementById("two");
    two.innerHTML = "<input type='button' id = 'cc11'  value='好啦假掰一下追她' class='button_select1'>"
        + "<input type='button' id = 'cc22'  value='趕快趁機勾好學長的手' class='button_select2'>"
        + "<div id='word' class='story'></div>";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵：你們這對狗男女，不得好死！涵涵哭著跑了.jpg' >";
    str = '(寬寬學長突然現身)<br>寬寬：涵涵，我說了不是她的問題，是我自己喜歡上她了，她沒有逼我們分手。<br>涵涵：你們這對狗男女，不得好死！<br>涵涵哭著離開學校，要追出去嗎？';
    typing_con(str);

    var cc11 = document.getElementById("cc11");//回去
    cc11.addEventListener("click", cc12, false);

    var cc22 = document.getElementById("cc22"); //讓他睡死
    cc22.addEventListener("click", dd, false);

    var sk = document.getElementById("sk");
    sk.innerHTML = "";

}
function cc12() {
    i = 0;
    stop = 0;
    //step = 38;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    str = '是87ㄇ善良不是這時候用的，學長都在眼前了妳給我趕快修成正果';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", cc10, false);
}
function dd() {
    i = 0;
    stop = 0;
    //step = 39;
    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    str = '趕快趁機勾好學長的手，終於追到寬寬了<3 !';
    typing_con(str);

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='(抱上去)我不放，寬寬，我知道你對我有意思.jpg' >";

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ddend, false);
}
function ddend() {
    i = 0;
    stop = 0;
    //step = 40;

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='(dd)之後，學校的罵聲不斷，寬寬承受不了這樣的打擊，最後還是跟我提分手了。.jpg' >";

    str = '之後，學校的罵聲不斷，寬寬承受不了這樣的打擊，最後還是跟我提分手了。<br>我決定以後還是靠自己！我再也不相信男人了！';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", ddend1, false);
}
function ddend1() {
    i = 0;
    stop = 0;
    //step = 41;
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='頂樓的風也太涼爽了吧.jpg' >";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = name + '說她再也不相信男人了，你相信嗎?';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
