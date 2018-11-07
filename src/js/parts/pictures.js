
 export default function pictures () {


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


  }



