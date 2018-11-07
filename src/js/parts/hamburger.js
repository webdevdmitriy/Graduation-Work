export default function hamburger () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
// Гамбургер меню

let burger = document.querySelector('.burger'),
burgerMenu = document.querySelector('.burger-menu'),
header =  document.querySelector('.header');
 
burgerMenu.style.display = 'none';

header.addEventListener('click', (event) => {
   let target = event.target;
   if (target && target.hasAttribute('src') && window.innerWidth < 768 &&  burgerMenu.style.display == 'none') {
       burgerMenu.style.display = 'block';
   } else if (target && target.hasAttribute('src') && window.innerWidth < 768 && burgerMenu.style.display == 'block') {
       burgerMenu.style.display = 'none';
   }
   
});

window.addEventListener('resize', () => {
   if (window.innerWidth > 768) {
       burgerMenu.style.display = 'none';
   }
});

 }