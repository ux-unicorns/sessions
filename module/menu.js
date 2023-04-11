const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const discover = document.querySelector('.intro');
const herosection = 

burger.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        discover && discover.classList.add("space");
    } else{
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        discover && discover.classList.remove("space");
    }
});