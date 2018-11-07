export default function accordion () {

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


 }