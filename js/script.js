window.addEventListener('DOMContentLoaded', () => { 

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

    // Модальные окна 

    let buttonOrder = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        popupContent= popupDesign.querySelector('.popup-dialog'),
        mainForm= popupDesign.querySelector('.form'),
        popupClose = document.querySelectorAll('.popup-close'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
       

        openModalOrder  = () => popupDesign.style.display = 'block',
        closeModalOrder = () => { 
            popupDesign.style.display = 'none';
            popupConsultation.style.display = 'none'; 
         } , 

        openModalConsultation = () => popupConsultation.style.display = 'block';


        
    buttonOrder.forEach( (item) => item.addEventListener('click', () => openModalOrder() ) );

    popupClose.forEach( (item) => item.addEventListener('click', () => closeModalOrder() ) );
    
    
    popupDesign.addEventListener('click', (e) =>  {

        if (e.target.classList.contains('popup-design') ) {
            closeModalOrder();
        }

    });

    buttonConsultation.forEach( (item) => item.addEventListener('click', () => openModalConsultation() ) );



    popupConsultation.addEventListener('click', (e) =>  {

        if (e.target.classList.contains('popup-consultation') ) {
            closeModalOrder();
        }

    });

});