choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
  int_gen = Math.floor(Math.random()*3);
  let computer_choice = choices[int_gen];
  return computer_choice
}

function startGame(){
  // prompt for a choice by user
  let playerSelection = (prompt("rock, paper, scissors?")).toLowerCase();
  if (choices.indexOf(playerSelection) == -1){
    alert("Invalid Input!")
    
    return;
  }
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  
  
  return;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  
  //logic behind win lose
  console.log(playerSelection, computerSelection)
  const outcomes = {
    rock: {loseTo: "paper", winTo: "scissors"},
    paper: {loseTo: "scissors", winTo: "rock"},
    scissors: {loseTo: "rock", winTo: "paper"}
  }


  if (playerSelection == computerSelection){
    alert("You Drew")
    console.log("Draw")
  }
  else{
     //userchoice.lose is equal to computer choice. user loses
    //userchoice.win is computer choice, user wins
    
    if (outcomes[playerSelection].loseTo === computerSelection){
      alert("You Lost")
      console.log("Lose")
    }
    else if (outcomes[playerSelection].winTo === computerSelection)
      alert("You Won")
      console.log("Win")
  }
}
