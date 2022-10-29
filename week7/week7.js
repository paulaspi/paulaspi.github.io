const links = [
    {
        label: "Exercise from Book",
        url: "./exercises_w7/exercise_w7.html"
    },

    {
        label: "Group Project",
        url: "./group_project_w7/hiking-complete.html"
    }
]

// const ul = document.getElementById("#list");
createList(links, "list");

function createList(elementList, listElementName){
    let ul = document.getElementById(listElementName);

    if(ul){
        elementList.forEach(element => {
            //creates the anchor and appends label and url
            let anchor = document.createElement('a');
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            // makes the link open on a different tab
            anchor.target = "_blank";
            // create list element and attach anchor
            let li = document.createElement('li');
            li.appendChild(anchor);

            ul.appendChild(li);
        });
    }
    
}

