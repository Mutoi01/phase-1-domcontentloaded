// Your code goes here

document.addEventListener("DOMContentLoaded",function(){
  console.log("DOM loaded");
  changeText()
})

function changeText(){
  let mod = document.querySelector('p');
  mod.textContent = "This is really cool!"
}
