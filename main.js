// create array of link elements with labels
var weeklyLinks = [{
    label: "Week 1 Notes",
    url: "/week1/index.html"},

    {label: "Week 2 Notes",
    url: "/week2/index.html"},

    {label: "Week 3 Exercises",
    url: "/week3/index.html"},

    {label: "Week 4 Exercises",
    url: "/week4/index.html"},

    {label: "Week 5 Notes",
    url: "/week5/index.html"}
];

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
