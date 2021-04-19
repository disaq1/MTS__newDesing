var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 1,
    stretch: 0,
    depth: 20,
    modifier: 1,
    slideShadows: true,
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