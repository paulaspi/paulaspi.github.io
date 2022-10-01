const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () => console.log('You moved!'));

addEventListener('keydown', highlight);
addEventListener('keyup', () => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character.`));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event){
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken link!');
});

// bubbling and capturing example
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'), true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'), true);

// adding an event listener to a parent element so all its children are fired when the event fires.
ulElement.addEventListener('click', highlight);