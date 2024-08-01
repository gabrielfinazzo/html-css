let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.menu-item');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
}

menu.addEventListener("click", () => 
navbar.classList.toggle("active")); 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});