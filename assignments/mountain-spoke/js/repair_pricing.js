var table = document.querySelector('table');

var requestURL = "file://data/pricing.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'text';

request.send();

request.onload = function(){
    var prices = JSON.parse(request.responseText);
    console.log(prices);

document.getElementById('tire').innerHTML = prices.tire;
document.getElementById('brake').innerHTML = prices.brake;
document.getElementById('spoke').innerHTML = prices.spoke;
document.getElementById('shift').innerHTML = prices.shift;
document.getElementById('gold').innerHTML = prices.gold;
document.getElementById('platinum').innerHTML = prices.platinum;
    
}