/*function abrirMenu() {
    if (newbox.style.display == "block") {
        newbox.style.display = "none"
    } else {
        newbox.style.display = "block"
    }
        
}
*/

function abrirMenu() {
    let menuMobile = document.querySelector('.boxmenu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}