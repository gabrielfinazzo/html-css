const swiper = new Swiper('.swiper-container', {
    loop: true, // Loop infinito
    autoplay: {
      delay: 5000, // Troca a cada 5 segundos
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });