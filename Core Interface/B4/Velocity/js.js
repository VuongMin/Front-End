var menu=document.querySelector('header nav');
var Push=document.querySelector('.row.push-Top');
window.addEventListener('scroll',function(){
 if(this.document.body.scrollTop>100){
      menu.classList.add('header--changeBg');
      Push.classList.add('show_push');

 }else if(this.document.body.scrollTop<100){
     menu.classList.remove('header--changeBg');
     Push.classList.remove('show_push');
 }
 
});
Push.addEventListener('click',function(){
  window.scrollTo(0,0);
  return false;
});