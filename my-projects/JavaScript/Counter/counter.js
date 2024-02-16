var increase = document.getElementById("increase");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var number = document.getElementById("number");

let counter = 0;

increase.addEventListener("click", ()=>{
  counter++;
  number.innerHTML = counter;
})

decrease.addEventListener("click", ()=>{
  counter--;
  number.innerHTML = counter;
})

reset.addEventListener("click", ()=>{
  counter = 0;
  number.innerHTML = counter;
})

