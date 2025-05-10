
const swiper = new Swiper('.slider-wrapper', {
   
  
    loop: true,
    grabCursor:true,
    spaceBetween: 90,

  
   /*paginação*/
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
  /* buttons navigation*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
 0:{
    slidesPerView:1
 },
 620:{
    slidesPerView:2
 },
 1024:{
    slidesPerView:2
 }
    }
   
   
  });
