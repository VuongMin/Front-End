$(function () {
    $('h1').on('click', function () {
        $(this).toggleClass('iconUp');
        $('.item p , .item div.listim').toggle();

    });
    
   $('.item p , .item div.listimg').slideUp();
 
    
     
});