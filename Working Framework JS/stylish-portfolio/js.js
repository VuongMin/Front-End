$(function () {
    $('section.banner i').on('click',function(){
          $('nav').addClass('motion');
    });
    $('.nav-item').on('click',function(e){
        e.preventDefault();
        if($(this).text() == "Home"){
            ScrollTo(0);
        }else if($(this).text()=="About"){ 
            ScrollTo($('section.about').offset().top);
        }else if($(this).text()=="services"){
            ScrollTo($('section.services').offset().top);
        }
    })
});
function ScrollTo(target){    
       $('html,body').animate({scrollTop:target},1000,"easeOutCirc");
}