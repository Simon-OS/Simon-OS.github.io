$(document).ready(function() {

    $(".worked-with__slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: `<button class="left"><i class="fa fa-chevron-left"></i></button>`,
        nextArrow: `<button class="right"><i class="fa fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $(".apps__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<button class="left"><i class="fa fa-chevron-left"></i></button>`,
        nextArrow: `<button class="right"><i class="fa fa-chevron-right"></i></button>`,
    });

    $(".clients__slider").slick({
        autoplay: true,
        autoplaySpeed: 3500,
        infinite: false,
        arrows: false
    });

    $(".technologies__slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: `<button class="left"><i class="fa fa-chevron-left"></i></button>`,
      nextArrow: `<button class="right"><i class="fa fa-chevron-right"></i></button>`,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });
});



// header dropdown mobile

let dropdown = document.querySelector(".header-menu__list-item.dropdown");
let headerBtn = document.querySelector(".header-menu__btn-toggle");
let headerMenu = document.querySelector(".header-menu");

function headerMenuToggle() {

  if (headerMenu.classList.contains("active")) {

    headerMenu.classList.remove("active");
    headerBtn.innerHTML = `<i class="fa fa-bars"></i>`;

  } else {

    headerMenu.classList.add("active");
    headerBtn.innerHTML = `<i class="fa fa-times"></i>`;

  }
}

headerBtn.addEventListener("click", headerMenuToggle);

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active")
  headerMenu.classList.toggle("active-dropdown");
});



// portfolio modal

let portfolioItems = document.querySelectorAll(".portfolio__item");
let portfolioModalBody = document.querySelector("#portfolioModal .modal-body");

function appendImgToModal(ev) {
  
    let image = ev.target.cloneNode();

    portfolioModalBody.innerHTML = "";
    portfolioModalBody.appendChild(image);
}

portfolioItems.forEach(item => {
    item.addEventListener("click", appendImgToModal);
});

