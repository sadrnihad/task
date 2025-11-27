const number = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  number.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  number.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  number.textContent = count;
});
