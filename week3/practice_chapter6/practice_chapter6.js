const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];

// view object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
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
    }
}

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;

        // main game loop
        for(const question of this.questions){
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
        view.hide(view.start);
    },

    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response = prompt(question);
        this.check(response);
    },

    check(response){
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result, 'Correct',{'class':'correct'});
            alert('Correct!');
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },

    gameOver(){
        view.show(view.start);
        view.render(view.info,`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        
    }
}

// game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);