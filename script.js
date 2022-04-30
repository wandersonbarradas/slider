let slide = document.querySelector(".slide");
let slideItems = document.querySelectorAll(".slide-item");
let currentSlider = 0;
let divisor = 0;

function iniciar() {
  slide.style.width = `calc(100vw * ${slideItems.length})`;
  // currentSlider = 0;
  // slide.style.marginLeft = "-0px";
  let main = document.querySelector("main").clientWidth;
  if (main > 950) {
    divisor = 5;
  } else if (main > 810) {
    divisor = 4;
  } else if (main > 600) {
    divisor = 3;
  } else if (main > 350) {
    divisor = 2;
  } else if (main < 350) {
    divisor = 1;
  }
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
