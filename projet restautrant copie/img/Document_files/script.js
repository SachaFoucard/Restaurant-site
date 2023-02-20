let burgerButton = document.querySelector("#burger");
bendoDa = document.querySelector(".nav");

burgerButton.addEventListener("click",bendppo)
function bendppo(){
   bendoDa.classList.toggle("none");
   bendoDa.classList.toggle("active");
}