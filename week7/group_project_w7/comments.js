export default class Comments{
    constructor(){
    this.comments = [];
    }
    addComments(type, name, comment){
        const newComment = {
            type :type,
            date: new Date(),
            name: name,
            content: comment,
        }

        this.comments.push(newComment);
    }

    filterCommentsByname(name){
        return this.comments.filter(comment => comment.name === name)
    }

    getAllComments(){
        return this.comments
    }

    renderCommentsList(parentElement, list, name){
        parentElement.insertAdjacentHTML("beforeend", `
            
<form >
<input id=${name}/>
<button type="submit">Send Comment</button>
</form>

        
        <p class=${name}><h4>Comments:</h4>`)
        list.forEach(comment => {
            parentElement.insertAdjacentHTML("beforeend", `
            <p>${comment.content}</p>`)
        })

        this.addEventListeners()
    }

    rerenderCommentsList(name){
        const list = document.querySelector(`p.${name}`);

        list.innerHTML ="";
        this.filterCommentsByname(name).forEach(comment => {

            console.log(comment)
            list.insertAdjacentHTML("afterend", `
            <p>${comment.content}</p>`)
        })
    }

    addEventListeners(){
        const inputs = document.querySelectorAll("input[id]");
        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
            button.addEventListener("click", function(e){
                e.preventDefault();
                const [commentedInput] = [...inputs].filter(input => input.value != "");

                
                this.addComments(commentedInput.id, commentedInput.id, commentedInput.value)

                commentedInput.value ="";
                this.rerenderCommentsList(commentedInput.id)

            }.bind(this))
        })

    }
}
