



const cc=document.querySelector('.navbar');
const addd=document.querySelector('.top-nav');

window.addEventListener('scroll',() => {
 /* تعريف متغير */
    var d = 60 - window.scrollY;
    if( window.scrollY < 60){
    
      cc.style='top : '+ d +'px !important'; 
    }
    else if(window.scrollY >= 60){
        /* عند السكرول لقيمة اضغر من60 اجعل قيمة توب 0 للناف  */ 
        cc.style='top : '+ 0 +'px !important';
        addd.classList.add('display')  ;
    }
    /* اضافة الكلاس الذي يقوم بتفير الخلفية عند الوصول للقيمة 0 */
    if(window.scrollY >= 60){
        cc.classList.add('navbar-scrool');
     

    } /*ايضا عند الوصول للقيمة اصغر من 60  يقوم باضافة الكلاس  الذي يحذف الديف الاول */
    else if( window.scrollY < 60){
        addd.classList.remove('display');
        cc.classList.remove('navbar-scrool');

    }

})







/* طريقة تانية بدون عداد لانقاص top */

/* 

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 60) {
      
        cc.classList.add('navbar-scrool');
       
       addd.classList.add('display');
    
       cc.classList.add('toop');
    };
    else{
        cc.classlist.remove('navbar-scrool')
    }
   })



*/



