// rock paper scissors
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("compScore");
var playerScore = 0;
var computerScore = 0;

function playGame(param)
{
    var computerChoice = choices[Math.round(Math.random()*10)%3];
    var result = "";

    if (param == computerChoice)
    {
        result = "It's a Tie!";
    }
    else 
    {
        switch (param)
        {
            case 'rock':
                if (computerChoice == 'scissors')
                {
                    result = "You Win!";
                }
                else
                {
                    result = "You Lose!";
                }
                break;
            case 'paper':
                if (computerChoice == 'rock')
                {
                    result = "You Win!";
                }
                else
                {
                    result = "You Lose!";
                }
                break;
            case 'scissors':
                if (computerChoice == 'paper')
                {
                    result = "You Win!";
                }
                else
                {
                    result = "You Lose!";
                }
                break;
        }
    }
    if (result == 'You Win!')
    {
        playerScore += 1;
    }
    else if (result == 'You Lose!')
    {
        computerScore += 1;
    }
    playerDisplay.textContent = `Player: ${param}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

}
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    resultDisplay.textContent = '';
    playerDisplay.textContent = 'Player: ';
    computerDisplay.textContent = 'Computer: ';
}