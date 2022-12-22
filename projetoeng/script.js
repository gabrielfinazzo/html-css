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