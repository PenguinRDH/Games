const gameBoardDisplay = [["","","","","","","","","",""],
                    [   "",
                        document.getElementById("A1"),
                        document.getElementById("A2"),
                        document.getElementById("A3"),
                        document.getElementById("A4"),
                        document.getElementById("A5"),
                        document.getElementById("A6"),
                        document.getElementById("A7"),
                        document.getElementById("A8"),
                        document.getElementById("A9"),
                        document.getElementById("A10")],
                   [    "",
                        document.getElementById("B1"),
                        document.getElementById("B2"),
                        document.getElementById("B3"),
                        document.getElementById("B4"),
                        document.getElementById("B5"),
                        document.getElementById("B6"),
                        document.getElementById("B7"),
                        document.getElementById("B8"),
                        document.getElementById("B9"),
                        document.getElementById("B10")],
                    [   "",
                        document.getElementById("C1"),
                        document.getElementById("C2"),
                        document.getElementById("C3"),
                        document.getElementById("C4"),
                        document.getElementById("C5"),
                        document.getElementById("C6"),
                        document.getElementById("C7"),
                        document.getElementById("C8"),
                        document.getElementById("C9"),
                        document.getElementById("C10")],
                    [   "",
                        document.getElementById("D1"),
                        document.getElementById("D2"),
                        document.getElementById("D3"),
                        document.getElementById("D4"),
                        document.getElementById("D5"),
                        document.getElementById("D6"),
                        document.getElementById("D7"),
                        document.getElementById("D8"),
                        document.getElementById("D9"),
                        document.getElementById("D10")],
                    [   "",
                        document.getElementById("E1"),
                        document.getElementById("E2"),
                        document.getElementById("E3"),
                        document.getElementById("E4"),
                        document.getElementById("E5"),
                        document.getElementById("E6"),
                        document.getElementById("E7"),
                        document.getElementById("E8"),
                        document.getElementById("E9"),
                        document.getElementById("E10")],
                    [   "",
                        document.getElementById("F1"),
                        document.getElementById("F2"),
                        document.getElementById("F3"),
                        document.getElementById("F4"),
                        document.getElementById("F5"),
                        document.getElementById("F6"),
                        document.getElementById("F7"),
                        document.getElementById("F8"),
                        document.getElementById("F9"),
                        document.getElementById("F10")],
                    [   "",
                        document.getElementById("G1"),
                        document.getElementById("G2"),
                        document.getElementById("G3"),
                        document.getElementById("G4"),
                        document.getElementById("G5"),
                        document.getElementById("G6"),
                        document.getElementById("G7"),
                        document.getElementById("G8"),
                        document.getElementById("G9"),
                        document.getElementById("G10")],
                    [   "",
                        document.getElementById("H1"),
                        document.getElementById("H2"),
                        document.getElementById("H3"),
                        document.getElementById("H4"),
                        document.getElementById("H5"),
                        document.getElementById("H6"),
                        document.getElementById("H7"),
                        document.getElementById("H8"),
                        document.getElementById("H9"),
                        document.getElementById("H10")],
                    [   "",
                        document.getElementById("I1"),
                        document.getElementById("I2"),
                        document.getElementById("I3"),
                        document.getElementById("I4"),
                        document.getElementById("I5"),
                        document.getElementById("I6"),
                        document.getElementById("I7"),
                        document.getElementById("I8"),
                        document.getElementById("I9"),
                        document.getElementById("I10")],
                    [   "",
                        document.getElementById("J1"),
                        document.getElementById("J2"),
                        document.getElementById("J3"),
                        document.getElementById("J4"),
                        document.getElementById("J5"),
                        document.getElementById("J6"),
                        document.getElementById("J7"),
                        document.getElementById("J8"),
                        document.getElementById("J9"),
                        document.getElementById("J10")]];
const shotCommentary = document.getElementById("commentary");
var gameBoard = [[0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10],
                [0,1,2,3,4,5,6,7,8,9,10]];
const rowValues = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
class ship
{
    constructor(name, hitPoints, size, symbol) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.size = size;
    this.symbol = symbol;
    }
}

var battleship = new ship("battleship", 4,4,"b");
var carrier = new ship("carrier", 5,5,"c");
var cruiser = new ship("cruiser", 3,3,"r");
var submarine = new ship("submarine", 3,3,"s");
var destroyer = new ship("destroyer", 2,2,"d");
var FLEET = [carrier, battleship, cruiser, submarine, destroyer];
var sinkCounter = 0;
var playerHitPoints = 10;

// determines if there's a winner 
function evaluateForWinner() {
    if (sinkCounter == 5) {
        shotCommentary.textContent = `You win!`;
    }
    if (playerHitPoints == 0) {
        shotCommentary.textContent = `You lose!`;
    }
}
// determine if it is a hit or not
function evaluateShot(param) {
    var x = param[1];
    var y = param[0];
    var symbol;
    if (gameBoard[y][x] == "-") {
        gameBoard[y][x] = "m";
        shotCommentary.textContent = 'You missed!';
    }
    else if (gameBoard[y][x] == "m") {
        shotCommentary.textContent = 'Well that was a waste of ammo...';
    }
    else if (gameBoard[y][x] == "h") {
        shotCommentary.textContent = 'Kick \'em when they\'re down';
    }
    else {
        symbol = gameBoard[y][x];
        gameBoard[y][x] = "h"
        shotCommentary.textContent = 'Hit!';
        updateShipHitpoints(symbol);
    }
    updateBoardDisplay();
}

// checks to make sure there is space to place the ship
function isBoardLocationClear(direction, row, column, size) {
    var count = 0;
    var returnValue = new Number;
    if (direction == 0) {
        for (let i = 0; i < size; ++i) {
            if (gameBoard[row][column + i] != '-') {
                count = 0;
                break;
            }
            else {
                ++count;
            }
        }
    }
    else {
        for (let i = 0; i < size; ++i) {
            if (gameBoard[row + i][column] != '-') {
                count = 0;
                break;
            }
            else {
                ++count;
            }
        }
    }
    if (count == size) {
        returnValue = 1;
    }
    else {
        returnValue = 0;
    }
    return returnValue;
}
// returns the cell location as a tuple of numbers
function pickShot(param) {
    var cell = document.getElementById(param).id;
    if (param.length == 2) {
        var x = param[1];
        var y = param[0];
    }
    else {
        var x = param[1] + param[2];
        var y = param[0];
    }
    y = searchIndex(y, rowValues);
    return [y,x];
    
}

// places the ships-- triggered when the user presses start
function placeShips() {
    var size = new Number;
    var symbol = new String;
    var direction = new Number;
    var row = new Number;
    var column = new Number;
    var placed = new Number;

    for (let k = 0; k < 5; ++k) {
        size = FLEET[k].size;
        symbol = FLEET[k].symbol;
        do {
            placed = 0;
            direction = Math.round(Math.random()*10) %2; 
            if (direction == 0) {          // horizontal 
                row = Math.round(Math.random() *10);
                column = Math.round(Math.random() *10000) % (10 - size)+1;
    
                if (isBoardLocationClear(direction, row, column, size))
                {
                    for (i = 0; i < size; ++i) {
                        gameBoard[row][column + i] = symbol;
                    }
                    placed = 1;
                }
            }
            else {
                row = Math.round(Math.random() *10000) % (10 - size)+1;
                column = Math.round(Math.random() *10);
                
                if (isBoardLocationClear(direction, row, column, size))
                {
                    for (i = 0; i < size; ++i) {
                        gameBoard[row+i][column] = symbol;
                    }
                    placed = 1;
                }
            }
        } while (!placed);
        
    }
}








// changes all the game board to '-'
function resetGameBoard() {
    for (let i = 1; i < 11; ++i) {
        for (let j = 1; j < 11; ++j) {
            gameBoard[i][j] = "-";
        }
    }
    
}

// shows the locations of the surviving boats
function revealShips() {
    for (let i = 1; i < 11; ++i) {
        for (let j = 1; j < 11; ++j) {
            if (gameBoard[i][j] == "-") {
                gameBoardDisplay[i][j].textContent = '🌊';
            }
            else if (gameBoard[i][j] == "h") {
                gameBoardDisplay[i][j].textContent = '💥';
            }
            else if (gameBoard[i][j] == "m") {
                gameBoardDisplay[i][j] == '🗙';
            }
            else { // this needs to be here, otherwise in game # 2+, the old boats don't go away 
                gameBoardDisplay[i][j].textContent = '🛥️';
            }
        }
    }
}

// searches an array and returns the index of the first location, if present in the array 
function searchIndex(searchTerm, array)  {
    var arrayLength = array.length;
    var searchIndex = -1;
    for (var i = 0; i < arrayLength; ++i) {
        if (array[i] == searchTerm) {
            searchIndex = i;
            break;
        }
    }
    if (searchIndex > -1) {
        return searchIndex;
    }
    else {
        console.log("searchTerm is not in array");
    }
}
// updates display of board
function updateBoardDisplay() {
   
    for (let i = 1; i < 11; ++i) {
        for (let j = 1; j < 11; ++j) {
            if (gameBoard[i][j] == "h") {
                gameBoardDisplay[i][j].textContent = '🔥';
            }
            else if (gameBoard[i][j] == "m") {
                gameBoardDisplay[i][j] = '🗙';
        
            }
            else {
                gameBoardDisplay[i][j] = '🌊';
            }
        }
    }
}
// updates ship stats when hit
function updateShipHitpoints(symbol) {
    for (let i = 0; i < 5; ++i) {
        if (symbol == FLEET[i].symbol) {
            FLEET[i].hitPoints -= 1;
            if (FLEET[i].hitPoints == 0) {
                shotCommentary.textContent = `You sunk the ${FLEET[i].name}`;
                sinkCounter += 1;  
            }
        }
    }
}

//consolidation of functions when playing-- requires game to be started
function playGame(cell) {
    evaluateShot(pickShot(cell));
    updateBoardDisplay();
    evaluateForWinner();
    //printBoardToConsole();
    revealShips();
}

// reset game
function resetGame() {
    resetGameBoard();
    updateBoardDisplay();
    placeShips();
    shotCommentary.textContent = '';
    playerHitPoints = 10;
    sinkCounter = 0;
    for (let i = 0; i < 5; ++i) {
        FLEET[i].hitPoints = FLEET[i].size;
    }
    //printBoardToConsole();
}


/// Trouble shooting functions
// prints board to console
function printBoardToConsole() {
    for (let i = 1; i < 11; ++i) {
        for (let j = 1; j < 11; ++j) {
            console.log(gameBoard[i][j]);
        }
    }
}