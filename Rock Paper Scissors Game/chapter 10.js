let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const showUserScore = document.querySelector("#user-score");
const showCompScore = document.querySelector("#comp-score");

const resetGame = document.querySelector("#reset-btn");

// Choice click event
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Generate computer choice
const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Draw
const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        showUserScore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        showCompScore.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

// Play the game
const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Reset the game
const resetBtn = () => {
    userScore = 0;
    compScore = 0;
    showUserScore.innerText = userScore;
    showCompScore.innerText = compScore;
    msg.innerText = "Game Reset! Play Again!";
    msg.style.backgroundColor = "rgb(20, 147, 137)";
    msg.style.color = "white";
};

// Attach reset button click
resetGame.addEventListener("click", resetBtn);
