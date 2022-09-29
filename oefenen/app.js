
var button = "RoodButton";
function kleur_aanpassen() {
let title = "kutJavascript";
let element = document.getElementById("title")
let element2 = document.getElementById("button")

element2.onclick = function () {
  if (element2) {
    element.style.color = "red";
  }
  
  else {
    element.style.color = "green";
  }
}
}
