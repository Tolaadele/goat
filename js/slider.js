const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");

let currentIndex = 0;
let slideInterval;

function startSlide() {
  slideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slideImages.length) {
      currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000);
}

function stopSlide() {
  clearInterval(slideInterval);
}

slider.addEventListener("mouseenter", stopSlide);
slider.addEventListener("mouseleave", startSlide);

startSlide();
