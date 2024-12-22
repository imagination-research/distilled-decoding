window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
    // Check for click events on the navbar burger icon

    var options = {
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pagination: false,
    }

    // Initialize all div with carousel class
    bulmaCarousel.attach('.carousel', options);
})

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeAllModals();
        }
    });
});

let slideIndex = 1;

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// Initialize the carousel to show the first slide
showSlides(slideIndex);


function currentSlide(carouselID, slideIndex) {
    const carousel = document.querySelector(`#${carouselID}`);
    const slides = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.dot');

    // 隐藏所有图片
    slides.forEach(slide => slide.style.display = "none");
    // 移除所有 dot 的 active 状态
    dots.forEach(dot => dot.classList.remove('active'));

    // 显示目标图片
    slides[slideIndex - 1].style.display = "block";
    // 激活目标 dot
    dots[slideIndex - 1].classList.add('active');
}







