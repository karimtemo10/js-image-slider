const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const viewer = document.querySelector(".images");
const dots = document.querySelectorAll(".dot");

let counter = 0;
btnNext.addEventListener("click", () => {
  if (counter === 8) return;
  counter += 1;
  viewer.style.transform = `translateX(${-318 * counter}px)`;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[counter].classList.add("active");
});

btnPrev.addEventListener("click", () => {
  if (counter === 0) return;
  counter -= 1;
  viewer.style.transform = `translateX(${-318 * counter}px)`;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[counter].classList.add("active");
});
