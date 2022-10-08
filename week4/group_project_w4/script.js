const board = document.querySelector(".board");
const resetBtn = document.querySelector("#reset-btn");
const output = document.querySelector(".output");
const squares = document.querySelectorAll(".square");


const player1 = "X";
const player2 = "O";
let currentPlayer = player2;

// resets the squares
function reset() {
    squares.forEach(square => square.innerHTML = "")
}

// I changed the event to click

board.addEventListener("click", function(event) {
    const square = event.target;
    square.innerHTML = currentPlayer;
    // Validate
    const validation = validateBoard(currentPlayer);
    if(validation == true){
        output.textContent = `Player ${currentPlayer} won🎉🎉`;
        reset()
    }else if(validation == "tie"){
        output.textContent = `It's a tie!🤝`
    }
    currentPlayer = currentPlayer == player1 ? player2 : player1;

});

resetBtn.addEventListener("click", reset);

function validateBoard(player) {
    const [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9] = squares;

    const squareValues = [sq1.textContent, sq2.textContent, sq3.textContent, sq4.textContent, sq5.textContent, sq6.textContent, sq7.textContent, sq8.textContent, sq9.textContent];
    const [sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9] = squareValues


    


    const validation = 
    (sqr1 == sqr2 && sqr1 == sqr3 && sqr1 == player) || 
    (sqr4 == sqr5 && sqr4 == sqr6 && sqr4 == player) || 
    (sqr7 == sqr8 && sqr7 == sqr9 && sqr7 == player) ||
    (sqr1 == sqr4 && sqr1 == sqr7 && sqr1 == player) || 
    (sqr2 == sqr5 && sqr2 == sqr8 && sqr2 == player) || 
    (sqr3 == sqr6 && sqr3 == sqr9 && sqr3 == player) ||
    (sqr1 == sqr5 && sqr1 == sqr9 && sqr1 == player) || 
    (sqr3 == sqr5 && sqr3 == sqr7 && sqr3 == player);

    if(squareValues.every(square => square!="")){
        if(!validation)return "tie"
    }

    return validation;
}