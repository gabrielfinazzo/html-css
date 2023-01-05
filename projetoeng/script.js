function checkActive() {
    document.getElementById = ("check")
        check.style.opacity = "1"
    
}

function checkDesactive() {
    document.getElementById = ("check")
        check.style.opacity = "0"
}


function menuShow() {
    let menuMobile = document.querySelector('.menu-bar');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
        
    
}


//Carrossel

let slides = document.querySelectorAll('.slide-container');
let index = 0;

// next function
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// previous function
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//autoplay carrossel
setInterval(next, 7000);