/*const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];*/

const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/questions.json';

fetch(url)
.then(res => res.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

// utility functions
function random(a, b=1){
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array){
    for (let i = array.length; i; i--){
        let j = random(i)-1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

// view object
const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),

    // function used to update the content of an element on the page
    // three parameters: first the element that displays the content, second is for the
    // content it's to be updated with, and last is an object of any HTML attributes that 
    // can be added to the element.
    render(target,content,attributes){
        for(const key in attributes){
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    show(element){
        element.style.display = 'block';
    },
    
    hide(element){
        element.style.display = 'none';
    },

    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        //this.resetForm();
    },

   /* resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },*/

    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },

    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
};

const game = {
    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
        this.ask();
    },

    countdown(){
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if(game.secondsRemaining <= 0){
            game.gameOver();
        }
    },

    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 2){
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [this.questions[0].realName, this.questions[1].realName,
            this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
            view.render(view.response, view.buttons(options));
        }
        else {
            this.gameOver();
        }
    },

    check(event){
        console.log('check(event) invoked');
        // event.preventDefault();
        // grabs the answer from the input field
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result, 'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        // view.resetForm();
        this.ask();
    },

    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info,`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
    }
}

// game.start(quiz);
// view.start.addEventListener('click', () => game.start(quiz), false);

// event handler that fires when the form is submitted
// view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);