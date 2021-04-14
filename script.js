//globals
let playerScore = 0;
let computerScore = 0;
let gameButtons = document.querySelectorAll(".game-btn");

function addButtonFunction() {
    gameButtons = document.querySelectorAll(".game-btn");
    gameButtons.forEach((button) => {
        button.addEventListener('click', function buttonActions() {
            playRound(button.id, computerPlay());
            winCheck();
        });
    });
}

function removeButtonFunction() {
    gameButtons.forEach((button) => {
        let cleanGameButton = button.cloneNode(true);
        button.parentNode.replaceChild(cleanGameButton, button);
        console.log(cleanGameButton.className);
        console.log(cleanGameButton.id);
    });
}

function computerPlay() { //finished
    let num = Math.floor(Math.random() * 3) + 1;
    let choice = "";
    switch (num) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) { //finished
    let winRoundMessage = "You won the round! " + playerSelection + " beats " + computerSelection;
    let loseRoundMessage = "You lost the round! " + computerSelection + " beats " + playerSelection;
    let drawMessage = "It's a draw!";

    if (playerSelection == computerSelection){
        printScore(drawMessage);
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
      playerSelection == "Paper" && computerSelection == "Rock" ||
      playerSelection == "Scissors" && computerSelection == "Paper"){
            playerScore++;
            printScore(winRoundMessage);
    }else{
        computerScore++;
        printScore(loseRoundMessage);
    }
}

function printScore(message = "Press a Button to Start"){ //needs testing
    const resultBox = document.querySelector("#result-box");
    while (resultBox.firstChild){
        resultBox.removeChild(resultBox.firstChild);
    }
    let results = document.createElement('p');
    results.textContent = "Your Score: " + playerScore + "\n" + 
      "Computer Score: " + computerScore + "\n" + message; 
    resultBox.appendChild(results);
}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    printScore();
    addButtonFunction();
}

function winCheck(){
    let winGameMessage = "You won the game!";
    let loseGameMessage = "You lost the game!";
    if (computerScore == 5) {
        removeButtonFunction();
        printScore(loseGameMessage);
        setTimeout(gameReset, 3000);
    } else if (playerScore == 5) {
        removeButtonFunction();
        printScore(winGameMessage);
        setTimeout(gameReset(), 3000);
    }
}

addButtonFunction();
printScore();

