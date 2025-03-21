const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - 1;
    }
    updateCarousel();
});
