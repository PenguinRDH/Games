const resultDisplay = document.getElementById('resultDisplay');
const numberGuessesDisplay = document.getElementById('numberOfGuesses');
const directionsDisplay = document.getElementById('directions');

var guess = null;
var targetNumber = null;
var guesses = 0;
var result = "";

function generateNumber(param) {
    targetNumber = Math.round(Math.random() * param)+1;
    reset();
    console.log(targetNumber);

}
function compareNumbers() {
    guess = Number(document.getElementById('guess').value);
    guesses += 1;
    directionsDisplay.textContent = '';

    if (result != "You Guessed It!" && targetNumber != null)
    {
        if (targetNumber == guess)
        {
            result = "You Guessed It!";
            resultDisplay.textContent = result;
            numberGuessesDisplay.textContent = `It took ${guesses} guesses`;
        }
        else if (guess > targetNumber)
        {
            result = "Too High!";
            resultDisplay.textContent = result;
        }
        else
        {
            result = "Too Low!";
            resultDisplay.textContent = result;
        }
    }
    else
    {
        resultDisplay.textContent = "Generate New Number";
    }
}
function reset() {
    guesses = 0;
    result = "";
    numberGuessesDisplay.textContent = '';
    resultDisplay.textContent = '';
    directionsDisplay.textContent = 'Start guessing...';
}
