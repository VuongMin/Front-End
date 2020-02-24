
     // This is code of Javascript Native

    // var zoomOut=document.querySelectorAll('.collapse-item');
    // zoomOut.forEach(element => {
    //       element.addEventListener('click',function(){
    //           element.classList.toggle('zoomOut');  
    //       });
                   
    // });  
   
    //This is Jquery
    $(function () {
        var Eclick=$('.collapse-item');
        $.each(Eclick, function (indexInArray, valueOfElement) {
            $(valueOfElement).on('click',function(){
               
               $(this).toggleClass('zoomOut');
            }) ;
        });
        
    });
