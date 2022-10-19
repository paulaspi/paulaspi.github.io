// import from todo.js
import ToDos from './todo.js';

const list = document.getElementById('list');
// creating a list with all the elements contain in the list of tasks 
const myToDos = new ToDos(list, 'todo');