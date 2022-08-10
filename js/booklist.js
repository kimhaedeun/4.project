
// book list 1번째 "베스트셀러"
$ .ajax({
    method:"GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{query:"셀러",size:50},
    headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

})
.done(function(msg){
    //for 문 (7개)
    var list=document.getElementsByClassName('list1');

    for(var i=0; i<list.length; i++){
        
        $(".list1").eq(i).append('<a href="detail.book.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");


        var str = msg.documents[i].title;
        var str2 = str.substring(0,17);
        $(".list1").eq(i).append("<h3>"+'<a href="detail.book.html">'+str2+"</a>"+"</h3>");
    
        

        $(".list1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
        var str=msg.documents[i].contents;
    
      
    }
})


// *book list 2번째 "신긴"*
        $ .ajax({
        method:"GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{query:"new",size:50},
        headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

        })
        .done(function(msg){
        //for 문 (7개)
        var list=document.getElementsByClassName('list2');

        for(var i=0; i<list.length; i++){

        $(".list2").eq(i).append('<a href="detail.book.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

        var str = msg.documents[i].title;
        var str2 = str.substring(0, 15);
        $(".list2").eq(i).append("<h3>"+'<a href="detail.book.html">'+str2+"</a>"+"</h3>");

        var trr = msg.documents[i].authors;
        var trr2 = str.substring(0,20);
        $(".list2").eq(i).append("<h6>"+trr2+"</h6>");

       
        }
        })


/* book list 3번째 "판타지BEST"*/
            $ .ajax({
            method:"GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data:{query:"인문학",size:50},
            headers:{Authorization: "KakaoAK 3e2d6e6c457a4ca589f788c6ad891ab5"}

            })
            .done(function(msg){
            //for 문 (7개)
            var list=document.getElementsByClassName('list3');

            for(var i=0; i<list.length; i++){
                
                $(".list3").eq(i).append('<a href="detail.book.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
               
                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);
                $(".list3").eq(i).append("<h3>"+'<a href="detail.book.html">'+str2+"</a>"+"</h3>");
                $(".list3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

       
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

            $(".list4").eq(i).append('<a href="detail.book.html">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
            $(".list4").eq(i).append("<h3>"+'<a href="detail.book.html">'+str2+"</a>"+"</h3>");
            $(".list4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

         
            }
            });

    //
        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "작별인사" },
          headers: { Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526" }
        })
          .done(function (msg) {
            console.log(msg.documents[1].title);
            console.log(msg.documents[1].thumbnail);
  
            // sub1
            $(".tit").append("<h3>" + msg.documents[0].title + "</h3>");
            $(".aut").append("<h6>" + msg.documents[0].authors[0] + "</h6>");            
          
          });
  
        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
        $(function () {
          $.get("./txt/box7.txt", function (data) {
            $(".box7").html(data);
          })
  
        });

        $(function () {
          $.get("./txt/box9.txt", function (data) {
            $(".box9").html(data);
          })
  
        });

      