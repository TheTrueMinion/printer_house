if (document.body.clientWidth>1201) {
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      
      mousewheel: {
          enabled: true
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        
      },
    });
}