/* function to add message below a button. Change text of button once clicked
function showCongratulations(theButtonClicked){
    document.getElementById("result_display").innerHTML = 
        "Congratulations, you did it! You got the page to update!"
    theButtonClicked.innerHTML = "Click Me Again!"
}*/

function loadStory(){
    var storyName = document.getElementById('name_input').value 
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}

function saveStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
}

function displayStory(){
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
}