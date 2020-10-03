const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("not a valid choice");
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 2) + 1) {
    case 0:
      return "rock";
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
  }
}
//console.log(getComputerChoice(0));
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE here !";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "COMPUTER WON !";
    } else {
      return "USER WON !";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "COMPUTER WON !";
    } else {
      return "USER WON !";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "COMPUTER WON !";
    } else {
      return "USER WON";
    }
  }
}
function playGame() {
  var userChoice = getUserChoice("paper");
  var computerChoice = getComputerChoice();
  console.log(`you threw  ${userChoice}`);
  console.log(`computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
