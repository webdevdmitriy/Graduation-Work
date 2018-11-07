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
/////////////////////////////////////////////////////////////////////////////////////////////////
    // Модальные окна 

    let buttonOrder = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        // popupContent= popupDesign.querySelector('.popup-dialog'),
        mainForm= popupDesign.querySelector('form'),
        popupClose = document.querySelectorAll('.popup-close'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation= document.querySelector('.popup-consultation'),
        formConsultation= popupConsultation.querySelector('form'),
        popupContentDesign = popupDesign.querySelector('.popup-content'),
        popupContentConsultation = popupConsultation.querySelector('.popup-content'),
        popupContentContent = document.querySelectorAll('.popup-content_content'),

        //модальное окно popup-gift
        popupGift = document.querySelector('.popup-gift'),
        fixedGift = document.querySelector('.fixed-gift'),
        
        
        openModalOrder  = () => popupDesign.style.display = 'block',

        //закрытие всех модальных окон
        closeModalOrder = () => { 
            popupDesign.style.display = 'none';
            popupConsultation.style.display = 'none';
            popupGift.style.display = 'none';
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

    //модальное окно popup-gift
    fixedGift.addEventListener('click', (e) => {
        popupGift.style.display = 'block';
        fixedGift.style.display = 'none';
    });

    popupGift.addEventListener('click', (e) =>  {

        if (e.target.classList.contains('popup-gift') ) {
            closeModalOrder(); 
        }

    });





///////////////////////////////////////////////////////////////////////////////////////////////////////////
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

            postData()
                .then( () => {})
                .then ( () => {
                    popupContentContent.forEach( (item) =>item.style.display = 'none');
                    popupContentDesign.appendChild(div);
                    popupContentConsultation.appendChild(div);
                }
                
                 );
    
        });      
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////
    //Подгрузка дополнительных блоков

    let styles = document.querySelector('.styles'),
        stylesDivs = styles.querySelectorAll('.hidden-lg'),
        buttonStyles = styles.querySelector('.button-styles');
    
        buttonStyles.addEventListener('click', () => {
            stylesDivs.forEach( (item) => item.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1' );
            buttonStyles.style.display = 'none';

        });
/////////////////////////////////////////////////////////////////////////////////////////////////////
 //Калькулятор 
    let sizePrice = document.querySelector('#size'),
        materialPrice = document.querySelector('#material'),
        optionsPrice = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),

        sizeSum = 0,
        meterialSum = 0,
        optionsSum = 0,
        total = 0;

    sizePrice.addEventListener('change', function() {
            sizeSum = +this.options[this.selectedIndex].value;
            total = meterialSum + sizeSum + optionsSum;
            if (promocode.value == "IWANTPOPART") {
                total = (total * 0.7)  ;
            }
            if (sizePrice[sizePrice.selectedIndex].value == 'Выберите размер картины' || materialPrice[materialPrice.selectedIndex].value == 'Выберите материал картины'  ) {
                calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'}
            else {
                calcPrice.innerHTML = total;
            }
           
        });

        materialPrice.addEventListener('change', function() {
            meterialSum = +this.options[this.selectedIndex].value;
            total = meterialSum + sizeSum + optionsSum;

            if (promocode.value == "IWANTPOPART") {
                total = (total * 0.7)  ;
            }
            if (sizePrice[sizePrice.selectedIndex].value == 'Выберите размер картины' || materialPrice[materialPrice.selectedIndex].value == 'Выберите материал картины'  ) {
                calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'}
            else {
                calcPrice.innerHTML = total;
            }

        });   
        
        optionsPrice.addEventListener('change', function() {
            optionsSum = +this.options[this.selectedIndex].value;
            if (optionsPrice[optionsPrice.selectedIndex].value == 'Дополнительные услуги') {
                optionsSum = 0;
            }

            if (promocode.value == "IWANTPOPART") {
                total = (total * 0.7)  ;
            }
            total = meterialSum + sizeSum + optionsSum;
           
            if (sizePrice[sizePrice.selectedIndex].value == 'Выберите размер картины' || materialPrice[materialPrice.selectedIndex].value == 'Выберите материал картины'  ) {
                calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'}
            else {
                calcPrice.innerHTML = total;
            }  
           
        }); 
        
        promocode.addEventListener('change', function() {

            if (promocode.value == "IWANTPOPART") {
                total = (total * 0.7)  ;
            } else {
                total = meterialSum + sizeSum + optionsSum; 
            }
         
            if (sizePrice[sizePrice.selectedIndex].value == 'Выберите размер картины' || materialPrice[materialPrice.selectedIndex].value == 'Выберите материал картины'  ) {
                calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'}
            else {
                calcPrice.innerHTML = total;
            } 
           
        });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// табы

let portfolioMenu = document.querySelector('.portfolio-menu'),
    tab = portfolioMenu.querySelectorAll('li'),
    tabContent = document.querySelectorAll('.portfolio-block'),
    portfolioNo = document.querySelector('.portfolio-no');

    portfolioMenu.addEventListener('click', () => {
        let target = event.target;
        
        if (target.tagName == 'LI') {  
            for(let i=0; i < tab.length; i++) {
                tab[i].classList.remove('active');
            }
        }
        target.classList.add('active');

        for (let i = 0; i < tabContent.length; i++) {
            if (tabContent[i].classList.contains(target.classList[0])) {
                tabContent[i].style.display = 'flex';
            } else {
                tabContent[i].style.display = 'none';
            }

            if ( target.classList.contains ('grandmother') || target.classList.contains ('grandad') ) {
                portfolioNo.style.display = 'flex';
            } else {
                portfolioNo.style.display = 'none';
            }
        }  

    });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//картинки при наведении

    
   let sizes = document.querySelector('.sizes-wrapper'),
       sizesBlock = document.querySelectorAll('.sizes'),
       imgColor = sizes.querySelectorAll('.color'),
       imgPlug = sizes.querySelectorAll('.plug');

        imgColor.forEach ( (item) => {
            item.style.display='none';
            item.style.position='relative';
            item.style.zIndex='10';

         } );

       sizes.addEventListener('mouseover', (event) => {
        
        let target = event.target;
        console.log(target);
        if (target && target.hasAttribute('src')) {
            for( let i = 0; i <  imgPlug.length; i ++) {
                if (target ==  imgPlug[i]) {
                    imgPlug[i].style.display = 'none';
                    imgColor[i].style.display = 'block';
                        
                }
            }
            
        }
    });

    sizes.addEventListener('mouseout', (event) => {  
        let target = event.target;
        if (target && target.hasAttribute('src')) {
            for( let i = 0; i <  imgColor.length; i ++) {
                if (target ==  imgColor[i]) {
                    imgPlug[i].style.display = 'block';
                    imgColor[i].style.display = 'none';
                        
                }
            }
            
        }
    });

    


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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//аккордеон

let accordion = document.querySelector('#accordion'),
    accordionHeading = accordion.querySelectorAll('span'),
    accordionBlock = document.querySelectorAll('.accordion-block'),
    brushes = document.querySelector('.brushes');


    brushes.style.zIndex = '-1';
    
    accordionBlock.forEach( (item) =>{ 
        item.style.display = 'none';
        
        
     });
    accordion.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target ) {
            accordionBlock.forEach( (item) => item.style.display = 'none');
            accordionHeading.forEach( (item) => item.style.color = '#333333');
            for( let i = 0; i <  accordionHeading.length; i ++) {
                if (target ==  accordionHeading[i]) {
                    accordionBlock[i].style.display = 'block';
                    accordionBlock[i].classList.add('animated');
                    accordionBlock[i].classList.add('fadeInDown');
                    accordionHeading[i].style.color = 'red';    
                }
            }
            
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// главная форма

let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что то пошло не так..."
};

 let consultationArtist = document.querySelector('.consultation'),
    consultationArtistForm = consultationArtist.querySelector('form'),
    consultationArtistInputs = consultationArtistForm.querySelectorAll('input'),
    consultationArtistRussian = [consultationArtistInputs[0], consultationArtistInputs[3]];

    let statusMessage = document.createElement('div');
        statusMessage.style.marginTop = '15px',
        statusMessage.style.textAlign = 'center';
    

             consultationArtistForm.addEventListener('submit', function(event) {
                event.preventDefault();
                consultationArtistForm.appendChild(statusMessage);

            function postData2() {
                return new Promise( (resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let formData = new FormData(consultationArtistForm);

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

            postData2()
                .then ( () =>  statusMessage.innerHTML = message.loading  ) 
                .then ( () =>  statusMessage.innerHTML = message.success ) 
                .catch ( () =>  statusMessage.innerHTML = message.failure  );

            for (let k = 0; k < consultationArtistInputs.length; k++) {
                consultationArtistInputs[k].value = '';
            }
        });  
        
        let input = document.getElementsByTagName('input')[0];

        consultationArtistForm[1].addEventListener('input', function() {
            let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) val = def;
            
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
    
           
        });

    for(let i=0; i < consultationArtistRussian.length; i++) {
        consultationArtistRussian[i].addEventListener('input', function() {
            this.value = this.value.replace(/[^аА-яё]/g, '');
            
        });

    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// модальное окно при пролистывании

    let popupGift2 = document.querySelector('.popup-gift'),
        fixedGift2 = document.querySelector('.fixed-gift'),
        pressingOfButton = false;

         let showpopupGift2 = () => {
            popupGift2.style.display = 'block';
            fixedGift2.style.display = 'none';
            pressingOfButton = true;
         };

        let popupGiftScroll = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && pressingOfButton == false) {
                showpopupGift2();
             } };
        
        document.querySelector('body').addEventListener('click', (event) =>   {
            let target = event.target;
            if (target.classList.contains('fixed-gift') || target.classList.contains('button')) { 
                pressingOfButton = true; }

        });

        window.addEventListener('scroll', () => {
            popupGiftScroll();
        });

       
//Модальное окно при посещении сайта более 60 секунд

    let popupConsultation2 = document.querySelector('.popup-consultation');

     let showPopupConsultation2 = () => {
        popupConsultation2.style.display = 'block';

     };
        
    let timerPopupConsultation2 = () => {``
        if (pressingOfButton == false) {
            showPopupConsultation2();
        } 
    };

    setTimeout(timerPopupConsultation2, 60000);


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
});