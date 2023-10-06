const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const N = choice.length;
    let n = Math.floor(Math.random(N) * N);
    return choice[n];
};

function getPlayerChoice() {
    let playerSelection;
    while (true) {
        playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
        for (let i = 0; i < choice.length; i++) {
            if (playerSelection === choice[i]) {
                return playerSelection;
            };
        };
        alert("Please choose again.");
    };
};

function playRound(playerSelection, computerSelection) {
    console.log("You choose " + playerSelection.toUpperCase());
    console.log("Computer choose " + computerSelection.toUpperCase());

    if (playerSelection === computerSelection) {
        alert("Tie!");
        return "tie";
    };
    
    const winCond = ["rock scissors", "paper rock", "scissors paper"];
    const loseCond = ["rock paper", "paper scissors", "scissors rock"];
    
    const cond = playerSelection + " " + computerSelection;
    
    for (let i = 0; i < winCond.length; i++) {
        if (cond === winCond[i]) {
            alert("You win!");
            return "win";
        };
    };

    for (let i = 0; i < loseCond.length; i++) {
        if (cond === loseCond[i]) {
            alert("You lose.");
            return "lose";
        };
    };
};

function game() {
    let playerWin = 0;
    let computerWin = 0;

    while (playerWin < 5 && computerWin < 5) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === "win") {
            playerWin++;
        }
        else if (result === "lose") {
            computerWin++;
        };

        console.log(`You ${playerWin} - ${computerWin} Computer`);
    };

    if (playerWin === 5) {
        alert("You won the game!");
    } else {
        alert("You lost the game.");
    };
};

game();
