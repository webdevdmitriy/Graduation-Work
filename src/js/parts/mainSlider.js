 
 export default function mainSlider () {

     // main-слайдер
 let slides = document.querySelectorAll('.main-slider-item'),
 slideIndex = 1;

 function showSlides(n) {

     slides.forEach( (item) => item.style.display = 'none');
     slides[slideIndex - 1].style.display = 'block';
     slides[slideIndex - 1].className = 'animated slideInDown';
 }
 showSlides(slideIndex);

 let  plusSlides = (n) => showSlides(slideIndex += n);
 let animate = () => slideIndex <= 1 ? plusSlides(1) : plusSlides(-1); 

 setInterval(animate, 4000);

 }
