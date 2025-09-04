const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");

const SLIDES_COUNT = slides.length;

const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

let currentSlide = 0;

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % SLIDES_COUNT;
  if (currentSlide > SLIDES_COUNT - 1) {
    currentSlide = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + SLIDES_COUNT) % SLIDES_COUNT;
  if (currentSlide > SLIDES_COUNT - 1) {
    currentSlide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${
    -currentSlide * slides[0].offsetWidth
  }px)`;

  document.body.style.backgroundColor = `#${slides[currentSlide].dataset.bg}`;
}
