var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});

var swiper1 = new Swiper('.swiper-container--1', {
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});