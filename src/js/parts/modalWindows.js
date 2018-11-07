export default function modalWindows () {

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Модальные окна 

    let buttonOrder = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        mainForm= popupDesign.querySelector('form'),
        popupClose = document.querySelectorAll('.popup-close'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation= document.querySelector('.popup-consultation'),
        formConsultation= popupConsultation.querySelector('form'),
        popupContentDesign = popupDesign.querySelector('.popup-content'),
        popupContentConsultation = popupConsultation.querySelector('.popup-content'),
        popupDesignContentContent = popupDesign.querySelector('.popup-content_content'),
        popupConsultationContentContent = popupConsultation.querySelector('.popup-content_content'),

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


    // let forms = document.querySelectorAll('form');

    let div = document.createElement('div');
    div.innerHTML = '<img src="../img/1.gif">'+'</br>'+'Спасибо, мы скоро с вами свяжемся';


        mainForm.addEventListener('submit', function(event) {
        event.preventDefault();

       

    function postData() {
        return new Promise( (resolve, reject) => {

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(mainForm);

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
    
            postData()
                .then( () => {
                    div.innerHTML = 'Идет отправка';
                    popupContentDesign.appendChild(div);
                })
                .then ( () => {
                    popupDesignContentContent.style.display = 'none';
                    div.innerHTML = '<img src="../img/1.gif">'+'</br>'+'Спасибо, мы скоро с вами свяжемся';
                    popupContentDesign.appendChild(div);
                })
                .catch( () => {
                    popupDesignContentContent.style.display = 'none';
                    div.innerHTML = '<img src="../img/tenor.gif">'+'</br>'+'что то пошло не так....';
                    popupContentDesign.appendChild(div);

                } );
    
        }); 
/////////////////////////////////////////////////////////////////

    formConsultation.addEventListener('submit', function(event) {
            event.preventDefault();
    
        function postData() {
            return new Promise( (resolve, reject) => {
    
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
                let formData = new FormData(formConsultation);
    
                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
    
                request.addEventListener('readystatechange', function() {
                    if (request.redyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                       resolve();
                    } else {
                        reject();
                    }
                });
            });
        }
        
                postData()
                    .then( () => {
                        div.innerHTML = 'Идет отправка';
                        popupContentConsultation.appendChild(div);
                    })
                    .then ( () => {
                        popupConsultationContentContent.style.display = 'none';
                        div.innerHTML = '<img src="../img/1.gif">'+'</br>'+'Спасибо, мы скоро с вами свяжемся';
                        popupContentConsultation.appendChild(div);
                    } )
                    .catch( () => {
                    popupConsultationContentContent.style.display = 'none';
                    div.innerHTML = '<img src="../img/tenor.gif">'+'</br>'+'что то пошло не так....';
                    popupContentConsultation.appendChild(div);

                } );
        
            });      
        
    ///////// регулрки
            let phones = document.querySelectorAll('input[name="phone"]');
            let names = document.querySelectorAll('input[name="name"]');
            let messages = document.querySelectorAll('input[name="message"]');

            phones.forEach( function(item) {

                item.addEventListener('input', function() {
                    let matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ''),
                    val = this.value.replace(/\D/g, '');
        
                    if (def.length >= val.length) val = def;
                    
                    this.value = matrix.replace(/./g, function(a) {
                        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                    });
    
                });

            });

            names.forEach ( function(item) {

                item.addEventListener('input', function() {
                this.value = this.value.replace(/[^аА-яё]/g, '');
                
                }) ;

            }) ;

            messages.forEach ( function(item) {

                item.addEventListener('input', function() {
                this.value = this.value.replace(/[^аА-яё]/g, '');

                }) ;

            }) ;

            




 }

