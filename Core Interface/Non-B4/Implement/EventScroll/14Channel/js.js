document.addEventListener('DOMContentLoaded',function(){

    var check=false;
//Event scroll to position
window.addEventListener("scroll",function()
{
   var pos=this.window.pageYOffset;
   if(pos>=87){
       check=true;
       var e=document.querySelector("section.nav");
         e.classList.add("active");
   }else{
       check=false;
       var e=document.querySelector("section.nav");
       e.classList.remove("active");
   }
});

},false)