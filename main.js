// create array of link elements with labels
var weeklyLinks = [{
    label: "Week 1 notes",
    url: "/week1/index.html"},

    {label: "Week 2 notes",
    url: "/week2/index.html"
}];

listWeeklyItems(weeklyLinks, "linkList");

// create the href list 
function listWeeklyItems(weekItems, listElementName){
    let ol = document.getElementById(listElementName);

    // check if the ol element contains an element
    if(ol){
        weekItems.forEach(element => {

            //creates the anchor and appends label and url
            let anchor = document.createElement('a');
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            // makes the link open on a different tab
            anchor.target = "_blank";
            // create list element and attach anchor
            let li = document.createElement('li');
            li.appendChild(anchor);

            ol.appendChild(li);
        });
    }

}


//document.getElementById("hola").innerHTML = "Hola";
