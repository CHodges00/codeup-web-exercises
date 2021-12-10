const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.toggle('open');
        menuOpen = true;
    }else{
        menuBtn.classList.toggle('open');
        menuOpen = false;
    }
})