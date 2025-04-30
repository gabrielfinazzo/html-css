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



/* Aproximação do botão solicitar orçamento */

document.addEventListener('mousemove', function(event) {
    const buttons = document.getElementsByClassName('solicitarOrcamento');

    for (let button of buttons) {
        const rect = button.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 150) { // Ajuste a distância de ativação conforme necessário
            const moveX = distanceX * 0.1; // Ajuste a sensibilidade do movimento
            const moveY = distanceY * 0.1;

            button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            button.style.transform = 'translate(0, 0)';
        }
    }
});