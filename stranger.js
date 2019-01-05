function P() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='叫我致瑋哥吧，我們先去吃大餐再帶妳去買衣服好了，妳那麼漂亮應該要多穿一點制服以外的衣服.jpg' >";
    var name = document.getElementById("name").value;
    str = name + '：好啊！要去哪裡玩呢？我喜歡吃牛排！<br>大叔：叫我致瑋哥吧，我們先去吃大餐再帶妳去買衣服好了，妳那麼漂亮應該要多穿一點制服以外的衣服。';
    typing_con(str);

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='叫我致瑋哥吧，我們先去吃大餐再帶妳去買衣服好了，妳那麼漂亮應該要多穿一點制服以外的衣服.jpg' >";

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", P_1, false);
}
function P_1() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '在餐廳裡，致瑋哥對他照顧的無微不至，注意到餐廳冷氣太冷，把外套給' + name + '蓋腿，替' + name + '點了最貴的套餐，種種行為讓' + name + '漸漸卸下了心防';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", P_2, false);
}
function P_2() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";

    var name = document.getElementById("name").value;
    str = '當' + name + '穿著致瑋哥送的衣服，手上提著一大堆禮物，她已經對致瑋哥沒戒心了，所以當致瑋哥邀他去他家時，他毫無猶豫地跟過去了...';
    typing_con(str);

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='skip' class='button_skip'>";
    sk.addEventListener("click", P_end, false);
}
function P_end() {
    i = 0;

    var two = document.getElementById("two");
    two.innerHTML = "<div id='word' class='story'></div>";
    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='自從茜茜翹課那天，已經過了兩個月了，茜茜的家人一直找不到她，但相隔兩條街的房子裡有一個地下暗室，他們的茜茜就在散落在那裏.jpg' >";
    var name = document.getElementById("name").value;
    str = '自從' + name + '翹課那天，已經過了兩個月了，' + name + '的家人一直找不到她，但相隔兩條街的房子裡有一個地下暗室，他們的' + name + '就在散落在那裏...<br>不能亂跟陌生人講話喔...';
    typing(str);

    var hello = document.getElementById("hello");
    hello.innerHTML = "<img src='自從茜茜翹課那天，已經過了兩個月了，茜茜的家人一直找不到她，但相隔兩條街的房子裡有一個地下暗室，他們的茜茜就在散落在那裏.jpg' >";

    var sk = document.getElementById("sk");
    sk.innerHTML = "<input type='button' id = 'skip'  value='restart' class='btn-3d purple' onclick='reloadPage()' >";
}
