
// book list 1번째 "베스트셀러"
$ .ajax({
    method:"GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{query:"베스트셀러",size:50},
    headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

})
.done(function(msg){
    //for 문 (7개)
    var list=document.getElementsByClassName('list1');

    for(var i=0; i<list.length; i++){
        
        $(".list1").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

        var title = msg.documents[i].title;
        var title_c= title.substring(i,10);

        $(".list1").eq(i).append("<h3>"+'<a href="sub_book13.html">'+msg.documents[i].title+"</a>"+"</h3>");

        $(".list1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
        var str=msg.documents[i].contents;
    
        $(".list1").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  
    }
})


// *book list 2번째 "신긴"*
        $ .ajax({
        method:"GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{query:"NEW",size:50},
        headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

        })
        .done(function(msg){
        //for 문 (7개)
        var list=document.getElementsByClassName('list2');

        for(var i=0; i<list.length; i++){

        $(".list2").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".list2").eq(i).append("<h3>"+'<a href="sub_book13.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".list2").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;

        $(".list2").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  
        }
        })


/* book list 3번째 "판타지BEST"*/
            $ .ajax({
            method:"GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data:{query:"판타지",size:50},
            headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

            })
            .done(function(msg){
            //for 문 (7개)
            var list=document.getElementsByClassName('list3');

            for(var i=0; i<list.length; i++){
                
                $(".list3").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
                $(".list3").eq(i).append("<h3>"+'<a href="sub_book13.html">'+msg.documents[i].title+"</a>"+"</h3>");
                $(".list3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

                var str=msg.documents[i].contents;

                $(".list3").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  
            }
            })


/* book list 4번째 "김영하 작가 시리즈 "*/
    $ .ajax({
                method:"GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data:{query:"김영하",size:50},
                headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

            })
                .done(function(msg){
                //for 문 (7개)
                var list=document.getElementsByClassName('list4');

            for(var i=0; i<list.length; i++){

            $(".list4").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $(".list4").eq(i).append("<h3>"+'<a href="sub_book13.html">'+msg.documents[i].title+"</a>"+"</h3>");
            $(".list4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

            var str=msg.documents[i].contents;

            $(".list4").eq(i).append('<a href="#" class="btn">'+"click"+"</a>");  
            }
            })
