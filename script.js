let container = document.querySelector(".container");
let timeSystem = "12-hours";
let d = new Date();
let H = d.getHours();
let M = d.getMinutes();
let S = d.getSeconds();
let clock = [H, M, S];
container.innerHTML = clock.join(":");
let button = document.querySelector("#btn");
button.innerHTML = timeSystem;
button.addEventListener("click", () => {
  if (button.innerHTML == timeSystem) {
    button.innerHTML = "24-hours";
    H = Math.abs(d.getHours() - 12)
  } else if (button.innerHTML != timeSystem) {
    button.innerHTML = "12-hours";
    H = d.getHours();
  }
});
setInterval(() => {
  d = new Date();
  M = d.getMinutes();
  S = d.getSeconds();
  clock = [H, M, S];
  clock = clock
    .map((item) => String(item))
    .map((item) => (item.length >= 2 ? item : "0" + item));
  container.innerHTML = clock.join(":");
}, 1000);
