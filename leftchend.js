function chend1() {//我的改變你看的見end
    i = 0;
    stop = 0;

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵跟寬寬親密的樣子.jpg' >";

    let na = document.getElementById("name");
    na.setAttribute("type", "hidden");
    var name = document.getElementById("name").value;

    str = '電影開始了，' + name + '看涵涵跟學長這麼親密的樣子真的很不是滋味。';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", chend2, false);
}
function chend2() {//我的改變你看的見end
    
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵跟寬寬親密的樣子.jpg' >";
    str = '電影台詞：「愛情如果可以解釋的話，那世界上就不會有人因此而痛苦了。」<br>是阿，要是能解釋的話，我就能找到辦法，不要因為寬寬學長而這麼痛苦了。';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", chend3, false);
}
function chend3() {//我的改變你看的見end
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵跟寬寬親密的樣子.jpg' >";
    str = '喜歡一個沒辦法得到的人真的好累...(開始啜泣)(越哭越大聲)<br>我也想要得到學長多一點的關心，那怕只是一點點都好...(哭哭)';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", chend4, false);
}
function chend4() {//我的改變你看的見end
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='涵涵跟寬寬親密的樣子.jpg' >";
    str = '(涵涵轉頭，微微笑著遞了張衛生紙過來)';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", chend5, false);
}
function chend5() {//我的改變你看的見end
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='(bb)我的改變，你看的見.jpg' >";

    str = '我好像懂為什麼學長會喜歡涵涵而不是我了...誰會喜歡跟我一樣自以為是又一直騷擾別人的人啊！我也要跟涵涵學習!!!!!!!總有一天，我也要努力變成涵涵那個樣子，除了會打程式、人又溫柔！但在寬寬學長還沒結婚之前，我都不會放棄的！我的改變，寬寬，你 看 的 見！';
    typing(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}