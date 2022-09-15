/* function to add message below a button. Change text of button once clicked
function showCongratulations(theButtonClicked){
    document.getElementById("result_display").innerHTML = 
        "Congratulations, you did it! You got the page to update!"
    theButtonClicked.innerHTML = "Click Me Again!"
}*/

var weeklyLinks = [{
    label: "Week 1 notes",
    url: "week1/index.html",

    label: "Week 2 notes",
    url: "week2/index.html",
}]

var list = document.getElementById(linkList)
var linkLenght = weeklyLinks.length

for(var i = 0; i < linkLenght; i++){
    linkList.innerHTML += "<li><a" + weeklyLinks[i] + "/a></li>"


}

