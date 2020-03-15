
$("#arrow").click(function () {
    $('html,body').animate({
      scrollTop: $("main").offset().top
     },
     1200);
   });


   const hamburger = document.querySelector('.hamburger');
   const nav = document.querySelector('.navigation');


   const handleClick = () => {
   hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
   }

   hamburger.addEventListener('click', handleClick);