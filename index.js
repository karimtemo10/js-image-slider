const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const viewer = document.querySelector(".images");
const dots = document.querySelectorAll(".dot");

let counter = 0;

let autoPlay = setInterval(slideNext, 3000);

function slideNext() {
  if (counter === 8) {
    dots[counter].classList.remove("active");
    dots[0].classList.add("active");
    counter = 0;
    viewer.style.transition = "0s";
    viewer.style.transform = `translateX(${-318 * counter}px)`;
    viewer.offsetHeight;
    viewer.style.transition = "1s ease";

    return;
  }
  counter += 1;
  viewer.style.transform = `translateX(${-318 * counter}px)`;
  updateDots();
}
function slidePrev() {
  if (counter === 0) {
    dots[counter + 8].classList.add("active");
    counter = 8;
    viewer.style.transition = "0s";
    viewer.style.transform = `translateX(${-318 * counter}px)`;
    viewer.offsetHeight;
    viewer.style.transition = "1s ease";

    updateDots();
    return;
  }
  counter -= 1;
  viewer.style.transform = `translateX(${-318 * counter}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[counter].classList.add("active");
}

btnNext.addEventListener("click", () => {
  slideNext();
  resetTimer();
});

btnPrev.addEventListener("click", () => {
  slidePrev();
  resetTimer();
});

function resetTimer() {
  clearInterval(autoPlay);
  autoPlay = setInterval(slideNext, 3000);
}
