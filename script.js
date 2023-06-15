const pcChoices = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(pcChoices) {
  if (pcChoices === 1) {
    return "rock";
  } else if (pcChoices === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
 
const buttons = document.querySelectorAll('.button');
buttons.forEach((e) => {
        e.addEventListener('click', () => {
            console.log(e);
        });
    });



    