const menuBar = document.getElementById('menu-bar');
const menuList = document.getElementById('menu-list');

    menuBar.addEventListener('click', () => {
        menuList.classList.toggle('active');  // Alterna a classe 'active'
    });


    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('active');  // Alterna a classe 'active'
    });