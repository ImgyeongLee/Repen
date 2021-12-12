var slideWrapper = document.querySelector('.container');
var slides = document.querySelectorAll('.item');
var totalSlides = slides.length; // item의 갯수


var sliderWidth = slideWrapper.clientWidth; // container의 width
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'px';


function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});
