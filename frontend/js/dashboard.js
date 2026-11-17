
document.addEventListener('DOMContentLoaded', function () {

    // Display current date
    const date = document.getElementById('currentDate');

    if (date) {
        date.textContent = new Date().toLocaleDateString(
            'en-IN',
            {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }
        );
    }

    // Slider elements
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    const previous = document.querySelector('.slider-arrow.prev');
    const next = document.querySelector('.slider-arrow.next');

    if (!slides.length) return;

    let active = 0;
    let timer;

    // Show selected slide
    function showSlide(index) {

        active = (index + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
            slide.classList.toggle('active', i === active);
        });

        dots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === active);
        });
    }

    // Automatic slider
    function restartSlider() {

        clearInterval(timer);

        timer = setInterval(function () {
            showSlide(active + 1);
        }, 5000);
    }

    // Previous button
    previous.addEventListener('click', function () {
        showSlide(active - 1);
        restartSlider();
    });

    // Next button
    next.addEventListener('click', function () {
        showSlide(active + 1);
        restartSlider();
    });

    // Navigation dots
    dots.forEach(function (dot, index) {

        dot.addEventListener('click', function () {
            showSlide(index);
            restartSlider();
        });

    });

    // Pause when browser tab is hidden
    document.addEventListener('visibilitychange', function () {

        if (document.hidden) {
            clearInterval(timer);
        } else {
            restartSlider();
        }

    });

    restartSlider();

});
