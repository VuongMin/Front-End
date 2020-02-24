$(function () {
 init();
 $('#collapsibleNavId a.about-us').on('click',function(){
    srollTo($('section.about-us'));
 });
 $('#collapsibleNavId a.services').on('click',function(){
    srollTo($('section.service'));
 });
 $('#collapsibleNavId a.profolio').on('click',function(){
    srollTo($('section.Portfolio'));
 });
 //porofilo 
  $('.portfolito-ul li').on('click',function(e){
    e.preventDefault();
        var text=$(this).text();
        if(text=="app"){
          
        }
        
  })
});

function srollTo( target,effect=null){
    $('html,body').animate({
        scrollTop: $(target).offset().top - 100
     },1000,effect);
     
}
function init(){
    $(window).scroll(function () { 
        if($(window)[0].pageYOffset!=0){
            $('nav').removeClass('plusWidth');
        }else{ $('nav').addClass('plusWidth')}
         
     });
}