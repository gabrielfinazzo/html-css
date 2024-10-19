const menuBar = document.getElementById('menu-bar');
const menuList = document.getElementById('menu-list');
let menuItems = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.fa-bars');

    menuBar.addEventListener('click', () => {
        menuList.classList.toggle('active');  // Alterna a classe 'active'
    });


    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('active');  // Alterna a classe 'active'
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('fa-times');
            menuList.classList.remove('active');
        });
    });

