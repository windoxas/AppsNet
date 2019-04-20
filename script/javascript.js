var images = document.querySelectorAll('.blockImg');
var progress = document.querySelectorAll('.progress>div');
let btnMenu = document.querySelector('.BtnMenu');
let navigation = document.querySelector('.nav');

var left = 0;
function time () {
left = left -390;
if(left < -2000){
    left = 0;
   
} 

    for(let i =0; i < images.length; i++){

        images[i].style.left= left+'px'; 

        
       
    
    }
}

btnMenu.addEventListener('click', function () {
navigation.classList.toggle('showMenu');
});

setInterval(time, 3000);