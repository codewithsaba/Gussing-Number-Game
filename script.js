let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = () => {
    msg.innerHTML = "Game was Draw, play again."
    msg.style.background = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
      userScore++;
      userScorePara.innerHTML = userScore;
      msg.innerHTML = `you win! your ${userChoice} beats ${compChoice}`;
      msg.style.background = "green";
    } else {
       compScore++;
       compScorePara.innerHTML = compScore;
       msg.innerHTML = `you lose.  ${compChoice} beats your ${userChoice}`;
       msg.style.background = "red";
    }

};


const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice ==="scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
         console.log("choice was click", userChoice);
         playGame(userChoice);
    })
})