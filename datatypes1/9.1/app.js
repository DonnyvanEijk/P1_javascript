var menu = document.getElementById("menu");
var body = document.body
var input1 = document.getElementById("input")
var submitAdd = document.getElementById("submit")
var agecheck = document.getElementById("agecheck")
var text = document.getElementById("text")

function visibleMenu() {
    menu.style.display = "flex";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
}

function submit() {
if (input1.value < 18){
menu.style.display = "none"
agecheck.style.display = "none"
body.style.backgroundColor = "red"
text.innerText = "JE BENT TE JONG"
}
if (input1.value > 18){
    window.location.href = "https://youtube.com"
}


}