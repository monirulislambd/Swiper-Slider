$(document).ready(function(){
    const mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,

        autoplay:{
            delay: 3000,
            disableOnInteration: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        scrollbar: {
            el: '.swiper-scrollbar',
          },
      });
});
