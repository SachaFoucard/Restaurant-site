let burgerButton = document.querySelector("#burger");
bendoDa = document.querySelector(".nav");

burgerButton.addEventListener("click",open)
function open(){
   bendoDa.classList.toggle("none");
   bendoDa.classList.toggle("active");
}