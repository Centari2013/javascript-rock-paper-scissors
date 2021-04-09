function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection == computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            return false;
        }else{
            return true;
        }
    }else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            return true;
        }else{
            return false;
        }
    }else if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            return false;
        }else{
            return true;
        }
    }else{
        return "That's not a choice!";
    }

}

function game(){
    
    const winGameMessage = "You WON the game!";
    const loseGameMessage = "You LOST the game!";

    let winCounter = 0;
    
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper, or scissors? ");
        let computerSelection = computerPlay();
        let winRoundMessage = "You Win! " + playerSelection + " beats " + computerSelection;
        let loseRoundMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
        if (playRound(playerSelection, computerSelection)){
            console.log(winRoundMessage);
            winCounter ++;
        }else{
            console.log(loseRoundMessage);
        }
    }

    if (winCounter >= 3){
        console.log(winGameMessage);
    }else{
        console.log(loseGameMessage);
    }
}

game();


/*
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/