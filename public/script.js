let container = document.querySelector(".clock");
let timeSystem = "12 hours";
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayTimeFormat = ""
let clock = [hours, minutes, seconds];
let button = document.querySelector("#format-button");
container.innerHTML = clock.join(":");
button.innerHTML = timeSystem;


function timeFormatConversion() {

}


button.addEventListener("click", () => {
  if (button.innerHTML == timeSystem) {

    button.innerHTML = "24 hours";
    if (hours == 00) {
      dayTimeFormat = "AM";
      hours = hours + 12
    }
    else if (hours < 12) {
      dayTimeFormat = "AM";
      hours = date.getHours()
    }
    else if (hours == 12) {
      dayTimeFormat = "PM";
      hours = date.getHours()
    }
    else if (hours > 12) {
      dayTimeFormat = "PM";
      hours = hours - 12
    }

  } else if (button.innerHTML != timeSystem) {
    button.innerHTML = "12 hours";
    hours = date.getHours();
    dayTimeFormat = ""
  }
});
setInterval(() => {
  date = new Date();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  clock = [hours, minutes, seconds]
  clock = clock
    .map((item) => String(item))
    .map((item) => (item.length >= 2 ? item : "0" + item));
  container.innerHTML = clock.join(":") + dayTimeFormat;
}, 1000);
