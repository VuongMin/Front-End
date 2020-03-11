$(function () {
    $('.pageBody').isotope({
        // options
        itemSelector: '.pageBody-item',
        layoutMode: 'fitRows'
      });

      // // filter
      // $('nav li').on('click',function(){
      //    var li_text=$(this).text();
      //     li_text= li_text.substring(li_text.length-2,li_text.length);
      //      $('.pageBody-item').each(function (index, element) {
      //        // element == this
      //       var gruopname= $(this).attr('data-gruop');
      //       console.log(li_text); console.log(' - '+ gruopname);
            
            
      //       if(li_text==gruopname){
      //         $(this).fadeIn();
      //       }else{
      //         $(this).fadeOut();
      //       }
      
             
      //      });
      //      return false;
      // });
});

