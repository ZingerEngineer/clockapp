let container = document.querySelector(".container");
let timeSystem = "12 hours";
let d = new Date();
let H = d.getHours();
let M = d.getMinutes();
let S = d.getSeconds();
let K = ""
let clock = [H, M, S];
container.innerHTML = clock.join(":");
let button = document.querySelector("#btn");
button.innerHTML = timeSystem;
button.addEventListener("click", () => {
  if (button.innerHTML == timeSystem) {
    
    button.innerHTML = "24 hours";
    if( H == 24){ K = "AM"}
    else if (H < 12){K="AM"}
    else if (H >= 12){K="PM"}

    if(H < 12){H = d.getHours()}
    else if(H=0){H = d.getHours()}
    else{H= d.getHours() - 12}
    
    
  } else if (button.innerHTML != timeSystem) {
    button.innerHTML = "12 hours";
    H = d.getHours();
    K = ""
  }
});
setInterval(() => {
  d = new Date();
  M = d.getMinutes();
  S = d.getSeconds();
  clock = [H,M,S]
  clock = clock
    .map((item) => String(item))
    .map((item) => (item.length >= 2 ? item : "0" + item));
  container.innerHTML = clock.join(":") + K;
}, 1000);
