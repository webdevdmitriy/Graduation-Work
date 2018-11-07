export default function scrollModal () {

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
   
let timerPopupConsultation2 = () => {
   if (pressingOfButton == false) {
       showPopupConsultation2();
   } 
};

setTimeout(timerPopupConsultation2, 60000);

    
}