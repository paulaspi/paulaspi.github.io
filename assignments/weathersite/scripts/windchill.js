    //get temperatures
    var highT = parseInt(document.getElementById("highTemp").innerHTML);
    var lowT = parseInt(document.getElementById("lowTemp").innerHTML);

    var windSp = parseInt(document.getElementById("windSpeed").innerHTML);
    
    
   var average = (highT + lowT) /2;

   var windChill = 35.74 + (0.6215 * average) - (35.75 * Math.pow(windSp, 0.16)) + (0.4275 * average * Math.pow(windSp, 0.16)); 

   var final = windChill.toFixed(2);

    document.getElementById("windchill").innerHTML = "" + final;
