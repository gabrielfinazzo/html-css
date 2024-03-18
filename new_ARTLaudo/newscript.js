let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
}

menu.addEventListener("click", () => 
navbar.classList.toggle("active")); 