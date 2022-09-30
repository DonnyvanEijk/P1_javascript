let budget = 100;
let product = prompt("Costs of product");
let text = document.getElementById('text');

if (budget > product) {
    text.innerHTML = "U heeft genoeg geld!";
} else {
    text.innerHTML = "Helaas, te weinig geldt";
}
 
