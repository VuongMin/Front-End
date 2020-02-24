$(function () {
    
  $('.register').click(function (e) { 
      e.preventDefault();
       $('.layer01.res').animate({
          marginLeft:-100,
          opacity:0
       });
       $('.layer01.sign').animate({
        marginLeft:0,
        opacity:1
     });
  });
  $('.sign').click(function (e) { 
    e.preventDefault();
     $('.layer01.sign').animate({
        marginLeft:-100,
        opacity:0
     });
     $('.layer01.res').animate({
        marginLeft:0,
        opacity:1
     });
});
});