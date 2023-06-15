let choices = ["rock", "paper", "scissors"]

const outcomes = {
    rock: {loseTo: "paper", winTo: "scissors"},
    paper: {loseTo: "scissors", winTo: "rock"},
    scissors: {loseTo: "rock", winTo: "paper"}
  };

userScore = 0;
computerScore = 0;
scoreBoard = document.querySelector(".scoreboard")


function getComputerChoice(){
  int_gen = Math.floor(Math.random()*3);
  let computer_choice = choices[int_gen];
  return computer_choice
};

// 3 buttons for rock paper scisssors
// choices.forEach(choice => {
//     const button = document.createElement("button")
//     button.id = choice
//     button.textContent = choice
//     button_group.appendChild(button)
// });





function startGame(){
  
  const buttongroup = document.querySelectorAll("button");
  // retrieve id of clicked button
 
  
  buttongroup.forEach(buttons => buttons.addEventListener("click",  function eventL(e){
      // e.stopPropagation();
      let targetID = e.target.id
      console.log(`${targetID} clicked`)
      playRound(targetID, getComputerChoice());
      
    })); 
  // 
  
}
  // ;
  
  startGame()



function playRound(playerSelection, computerSelection) {
  // your code here!
  
  //logic behind win lose
  console.log(playerSelection, computerSelection)

  if (playerSelection == computerSelection){
    // alert(`Computer played ${computerSelection}. You Drew`)
    console.log("Draw")
  }

  else{
     //userchoice.lose is equal to computer choice. user loses
    //userchoice.win is computer choice, user wins

    if (computerSelection == outcomes[playerSelection].loseTo){
      
      console.log(`YOU LOST ${playerSelection}, ${computerSelection}`)
      computerScore+=1
      scoreBoard.textContent = `You: ${userScore}` + "   "+ `Computer: ${computerScore}`
      console.log(`YOU LOST You: ${userScore}` + "   "+ `Computer: ${computerScore}`)
    }
    else {//if (computerSelection == outcomes[playerSelection].winTo )
      
      console.log(`YOU WON ${playerSelection}, ${computerSelection}`)
      userScore+=1
      scoreBoard.textContent = `You: ${userScore}` + "   "+ `Computer: ${computerScore}`
      console.log(`YOU WON You: ${userScore}` + "   "+ `Computer: ${computerScore}`)
  }
};

};