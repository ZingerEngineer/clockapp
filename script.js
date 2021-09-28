let container = document.querySelector(".container");
let timeSystem = '12-hours';
let d = new Date();
let H = d.getHours();
let M = d.getMinutes();
let S = d.getSeconds();
let clock = [H , M , S]
container.innerHTML = clock.join(":")
let button = document.querySelector(".btn") 
   
setInterval(() => {
     d = new Date();
     H = d.getHours();
     M = d.getMinutes();
     S = d.getSeconds();
     clock = [H,M,S]
    clock = clock
        .map(item => String(item))
        .map(item => item.length >= 2 ? item : '0' + item)
     container.innerHTML = clock.join(":")
},1000)

