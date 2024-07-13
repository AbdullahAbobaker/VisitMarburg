let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.authors-works-slider .item');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-currentSlide * 100}%)`;
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);
    