import { writeToLS, readFromLS, clickButton } from "./utils.js";

// storing our list of todos in memory
let liveToDos = null;

function renderList(list, element, toDos, hidden){
    console.log(list);
    element.innerHTML = "";

    list.forEach(toDo => {
        const item = document.createElement('li');

        let cBox = null;
        let btn = null;

        if(hidden && toDo.completed){
            item.innerHTML = `<label><input type="checkbox" checked><strike>${toDo.content}</strike></label><button>X</button>`;
        } else if(hidden && !toDo.completed){
            item.innerHTML = `<label><input type="checkbox">${toDo.content}</label><button>X</button>`;
        } else if(!hidden && !toDo.completed){
            item.innerHTML = `<label><input type="checkbox">${toDo.content}</label><button>X</button>`;
        } else if(!hidden && toDo.completed){
            item.innerHTML = `<label><input type="checkbox" checked><strike>${toDo.content}</strike></label><button>X</button>`;
        }

        if(hidden || (!hidden && !toDo.completed)){
        // wire listener to the checkbox
        cBox = item.childNodes[0].childNodes[0];

        if(cBox){
            cBox.addEventListener("change", function(){
                toDos.completeToDo(toDo.id);
            });
        }

        // wire listener to the button
        btn = item.childNodes[1];
        if(btn){
            btn.addEventListener("click", function(){
                toDos.removeToDo(toDo.id);
            });
        }

        element.appendChild(item);
    }
    });

}

function getToDos(key){
    if(liveToDos === null) {
        // we need to go read the list from the data store
        liveToDos = readFromLS(key) || [];
    }

    return liveToDos;
}

function addToDo(value, key){
    // use the Date.now() as the id for every item in the list
    const newToDo = {
        id: new Date(),
        content: value,
        completed: false 
    };

    liveToDos.push(newToDo);
    writeToLS(key, liveToDos);
}

function deleteToDo(key, listKey){
    let newList = liveToDos.filter(item => item.id != key);
    liveToDos = newList;
    writeToLS(listKey, liveToDos);
}

/* function filterToDos(key, completed = true){
    let toDos = getToDos(key);

    // return a list of either completed or not completed toDos based on the parameter
    return toDos.filter(item => item.completed === hidden);
}
*/

// public
export default class ToDos {
    constructor(listElement, key){
        console.log(this.listElement);
        this.listElement = listElement;
        console.log(this.listElement);

        // key for localStorage saving and lookup
        this.key = key;

        // binding the button to the class object
        clickButton("#addTodo", this.newToDo.bind(this));
        clickButton("#showAll", this.listToDos.bind(this));
        clickButton("#showCompleted", this.listToDos.bind(this, false));
        clickButton("#showIncomplete", this.listToDos.bind(this, true));

        this.listToDos();
    }

    newToDo(){
        const task = document.getElementById("todoInput");
        addToDo(task.value, this.key);
        task.value = "";
        this.listToDos();
    }

    findTodo(id){
        let toDo = liveToDos.find(element => {
            return element.id === id; 
        });

        return toDo;
    }

    completeToDo(id){
        console.log(id + "checked");
        let toDo = this.findTodo(id);

        if(toDo){
            toDo.completed = !toDo.completed;
            writeToLS(this.key, liveToDos);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    removeToDo(id){
        console.log(id + "removed");
        let toDo = this.findTodo(id);

        if(toDo){
            deleteToDo(id, this.key);
            renderList(liveToDos, this.listElement, this, true);
        }
    }

    listToDos(hidden = true){
        renderList(getToDos(this.key), this.listElement, this, hidden);
    }
}