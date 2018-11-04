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
        mainForm= popupDesign.querySelector('.form'),
        popupClose = document.querySelectorAll('.popup-close'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupContent = document.querySelectorAll('.popup-content'),
        popupContentContent = document.querySelectorAll('.popup-content_content'),
        mm = document.querySelectorAll('.popup-dialog'),

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
    // let consultations = document.querySelector('.consultation'),
    // consultationsContainer = consultations.querySelector('.container');
    
    // let div = document.createElement('div');
    //     div.innerHTML = '<img src="../img/radost_02.gif">'+'</br>'+'Спасибо, мы скоро с вами свяжемся';

    //     console.log(popupContent.length);
    //         postData()
    //             .then ( 
    //             popupContentContent.forEach( (item) =>item.style.display = 'none'), 
    //             popupContent.forEach( (item) => item.appendChild(div) )
    //              );
    
        });      
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////
    //Подгрузка дополнительных блоков

    let styles = document.querySelector('.styles'),
        stylesDivs = styles.querySelectorAll('div'),
        buttonStyles = styles.querySelector('.button-styles');
    
        buttonStyles.addEventListener('click', () => {

            stylesDivs.forEach( (item) => item.classList.remove('hidden-lg') );
            stylesDivs.forEach( (item) => item.classList.remove('hidden-md') );
            stylesDivs.forEach( (item) => item.classList.remove('hidden-sm') );
            stylesDivs.forEach( (item) => item.classList.remove('hidden-xs') );
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
// слайдер

let portfolioMenu = document.querySelector('.portfolio-menu'),
    tab = portfolioMenu.querySelectorAll('li'),
    tabContent = document.querySelectorAll('.portfolio-block'),
    portfolioNo = document.querySelector('.portfolio-no');


    let showTabContent = (b) => {
        
            for (let i = 0; i < tabContent.length; i++) {
                if (tabContent[i].classList.contains(b)) {
                    tabContent[i].style.display = 'flex';
                } else {
                    tabContent[i].style.display = 'none';
                }

                if ( b == 'grandmother' || b == 'granddad' ) {
                    portfolioNo.style.display = 'flex';
                } else {
                    portfolioNo.style.display = 'none';
                }

            }   

            let target = event.target;
            if (target && target.classList.contains(b)) {  
                target.classList.add('active');

                for(let i=0; i < tab.length; i++) {

                     let k = tab[i].classList.contains(b) ;
                     if(k == 0) {
                        tab[i].classList.remove('active');
                     }
                }
            }
               
            

    };

    tab[0].addEventListener('click', (event) => showTabContent('all') );
    tab[1].addEventListener('click', (event) => showTabContent('lovers') );
    tab[2].addEventListener('click', (event) => showTabContent('chef') );
    tab[3].addEventListener('click', (event) => showTabContent('girl') );
    tab[4].addEventListener('click', (event) => showTabContent('guy') );
    tab[5].addEventListener('click', (event) => showTabContent('grandmother') );
    tab[6].addEventListener('click', (event) => showTabContent('granddad') );
    
    
});