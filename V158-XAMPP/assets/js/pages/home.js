// home.js - lógica de la página de inicio

let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;
    if (!totalSlides) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (n + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlider() { slideInterval = setInterval(nextSlide, 5000); }
function stopSlider() { clearInterval(slideInterval); }

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) el.classList.add('visible');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const slider = document.querySelector('.slider-container');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    const dots = document.querySelectorAll('.slider-dot');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlider();
            startSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlider();
            startSlider();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
            if (!Number.isNaN(slideIndex)) {
                goToSlide(slideIndex);
                stopSlider();
                startSlider();
            }
        });
    });

    if (slider) {
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
        startSlider();
    }

    // Scroll animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Efecto de carga inicial
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        setTimeout(() => { document.body.style.opacity = '1'; }, 100);
    });
});
