//
    $(function(){
        $('.text_wrap').css("transform","translateY(0px)").css("opacity","1");

        $(window).scroll(function(){
            var ws=$(this).scrollTop();

            if(ws>300){
                $('.text_wrap').css("transform","translateY(0px)").css("opacity","1");
            }

        });
    });



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "주식" },
    headers: { Authorization:  "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper1 > .slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var str =msg.documents[i].title;
            var str2=str.substring(0,30);
            $(".slide-wrapper1 > .slide_item").eq(i).append("<h3>" + '<a href="">' + str2 + "</a>" + "</h3>");
            
            $(".slide-wrapper1 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영어" },
    headers: { Authorization:  "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper2 > .slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var str =msg.documents[i].title;
            var str2=str.substring(0,30);
            $(".slide-wrapper2 > .slide_item").eq(i).append("<h3>" + '<a href="">' + str2 + "</a>" + "</h3>");
            $(".slide-wrapper2 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고전" },
    headers: { Authorization:  "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper3 > .slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

             var str =msg.documents[i].title;
            var str2=str.substring(0,30);
            $(".slide-wrapper3 > .slide_item").eq(i).append("<h3>" + '<a href="">' + str2 + "</a>" + "</h3>");
            $(".slide-wrapper3 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인테리어" },
    headers: { Authorization:  "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper4 > .slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            
            var str =msg.documents[i].title;
            var str2=str.substring(0,30);
            $(".slide-wrapper4 > .slide_item").eq(i).append("<h3>" + '<a href="">' + str2 + "</a>" + "</h3>");
            $(".slide-wrapper4 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });

    $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트" },
    headers: { Authorization:  "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper5 > .slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            var str =msg.documents[i].title;
            var str2=str.substring(0,30);
            $(".slide-wrapper5 > .slide_item").eq(i).append("<h3>" + '<a href="">' + str2 + "</a>" + "</h3>");
            $(".slide-wrapper5 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });


//

            
$(window).on("scroll",function(){
    var ms=$("body, html").offset().top -100;

    if($(window).scrollTop()>=ms){
        $('.slide-wrapper1').show();
        $('.slide-wrapper2').hide();
        $('.slide-wrapper3').hide();
        $('.slide-wrapper4').hide();
        $('.slide-wrapper5').hide();
    }
});

$(function(){
    $('.btn1>button').click(function(){
        $('.btn1>button').addClass("btn_active");
        $('.btn2>button , .btn3>button , .btn4>button , .btn5>button').removeClass("btn_active");
        $('.slide-wrapper1').show();
        $('.slide-wrapper2').hide();
        $('.slide-wrapper3').hide();
        $('.slide-wrapper4').hide();
        $('.slide-wrapper5').hide();

    });
    $('.btn2>button').click(function(){
        $('.btn2>button').addClass("btn_active");
        $('.btn1>button , .btn3>button , .btn4>button , .btn5>button').removeClass("btn_active");
        $('.slide-wrapper2').show();
        $('.slide-wrapper1').hide();
        $('.slide-wrapper3').hide();
        $('.slide-wrapper4').hide();
        $('.slide-wrapper5').hide();

    });
    $('.btn3>button').click(function(){
        $('.btn3>button').addClass("btn_active");
        $('.btn1>button , .btn2>button , .btn4>button , .btn5>button').removeClass("btn_active");
        $('.slide-wrapper3').show();
        $('.slide-wrapper1').hide();
        $('.slide-wrapper2').hide();
        $('.slide-wrapper4').hide();
        $('.slide-wrapper5').hide();

    });
    $('.btn4>button').click(function(){
        $('.btn4>button').addClass("btn_active");
        $('.btn1>button , .btn2>button , .btn3>button , .btn5>button').removeClass("btn_active");
        $('.slide-wrapper4').show();
        $('.slide-wrapper1').hide();
        $('.slide-wrapper2').hide();
        $('.slide-wrapper3').hide();
        $('.slide-wrapper5').hide();

    });
    $('.btn5>button').click(function(){
        $('.btn5>button').addClass("btn_active");
        $('.btn1>button , .btn2>button , .btn3>button , .btn4>button').removeClass("btn_active");
        $('.slide-wrapper5').show();
        $('.slide-wrapper1').hide();
        $('.slide-wrapper2').hide();
        $('.slide-wrapper3').hide();
        $('.slide-wrapper4').hide();

    });
})

//

           

$(function(){
    $('.audio_book').click(function(){
        $(this).addClass("tap_on");
        $('.viewer').removeClass("tap_on");
        $('.today').removeClass("tap_on");
        $('.content-audio').css("display","flex");
        $('.content-viwer , .content-today').css("display","contents");
    });
    $('.viewer').click(function(){
        $(this).addClass("tap_on");
        $('.audio_book').removeClass("tap_on");
        $('.today').removeClass("tap_on");
        $('.content-viwer').css("display","flex");
        $('.content-audio , .content-today').css("display","none");
    });
    $('.today').click(function(){
        $(this).addClass("tap_on");
        $('.audio_book').removeClass("tap_on");
        $('.viewer').removeClass("tap_on");
        $('.content-today').css("display","flex");
        $('.content-audio , .content-viwer').css("display","none");
    });
});



$(function(){
    $(".tap_btn > button:nth-of-type(1)").click(function(){
        $(".phone-contents>.phone_slide>img").animate({top:0},"fast");
        $(".p2").html("<b>하루의 시작과 마무리를 오디오북과 함께</b>" + "<br/>" + "지하철에서도, 잠들기 전에도 독서하세요");
        $(".tap_btn>button").removeClass("btn_phone");
        $(".t_btn1").addClass("btn_phone");
    });
    $(".tap_btn > button:nth-of-type(2)").click(function(){
        $(".phone-contents>.phone_slide>.v_img").animate({top:-740},"fast");
        $(".p2").html("귀로 듣다가 눈으로도 같이 보면" + "<br/>" + "더 내용이 잘 이해돼요");
        $(".tap_btn>button").removeClass("btn_phone");
        $(".t_btn2").addClass("btn_phone");
    });
    $(".tap_btn > button:nth-of-type(3)").click(function(){
        $(".phone-contents>.phone_slide>img").animate({top:-1480},"fast");
        $(".p2").html("30분만에 책 요약" + "<br/>" + "핵심만 쏙 골라 읽어주는 오디오북");
        $(".tap_btn>button").removeClass("btn_phone");
        $(".t_btn3").addClass("btn_phone");
    });
    $(".tap_btn > button:nth-of-type(4)").click(function(){
        $(".phone-contents>.phone_slide>img").animate({top:-2160},"fast");
        $(".p2").html("이제훈부터 옥주현까지" + "<br/>" + "셀럽이 읽어주는 오디오북");
        $(".tap_btn>button").removeClass("btn_phone");
        $(".t_btn4").addClass("btn_phone");
    });

});



$(function(){
$(".tap_btn > button:nth-of-type(1)").click(function(){
$(".phone-contents>.phone_slide> .v_img").animate({top:0},"fast");
$(".p2").html("<b>하루의 시작과 마무리를 오디오북과 함께</b>" + "<br/>" + "지하철에서도, 잠들기 전에도 독서하세요");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn1").addClass("btn_phone");
});
$(".tap_btn > button:nth-of-type(2)").click(function(){
$(".phone-contents>.phone_slide> .v_img").animate({top:-740},"fast");
$(".p2").html("<b>어느기기에서도 OK</b>" + "<br/>" + "스마트폰,태블릿,PC,E ink");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn2").addClass("btn_phone");
});
$(".tap_btn > button:nth-of-type(3)").click(function(){
$(".phone-contents>.phone_slide> .v_img").animate({top:-1480},"fast");
$(".p2").html("<b>다크모드</b>" + "<br/>" + "핵심만 쏙 골라 읽어주는 오디오북");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn3").addClass("btn_phone");
});
$(".tap_btn > button:nth-of-type(4)").click(function(){
$(".phone-contents>.phone_slide> .v_img").animate({top:-2160},"fast");
$(".p2").html("<b>자유로운 보기 설정</b>" + "<br/>" + "줄간격부터 폰트까지 내 마음대로 설정하면<br>더욱 편한 독서를 할 수 있어요");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn4").addClass("btn_phone");
});

});



$(function(){
$(".tap_btn > button:nth-of-type(1)").click(function(){
$(".phone-contents>.phone_slide>img").animate({top:0},"fast");
$(".p2").html("<b>당신을 위한 추천</b>" + "<br/>" + "키워드로 한 눈에 정리한 추천 도서");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn1").addClass("btn_phone");
});
$(".tap_btn > button:nth-of-type(2)").click(function(){
$(".phone-contents>.phone_slide>img").animate({top:-740},"fast");
$(".p2").html("<b>이럴 땐 이런 책</b>" + "<br/>" + "내 상황에 딱 맞는 회원들의 추천 책");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn2").addClass("btn_phone");
});
$(".tap_btn > button:nth-of-type(3)").click(function(){
$(".phone-contents>.phone_slide>img").animate({top:-1480},"fast");
$(".p2").html("<b>책-잇</b>" + "<br/>" + "책을 통해 트렌드와 문해력을 한번에!");
$(".tap_btn>button").removeClass("btn_phone");
$(".t_btn3").addClass("btn_phone");
});

});


//qn


$('.down').click(function(){
 $(this).parent().siblings().slideToggle();
})
