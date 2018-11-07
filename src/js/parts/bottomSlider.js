export default function bottomSlider () {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
//нижний слайдер

let slides2 =document.querySelectorAll('.feedback-slider-item'),
slideIndex2 = 1,
prev = document.querySelector('.main-prev-btn'),
next = document.querySelector('.main-next-btn'),
feedbackSlider = document.querySelector('.feedback-slider');

showSlides2(slideIndex2);

function showSlides2(n) {
    
    if (n > slides2.length) {
        slideIndex2 = 1 ;
    }
    if (n < 1) {
        slideIndex2 = slides2.length ;
    }

    slides2.forEach( (item) => item.style.display = 'none');
    slides2[slideIndex2 - 1].style.display = 'flex';
    slides2[slideIndex2 - 1].className = 'animated fadeInRight';
    
}

let  plusSlides2 = (n) => showSlides2(slideIndex2 += n);


prev.addEventListener('click', () =>  {
    plusSlides2(-1) ;
    slides2[slideIndex2 - 1].className = 'animated fadeInLeft';
   
});
next.addEventListener('click', () => {
    plusSlides2(1);
    slides2[slideIndex2 - 1].className = 'animated fadeInRight';
  
}) ;

let animate2 = () => {
    plusSlides2(1);
    slides2[slideIndex2 - 1].className = 'animated fadeInRight';

};

let timer = setInterval(animate2, 4000);

feedbackSlider.addEventListener('mouseenter', (event) => {
    
    let target = event.target;
    if (target && target.classList.contains('feedback-slider')) {
        clearTimeout(timer);
        clearTimeout(timer2); 
    }
    
});

let timer2;

feedbackSlider.addEventListener('mouseleave', (event) => {
    
    let target = event.target;
    if (target && target.classList.contains('feedback-slider')) {

        timer2 = setInterval(animate2, 4000);
    }
    
});
    
 }