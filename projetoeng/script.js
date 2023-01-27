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
setInterval(next, 7000);



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



  /*Correção do menu fixo sobre o início da ancora

// Aqui nós estaremos realizando o scroll da página para 45px acima
// de onde ela está atualmente
  function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 140);
    }
  }

// Aqui estou adicionando um listener à todos elementos <a> que
// redirecionam para algum link que comece com #. Você pode criar uma 
// classe ou aplicar à elementos específicos.
  document.querySelectorAll('a[href^="#"').forEach(el => {
    el.addEventListener("click", function() {
    
      window.setTimeout(function() {
        // O clique é capturado antes da mudança do #, então
        // o timeout faz com que esse código seja executado
        // apenas após a rolagem do redirecionamento ser executada
        offsetAnchor();
      }, 0);
  
    });
  })

  // Definimos o offset inicial caso a página aberta já esteja indo para um #elemento
  window.setTimeout(offsetAnchor, 0);

  */