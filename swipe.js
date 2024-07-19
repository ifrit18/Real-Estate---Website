document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If you need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

