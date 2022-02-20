var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// CAN ALSO USE CONCATENATION 
//generate random nos. and add in b/w of"dice" & ".png"
var mapping = ['', 'images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

document.getElementsByClassName("img1")[0].setAttribute("src", mapping[randomNumber1]);
document.getElementsByClassName("img2")[0].setAttribute("src", mapping[randomNumber2]);

//can also use querySelectorAll 
var res1 = document.getElementsByClassName("img1")[0].getAttribute("src").slice(11, 13);
var res2 = document.getElementsByClassName("img2")[0].getAttribute("src").slice(11, 13);
if (res1 == res2) {
    //draw
    document.getElementsByTagName("h1")[0].innerText = "Draw";
    //document.querySelector("h1").innerText = "Draw";
} else if (res1 > res2) {
    //player 1 wins
    document.getElementsByTagName("h1")[0].innerText = "🚩 Player1 wins";
} else {
    //player 2 wins
    document.getElementsByTagName("h1")[0].innerText = "Player2 wins 🚩";
}