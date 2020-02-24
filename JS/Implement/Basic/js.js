//document ready
document.addEventListener('DOMContentLoaded',function(){
    var btn =document.querySelector("button");
 //addEventClick
 btn.addEventListener('click',function(){
  var Ecard= document.getElementsByClassName("row");
     Ecard[0].classList.toggle("change");
 });
},false)