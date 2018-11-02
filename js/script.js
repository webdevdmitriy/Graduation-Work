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
        // popupContent= popupDesign.querySelector('.popup-dialog'),
        mainForm= popupDesign.querySelector('.form'),
        popupClose = document.querySelectorAll('.popup-close'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupContent = document.querySelectorAll('.popup-content'),
        popupContentContent = document.querySelectorAll('.popup-content_content'),
        mm = document.querySelectorAll('.popup-dialog'),

       
      

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

    //Отправка форм


  

    let forms = document.querySelectorAll('form');

    for(let i=0; i < forms.length; i++) {

        forms[i].addEventListener('submit', function(event) {
        event.preventDefault();

    function postData() {
        return new Promise( (resolve, reject) => {

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(forms[i]);

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                   resolve();
                } else {
                    reject();
                }
            });
        });
    }
    let consultations = document.querySelector('.consultation'),
    consultationsContainer = consultations.querySelector('.container');
    
    let div = document.createElement('div');
        div.innerHTML = '<img src="../img/radost_02.gif">'+'</br>'+'Спасибо, мы скоро с вами свяжемся';

        console.log(popupContent.length);
            postData()
                .then ( 
                popupContentContent.forEach( (item) =>item.style.display = 'none'), 
                popupContent.forEach( (item) => item.appendChild(div) )
                 );
    
        });      
    }

});