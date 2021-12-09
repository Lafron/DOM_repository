const btn = document.querySelector("button");
const textBox = document.querySelector("input[type='text']"); 
const bttn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");

btn.addEventListener("click", handler);

function handler(){
  let color = textBox.value;
  
  if((color == null)||(color == "")){
    alert("Enter valid color");
  }
  else{
    const square = document.querySelector("#square");
    console.log(square);
    square.style.backgroundColor = color;
    
    textBox.value = "";
  }
    
}

bttn.style.display = "none";

range.addEventListener("change", resize);

function resize(){
    console.log(range.value);

    circle.style.width = range.value + "%";
    circle.style.height = range.value + "%";

}
