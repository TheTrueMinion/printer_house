if (document.body.clientWidth<1201){
    document.write("<script>console.log('hello!');<\/script>");
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        mousewheel: {
            enabled: true
        },
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          
        },
      });

  const _open_burger = document.querySelector(".burger_button");
  const _close_burger = document.querySelector(".close_burger");
  const sw = document.querySelector("#pcc");

  _open_burger.addEventListener('click', function() {
      console.log(sw);
      sw.style.zIndex = "-1";
      // map.style.display = "none";
  });
  
  _close_burger.addEventListener('click', function() {
      sw.style.zIndex = "1";
      console.log(1);
  });

 }