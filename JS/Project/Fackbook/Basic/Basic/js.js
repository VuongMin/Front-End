//document ready
document.addEventListener('DOMContentLoaded',function(){
 
    var ul = document.querySelector("ul.menu");
    var btn=document.getElementsByClassName("menu");//return 1 array
    btn[0].addEventListener("click",function(){
         ul.classList.toggle("show");
    });

},false)