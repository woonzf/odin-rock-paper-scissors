const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const N = choice.length;
    let n = Math.floor(Math.random() * N);
    return choice[n];
};

function playRound(playerSelection, computerSelection) {
    const ePlayerChoice = document.querySelector("#playerSelection");
    ePlayerChoice.textContent = 
        "You choose " + playerSelection.toUpperCase();

    const eComputerChoice = document.querySelector("#computerSelection");
    eComputerChoice.textContent = 
        "Computer choose " + computerSelection.toUpperCase();

    const eResult = document.querySelector("#roundResult");
    
    if (playerSelection === computerSelection) {
        eResult.textContent = "Tie!";
        return "tie";
    };

    const winCond = ["rock scissors", "paper rock", "scissors paper"];
    const loseCond = ["rock paper", "paper scissors", "scissors rock"];
    
    const cond = playerSelection + " " + computerSelection;
    
    for (let i = 0; i < winCond.length; i++) {
        if (cond === winCond[i]) {
            eResult.textContent = "You win!";
            return "win";
        };
    };

    for (let i = 0; i < loseCond.length; i++) {
        if (cond === loseCond[i]) {
            eResult.textContent = "Computer wins!";
            return "lose";
        };
    };
};

let playerWin = 0;
let computerWin = 0;

function game(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice());

    if (result === "win") {
        playerWin++;
    }
    else if (result === "lose") {
        computerWin++;
    };

    let score = document.querySelector("#score");
    score.textContent = `You ${playerWin} - ${computerWin} Computer`;

    let gameResult = document.querySelector("#gameResult");

    if (playerWin === 5) {
        gameResult.textContent = "You won the game!";
    } 
    else if (computerWin === 5) {
        gameResult.textContent = "Computer won the game!";
    };
};

document.addEventListener("DOMContentLoaded", () => {
    const playerChoice = document.querySelector("#playerChoice");
    let playerSelection;

    const buttons = playerChoice.querySelectorAll("button");

    playerChoice.addEventListener("click", (e) => {
        let target = e.target;

        switch(target.id) {
            case "rock":
                playerSelection = target.id;
                break;
            case "paper":
                playerSelection = target.id;
                break;
            case "scissors":
                playerSelection = target.id;
                break;
        };

        game(playerSelection);

        // Disable buttons when game ends
        if (playerWin === 5 || computerWin === 5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
        };
    });

    // Reload page
    const reload = document.querySelector("#reload");

    reload.addEventListener("click", () => {
        location.reload();
    });
});
