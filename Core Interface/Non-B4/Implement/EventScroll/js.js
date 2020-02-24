document.addEventListener('DOMContentLoaded',function(){
    //code 
    var check=false;
    window.addEventListener('scroll',function(){
        var x= this.parent.pageYOffset;
         if(x >=70)
         {
           //add class
           if(check==false){
            var e =document.querySelector("header");
            e.classList.add("extendblock");
            check=true;
           }
      
         }else if(x <= 140)
         {
           check=false;   
             var e =document.querySelector("header");
             e.classList.remove("extendblock");
         }
        
    })
},false)