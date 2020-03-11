$(function () {
 
  $('.darboard-btn').on('click',function(){
    //btn process
    var btnActive=$('.darboard-btn.active');
    var idClick=$(this).attr("data-idx");
    var idActive=$(btnActive).attr("data-idx");
    //slide process
     var slides=$('.slide-1item');
    if(idClick > idActive ){  
       $($(slides)[idClick]).addClass('slide-in_rtf');
       $($(slides)[idActive]).addClass('slide-out_rtf').one('webkitAnimationEnd',function(){
        $($(slides)[idClick]).removeClass('slide-in_rtf');
        $($(slides)[idActive]).removeClass('slide-out_rtf').removeClass('active');
        $($(slides)[idClick]).addClass('active');  
      }); 
    }else if(idClick<idActive){
      $($(slides)[idClick]).addClass('slide-in_tr').addClass('active');
      $($(slides)[idActive]).addClass('slide-out-tr').removeClass('active').one('webkitAnimationEnd',function(){
        $($(slides)[idActive]).removeClass('slide-out-tr');
        $($(slides)[idClick]).removeClass('slide-in_tr');
      });
    }
    //btn change active
    $(btnActive).removeClass('active');
    $(this).addClass('active');
  });

});