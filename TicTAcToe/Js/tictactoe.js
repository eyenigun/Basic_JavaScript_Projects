// tictactoe.js

// Variable to keep track of whose turn it is
let activePlayer = 'X';

// Array to store moves - use this to determine win conditions
let selectedSquares = [];

// Function to place X or O in a square
function placeXorO(squareNumber) {
    // Checks if the square has been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // Variable to hold the HTML element that was clicked
        let select = document.getElementById(squareNumber);

        // Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = "url('images/x.png')";
        } else {
            select.style.backgroundImage = "url('images/o.png')";
        }

        // Adds the square number and player to the array
        selectedSquares.push(squareNumber + activePlayer);

        // Calls the function to check for a win
        checkWinConditions();

        // Changes the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // Function to play the placement sound
        audio('./media/place.mp3');

        // Checks if it is the computer's turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }

        // Returning true is needed for the computersTurn() function
        return true;
    }
}

// Picks a random square for the computer's turn
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXorO(pickASquare)) {
            placeXorO(pickASquare);
            success = true;
        }
    }
}

// This function parses the selectedSquares array to determine if a player has won
// The drawLine function is called if a win condition is met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 100, 520, 520) }

    // Checks for a tie - if no win conditions are met and 9 squares have been selected
    else if (selectedSquares.length >= 9) {
        // Plays the tie sound
        audio('./media/tie.mp3');
        // Resets the game after a tie
        setTimeout(function () { resetGame(); }, 500);
    }
}

// ADD REMAINING 3 PAGES FROM THE MODAL ANSWER