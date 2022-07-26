

 /*$.ajax({
    method:"GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{query:"셀러",size:50},
    headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('.slide_item');

        for (var i = 0; i < boxs.length; i++) {

            $(".slide-wrapper1 >.slide_item").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".slide-wrapper1 >.slide_item").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
            $(".slide-wrapper1 > .slide_item").eq(i).append("<h4>" +msg.documents[i].authors+ "</h4>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }
    });*/