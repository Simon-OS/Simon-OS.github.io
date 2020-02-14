$(document).ready(function() {

    $(".worked-with__slider").slick({
        infinite: false,
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
        infinite: false,
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

});

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

