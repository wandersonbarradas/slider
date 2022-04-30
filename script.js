let slide = document.querySelector(".slide");
let slideItems = document.querySelectorAll(".slide-item");
let currentSlider = 0;
let divisor = 0;

function iniciar() {
  slide.style.width = `calc(100vw * ${slideItems.length})`;
  let main = document.querySelector("main").clientWidth;
  let item = document.querySelector(".slide-item").clientWidth;
  divisor = Math.round(main / item);
}

window.addEventListener("resize", () => {
  iniciar();
});

function next() {
  currentSlider++;
  if (currentSlider > slideItems.length - divisor) {
    currentSlider = 0;
  }
  updateSlide();
}

function prev() {
  currentSlider--;
  if (currentSlider < 0) {
    currentSlider = slideItems.length - divisor;
  }
  updateSlide();
}

function updateSlide() {
  let larguraItem = slideItems[0].clientWidth;
  let newMargin = currentSlider * larguraItem;
  slide.style.marginLeft = `-${newMargin}px`;
}

iniciar();

setInterval(() => {
  next();
}, 3000);
