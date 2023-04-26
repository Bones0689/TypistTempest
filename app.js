/*----- constants -----*/
const gameContainer = document.getElementById("gameContainer");
const gameScore = document.getElementById("gameScore");
const gameTime = document.getElementById("gameTime");
const gameTarget = document.getElementById("gameTarget");
const gameButton = document.getElementById("gameButton");


/*----- state variables -----*/
let score = 0;
let timeRemaining = 60;
let gameStart = false;
let timeInterval; 



/*----- functions -----*/
