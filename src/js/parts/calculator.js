export default function calculator () { 

    /////////////////////////////////////////////////////////////////////////////////////////////////////
 //Калькулятор 
    let sizePrice = document.querySelector('#size'),
        materialPrice = document.querySelector('#material'),
        optionsPrice = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price'),
        calc = document.querySelector('.calc'),

        sizeSum = 0,
        meterialSum = 0,
        optionsSum = 0,
        total = 0;

    calc.addEventListener('change', function() {

            sizeSum  = +sizePrice.options[sizePrice.selectedIndex].value;
            meterialSum = +materialPrice.options[materialPrice.selectedIndex].value;
            optionsSum = +optionsPrice.options[optionsPrice.selectedIndex].value;
  
            if (optionsPrice[optionsPrice.selectedIndex].value == 'Дополнительные услуги') {
                optionsSum = 0;
            }

            total = meterialSum + sizeSum + optionsSum;

            if (promocode.value == "IWANTPOPART") {
                total = (total * 0.7).toFixed() ;
            }

            if (sizePrice[sizePrice.selectedIndex].value == 'Выберите размер картины' || materialPrice[materialPrice.selectedIndex].value == 'Выберите материал картины'  ) {
                calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'}
            else {
                calcPrice.innerHTML = total;
            }

        });
}