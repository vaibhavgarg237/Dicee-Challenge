var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var mapping = ['', 'images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

document.getElementsByClassName("img1")[0].setAttribute("src", mapping[randomNumber1]);
document.getElementsByClassName("img2")[0].setAttribute("src", mapping[randomNumber2]);