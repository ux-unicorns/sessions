const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const discover = document.querySelector('.intro');
// const intro = document.querySelector('.intro-picture');

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        discover && discover.classList.add("space");
        intro && (intro.style.top = "10em");
    } else{
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        discover && discover.classList.remove("space");
        intro && (intro.style.top = "0em");
    }
});