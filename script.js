// console.log('hello world');
const playerScore = document.getElementById("player-score").innerText;
/*
Rock Paper Scissors 🚀🔥
Concepts covered in this project
👉 For loops
👉 Dom Manipulation
👉 Variables
👉 Conditionals (if else if)
👉 Template Literals
👉 Event Listeners
👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and s that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
  function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  // console.log(choice, 'hello world');
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  };
}
// console.log(getComputerChoice());
// getComputerChoice()
// ** getResult compares playerChoice & computerChoice and s the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  //  the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  let score = [];
  if (playerChoice == computerChoice) {
    score.push([0]);
    // console.log(score);
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score.push([1]);
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    score.push([-1]);
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    score.push([-1]);
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score.push([1]);
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    score.push([-1]);
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score.push([1]);
  }
  return score[0];
}
console.log((getResult("Paper", "Scissors")))

// All situations where human wins, set `score` to 1
// make sure to use else ifs here
// Otherwise human loses (aka set score to -1)
//  score

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id! 
  // return

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
}

// ** endGame function clears all the text on the DOM **
function endGame() {}

playGame();
