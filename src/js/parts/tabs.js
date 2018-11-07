export default function tabs () { 

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
}