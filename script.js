var container = document.querySelector(".container");
var timeSystem = '12-hours';
var d = new Date(); // for now
var H = d.getHours(); // => 9
var M = d.getMinutes(); // =>  30
var S = d.getSeconds(); // => 51

var dynclock = setInterval(()=>{new Date()},1000)

console.log(dynclock)

/* console.log(d);
var button = document.querySelector(".timeformat");
var hours = d.getHours();
var hours12 = Math.abs(d.getHours()-12)
var mins = d.getMinutes();
var sec = d.getSeconds();
var clock = document.querySelector(".clock");
button.innerHTML = timeSystem;
button.addEventListener("click", () => {
    if(timeSystem == "12-hours"){
        timeSystem ="24-hours" 
        button.innerHTML = timeSystem;
        clock.innerHTML == hours12;
    }
    else{
        timeSystem ="12-hours" 
        button.innerHTML = timeSystem;

    }
}) */