$(document).ready(function () { //**// ready 確認JQ載入後才執行以下JS程式碼

    //jq1_1
    $("h1.jq1_1").hide();

    //jq2_1
    $(".jq2_1 h2").css("color", "#999");

    //jq2_2
    $(".jq2_2 input").click(function (e) {
        //e.preventDefault();
        $(".jq2_2 h2").hide(3000);
    });

    //jq2_3
    $(".jq2_3 input").click(function (e) {
        //e.preventDefault();
        $(".jq2_3 h2, .jq2_3 p").toggle(2000);
    });

    //jq3_1
    $(".jq3_1>input").click(function (e) {
        //e.preventDefault();
        $(".jq3_1>div").slideToggle(3000);
    });

    //**// 使用jq做計算的方式對瀏覽器負荷過重（會執行塞值與做動畫）ex..slideToggle .fadeToggle()...

    //**// 使用class執行是較好的方式
    //jq3_2
    $(".jq3_2>input").click(function (e) {
        //e.preventDefault();
        $(".jq3_2").toggleClass("active");
    });

    //jq3_3 單純使用css控制

    //jq3_4
    //**// 鏈式
    $(".jq3_4 input").click(function (e) {
        //e.preventDefault();
        $(".jq3_4 div").fadeOut(1000).fadeIn(1000).slideUp(1000).slideDown(1000);
    });

    //jq4 event=操控瀏覽器產生的事件 ex.滾動 伸縮 點擊
    //??// .preventdefault()  href="javascript:void(0)"

    //jq4_1
    $(".jq4_1 > ul > li").click(function (e) {
        e.preventDefault(); //**// preventDefault() 是 原生 JavaScript 語法，非 jQuery語法
        $(this).addClass("active");
        $(this).children("ul").slideToggle(1000);
    });

    //jq4_2
    $(".jq4_2 input").click(function (e) {
        //e.preventDefault();
        $(".box1").delay(0).slideToggle(500);
        $(".box2").delay(1000).slideToggle(500);
        $(".box3").delay(2000).slideToggle(500);
    });

    //jq4_3
    $(".jq4_3 .big").click(function (e) {
        //e.preventDefault();
        $("article").css("font-size", "2rem");
    });
    $(".jq4_3 .normal").click(function (e) {
        //e.preventDefault();
        $("article").css("font-size", "1rem");
    });
    $(".jq4_3 .small").click(function (e) {
        //e.preventDefault();
        $("article").css("font-size", "0.8rem");
    });

    //jq4_4
    $(".jq4_4 span").click(function (e) {
        //e.preventDefault();
        $(".jq4_4").fadeOut();
    });

    //jq4_5
    //**// .stop()取消目前正在執行的動畫效果..(當調用.stop()的時候，隊列中的下一個動畫立即開始)
    $(".jq4_5 input").click(function (e) {
        //e.preventDefault();
        $(".jq4_5 div").toggleClass("active");
    });

    //jq4_5_2
    $(".jq4_5_2 input").click(function (e) {
        //e.preventDefault();
        $(".jq4_5_2 div").stop().slideToggle(3000);
    });

    //jq4_6
    $(".navBtn").click(function (e) {
        //e.preventDefault();
        $(".jq4_6").toggleClass("navAction");
    });

    //jq4_7
    //$(".jq4_7 input").click(function (e) { 
    //    //e.preventDefault();
    //    $(".jq4_7 h1").addClass("animated bounce");
    //});

    //jq4_7_2
    //$(".jq4_7 input").on("click", function () {
    //    $(".jq4_7 h1").addClass("animated bounce").one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function (e) {
    //        $(this).removeClass("animated bounce");
    //    });
    //});

    //jq4_7_3
    var jq4_7_3animated = "animated bounce";
    var animationend = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";
    $(".jq4_7 input").click(function (e) {
        //e.preventDefault();
        $(".jq4_7 h1").addClass(jq4_7_3animated).one(animationend, function (e) {
            $(this).removeClass(jq4_7_3animated);
        });
    });

    //jq5_1 //**// .siblings() 同層的其他元素
    $(".jq5_1 h3").click(function (e) {
        //e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    });

    //jq5_2 //**// .find()子元素
    $(".jq5_2 div").click(function (e) {
        //e.preventDefault();
        $(this).find("h3").toggleClass("active");
    });

    //jq5_3
    $(".jq5_3 h3").click(function (e) {
        //e.preventDefault();
        $(this).toggleClass("active");
        $(this).parent().find("p").slideToggle();
        $(this).parent().siblings().find("h3").removeClass("active");
        $(this).parent().siblings().find("p").slideUp();
    });

    //jq5_4
    $(".firstFloor a").click(function (e) {
        e.preventDefault();
        $(this).parent().find("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
    });

    //jq5_5
    $(".jq5_5 p").text(".text()文字");
    $(".jq5_5").append("<h2>.append()保留原本內容再加上動態載入標籤（Elements）內容</h2>");
    //jq5_5_2 //**// .html()清空再加上內容
    $(".jq5_5_2").html("<h2>.html() Elements + word （清空再加上內容） </h2>");

    //jq5_6 //**//因jq寫的順序是先尋找與綁定h1的click事件，之後才將新的h1動態寫入html內
    $(".jq5_6 h1").click(function (e) {
        //e.preventDefault();
        alert("click有效果～");
    });
    $(".jq5_6").append("<h1>動態寫入的文字>>click無效～</h1>");

    //jq5_6_2 //**// .on()監聽 //**// $("監聽範圍").on("events", "被監聽的元素", function () {
    $(".jq5_6_2").on("click", "h1, h2", function () {
        alert("alert 成功！");
    });
    $(".jq5_6_2").append("<h1>動態寫入的文字～</h1>");
    $(".jq5_6_2").append("<h2>動態寫入的文字～</h2>");

    //jq6_1 //**// 修改屬性
    $(".jq6_1 img").attr("src", "http://www.idlewilddigital.com/sites/default/files/jQurery_0.gif")
        .attr("width", "300").attr("title", ".attr()").attr("alt", ".attr()");

    //6_2 //**// 若只是在畫面上看不見，當資料傳送至後端時就會有問題，使用.remove()連同html一併刪除！
    $(".jq6_2 .remove").click(function (e) {
        //e.preventDefault();
        $(this).parent().parent().remove();
    });

    //6_3 //**//所有用於動畫的屬性必須是數字 ex.width, height, left 一些非樣式的屬性，如scrollTop, scrollLeft
    $(".goToTop").click(function (e) { 
        //e.preventDefault();
        $("html,body").animate({
           scrollTop:0,
        }, 1500); //持續的毫秒數值
    });

    //6_4 //**// 選擇指定屬性是以給定值結尾的元素（有區分大小寫）
    $("p[class$=Img]").addClass("far fa-file-image");
    $("p[class$=Vedio]").addClass("far fa-file-video");
    $("p[class$=Pdf]").addClass("far fa-file-pdf");
});