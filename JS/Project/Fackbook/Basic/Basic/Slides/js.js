var ListSlide= document.querySelectorAll('.item');
var idx=0;
var check=false;
//function
function eventBtnnext(){
    if(check){return false;}
    check=true;
    var ECurrent= ListSlide[idx];
  if(idx<ListSlide.length){
      idx++;
      if(idx==ListSlide.length){
          idx=0;
      }
  }
  var Enext=ListSlide[idx];
  //end amination
  var count=0;
  ECurrent.addEventListener('animationend',function(){
         this.classList.remove('active');
         this.classList.remove('clost');
         count++;
         if(count==2){check=false;}

        
  });
  Enext.addEventListener('animationend',function(){
      this.classList.add('active');
      this.classList.remove('in');
      count++;
      if(count==2){check=false;}
  });
 ECurrent.classList.add('clost');
 Enext.classList.add('in');
  

}
function eventPre(){
    if(check){return false;}
    check=true;
    var current=ListSlide[idx];
    var prev=null;
    if(idx<=0){
        prev=ListSlide[ListSlide.length-1];
        idx=ListSlide.length -1;
    }else{
        prev=ListSlide[--idx];
    }
    var countPre=0;
   current.classList.add('preclose');
   prev.classList.add('prein');
   current.addEventListener('animationend',function(){
          this.classList.remove('preclose');
          this.classList.remove('active');
          countPre ++;
          if(countPre==2){
              check=false;
          }
   }) ;
   prev.addEventListener('animationend',function(){
        this.classList.add('active');
        this.classList.remove('prein');
        countPre++;
        if(countPre==2){
            check=false;
        }
   });
}
//Event click button
var next =document.querySelector('.next');

next.addEventListener('click',eventBtnnext);
var pre=document.querySelector('.pre');
pre.addEventListener('click',eventPre);
