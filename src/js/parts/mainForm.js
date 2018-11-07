export default function mainForm () {

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


 }