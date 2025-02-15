const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(n) {
    slider.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Handle negative indices
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto Slide (Optional)
let autoSlideInterval;
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000); // Change interval as needed
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide(); // Start auto slide when the page loads

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

showSlide(currentSlide); // Show the first slide initially
