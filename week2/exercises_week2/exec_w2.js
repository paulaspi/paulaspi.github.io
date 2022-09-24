// create nested array that contains questions and their answers
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

// refactoring code to include functions
function start(quiz){
    let score = 0;

    //main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
   // end of main game loop

gameOver();

// function declarations
// function that asks the questions
function ask(question){
    return prompt(question);
}

// function that checks if the user's answer is correct
function check(response,answer){
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

function gameOver(){
    alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}

}
start(quiz);



/*
// initialize variable to keep track of how many answers are correct
let score = 0;

// create a for-of loop to iterate through the questions and answers
for(const [question,answer] of quiz){
    // the loop starts by asking the question using a prompt that allows the 
    // player to enter an answer that is stored in the variable response
    const response = prompt(question);
    // use an if to compare answers. If it is correct, display a message
    // and increase score. If it's not, provide the correct answer.
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`)
    }
}

// At the end of the game, report the player's score
alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);
// note the trick to use plurals only when the score is greater than 1
*/