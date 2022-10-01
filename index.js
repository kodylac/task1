let moving = 0;


const slider = document.querySelector('.slider_line');

document.querySelector('.next').addEventListener('click', function(){
    moving = moving + 512;
    if (moving > 1048) {
        moving = 0;
    }
    slider.style.left = -moving + 'px';
});


document.querySelector('.prev').addEventListener('click', function(){
    moving = moving - 512;
    if (moving < 0) {
        moving = 1048;
    }
    slider.style.left = -moving + 'px';
});
