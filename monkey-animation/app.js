const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
let text = document.getElementById("verassing");



closedFace.addEventListener("click",function() {
    closedFace.style.display = "none";
    openFace.style.display = "block";
    text.innerText = "boo";
} )

openFace.addEventListener("click",function() {
    openFace.style.display = "none";
    closedFace.style.display = "block";
    text.innerText = "peek a";
} )