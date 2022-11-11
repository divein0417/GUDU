
$(function(){
  //GNB 슬라이드다운 메뉴
    $("#gnb>li").click(function(){
        if ($(this).children(".sub").css("display") == 'none') {
            $('.sub').slideDown();
        }else{
            $('.sub').slideUp();
        }
    });

  //TOP 버튼
  $(".top_btn").click(function(){
   let loc = $("body").offset().top;
   window.scrollTo({top:loc, behavior:"smooth"});
  });

  //
})