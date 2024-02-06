// Iteration 8: Making scoreboard functional
let score = localStorage.getItem("score");
var scoreboard = document.getAnimations("score-board");
const playAgain = document.getElementById("play-again-button");

scoreboard.innerHtml = score;

playAgain.onclick = () =>{
    location.href = "game.html"
};