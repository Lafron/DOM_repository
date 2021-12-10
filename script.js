const btn = document.querySelector("#btn");
const textBox = document.querySelector("input[type='text']");
const square = document.querySelector("#square");
const bttn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const rangeSpan = document.getElementById("range-span");

btn.addEventListener("click", handler);

function handler(){
  let color = textBox.value;
  
  if(color == ""){
    alert("Enter valid color");
  }
  else{
    square.style.backgroundColor = color;
    textBox.value = "";
  }
}

bttn.style.display = "none";

range.addEventListener("change", resize);


function resize(){
  rangeSpan.innerText = range.value;
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
}