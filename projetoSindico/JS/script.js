let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.menu-item');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/* menu.addEventListener("click", () => 
navbar.classList.toggle("active"));  */

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});






















/* Depoimentos  */
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos depoimentos (pode ser substituído por uma chamada API)
    const depoimentos = [
        {
            titulo: "Experiência Incrível",
            descricao: "O serviço foi excelente desde o primeiro contato. A equipe foi muito atenciosa e resolveu meu problema rapidamente. Recomendo a todos!"
        },
        {
            titulo: "Profissionalismo Exemplar",
            descricao: "Fiquei impressionado com a qualidade do atendimento. Tudo foi feito com muita competência e dentro do prazo prometido. Superou minhas expectativas."
        },
        {
            titulo: "Resultados Surpreendentes",
            descricao: "Depois de contratar o serviço, vi uma diferença significativa nos resultados. Valeu cada centavo investido e certamente contratarei novamente."
        },
        {
            titulo: "Atendimento Personalizado",
            descricao: "Adorei como entenderam exatamente minhas necessidades e criaram uma solução sob medida. O acompanhamento pós-venda também é excelente."
        }
    ];

    const container = document.querySelector('.depoimentos-container');
    const indicadoresContainer = document.querySelector('.carrossel-indicadores');
    const btnPrev = document.querySelector('.carrossel-prev');
    const btnNext = document.querySelector('.carrossel-next');
    
    let currentIndex = 0;
    
    // Criar depoimentos e indicadores
    function criarDepoimentos() {
        container.innerHTML = '';
        indicadoresContainer.innerHTML = '';
        
        depoimentos.forEach((depoimento, index) => {
            // Criar elemento do depoimento
            const depoimentoElement = document.createElement('div');
            depoimentoElement.className = 'depoimento';
            depoimentoElement.innerHTML = `
                <h3 class="depoimento-titulo">${depoimento.titulo}</h3>
                <p class="depoimento-descricao">${depoimento.descricao}</p>
            `;
            container.appendChild(depoimentoElement);
            
            // Criar indicador
            const indicador = document.createElement('div');
            indicador.className = 'indicador';
            if (index === 0) indicador.classList.add('ativo');
            indicador.addEventListener('click', () => irParaDepoimento(index));
            indicadoresContainer.appendChild(indicador);
        });
    }
    
    // Atualizar carrossel
    function atualizarCarrossel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualizar indicadores
        const indicadores = document.querySelectorAll('.indicador');
        indicadores.forEach((indicador, index) => {
            if (index === currentIndex) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }
    
    // Ir para depoimento específico
    function irParaDepoimento(index) {
        currentIndex = index;
        atualizarCarrossel();
    }
    
    // Event listeners
    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : depoimentos.length - 1;
        atualizarCarrossel();
    });
    
    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex < depoimentos.length - 1) ? currentIndex + 1 : 0;
        atualizarCarrossel();
    });
    
    // Iniciar carrossel automático (opcional)
    let intervaloCarrossel = setInterval(() => {
        currentIndex = (currentIndex < depoimentos.length - 1) ? currentIndex + 1 : 0;
        atualizarCarrossel();
    }, 5000);
    
    // Pausar carrossel automático quando o mouse estiver sobre o carrossel
    const carrossel = document.querySelector('.carrossel-depoimentos');
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(intervaloCarrossel);
    });
    
    carrossel.addEventListener('mouseleave', () => {
        intervaloCarrossel = setInterval(() => {
            currentIndex = (currentIndex < depoimentos.length - 1) ? currentIndex + 1 : 0;
            atualizarCarrossel();
        }, 5000);
    });
    
    // Inicializar
    criarDepoimentos();
});