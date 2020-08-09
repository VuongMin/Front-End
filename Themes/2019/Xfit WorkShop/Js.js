$(function () {
     MoveTo($('li.about'),$('section.about'),"easeInBounce");
     MoveTo($('li.codeches'),$('section.coaches'));
     MoveTo($('li.angeda'),$('section.note'));
     //SCROLL Header
     var numPre =0;
     $(window).scroll(function () { 
           
        
         if($(window)[0].pageYOffset > numPre){
               $('header').removeClass('headfixed');
               numPre = $(window)[0].pageYOffset;
         }else{
            $('header').addClass('headfixed');
            numPre = $(window)[0].pageYOffset;
         }
         
         
           
     });
     
});
function MoveTo(Eclick,Emoveto,animate = null)
{
      Eclick.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
             scrollTop: Emoveto.offset().top
           },2000, animate); // for 
     });     
}
