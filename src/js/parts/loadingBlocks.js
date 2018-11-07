
 export default function loadingBlocks () {

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //Подгрузка дополнительных блоков

    let styles = document.querySelector('.styles'),
        stylesDivs = styles.querySelectorAll('.hidden-lg'),
        buttonStyles = styles.querySelector('.button-styles');
    
        buttonStyles.addEventListener('click', () => {
            stylesDivs.forEach( (item) => item.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1' );
            buttonStyles.style.display = 'none';

        });
  }
