// DICE 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDice = "images/dice" + randomNumber1 + ".png";

document.querySelector("img.img1").setAttribute("src", randomDice);
// dice 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomDice2);

if (randomDice === randomDice2) {
    document.querySelector("h1").innerHTML = "Draw";
}

if (randomDice > randomDice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}

if (randomDice < randomDice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
   // RELOAD GAME BUTTON
var reloadButton = document.querySelector("#reload");
 function reload() {
   reload = window.location.reload();
 }
  reloadButton.addEventListener("click", reload, false);

// ADDING CSS CLASS TO BUTTON


function myFunction() {
  var element = document.getElementById("reload");
  element.classList.add(".btn");
}
