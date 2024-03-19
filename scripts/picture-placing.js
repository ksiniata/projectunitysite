var div = document.getElementById("background-div");
var randomX = Math.floor(Math.random() * 101); // случайное значение от 0 до 100
var randomY = Math.floor(Math.random() * 101); // случайное значение от 0 до 100
div.style.backgroundPosition = randomX + "% " + randomY + "%";