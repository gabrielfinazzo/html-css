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
setInterval(next, 100000);



/*Mascará telefone*/

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }