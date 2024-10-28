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


/* E-mail */
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio imediato para que possamos gerenciar o fechamento
    const form = this;

    // Envia o formulário via AJAX
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    }).then(response => {
        if (response.ok) {
            window.close(); // Fecha a janela após o envio bem-sucedido
        } else {
            alert('Erro ao enviar o formulário. Tente novamente.');
        }
    }).catch(error => {
        alert('Ocorreu um erro. Tente novamente.');
        console.error(error);
    });
});