const cc=document.querySelector('.navbar');
const remov=document.querySelector('top-nav')
window.addEventListener('scroll', () =>{
    if (window.scrollY >= 56) {
        cc.classList.add('navbar-scrool');
        remov.classList.remove('top-nav')
    }else{
        cc.classList.remove('navbar-scrool')
    }

}
)
    