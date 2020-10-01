const box = document.getElementById("box");
const text = document.getElementById("text");
t = text.innerHTML;
const emoji = document.getElementById("emoji");

box.addEventListener("focusin", function(){
  text.innerHTML = "Enter number 1 - 5";
})

box.addEventListener("focusout", function(){
  text.innerHTML = t;
  emoji.innerHTML = "";
})

box.addEventListener("keydown", function(event){
  text.innerHTML = "";
  switch(event.code){
    case "Digit1":
      emoji.innerHTML = "&#128545";
      break;
    case "Digit2":
      emoji.innerHTML = "&#128577";
      break;
    case "Digit3":
      emoji.innerHTML = "&#128528";
      break;
    case "Digit4":
      emoji.innerHTML = "&#128578";
      break;
    case "Digit5":
      emoji.innerHTML = "&#128513";
      break;
  }
})