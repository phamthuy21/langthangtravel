$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fad fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fad fa-chevron-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 2000
  });
});

$(".tour-action").click(function () {
  $("html,body").animate({ scrollTop: $('.tourdulich').offset().top }, 400,"easeOutCubic");
});

// Back to top

$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.backToTop').fadeIn();
      } else {
          $('.backToTop').fadeOut();
      }
  });

  $('.backToTop').click(function(){
      $('html, body').animate({scrollTop : 0},400);
      return false;
  });
  
});

// $(".backToTop").click(function () {
//   $("html, body").animate({ scrollTop: 0 }, 400);
//   return false;
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
