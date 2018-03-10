var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'text';

request.send();

request.onload = function(){
    var cities = JSON.parse(request.responseText);
    console.log(cities);
    
    document.getElementById('townName').innerHTML = cities.towns[0].name;
    document.getElementById('motto').innerHTML = cities.towns[0].motto;
    document.getElementById('yearFound').innerHTML = cities.towns[0].yearFounded;
    document.getElementById('population').innerHTML = cities.towns[0].currentPopulation;
    document.getElementById('rainfall').innerHTML = cities.towns[0].averageRainfall;
    
    document.getElementById('townName1').innerHTML = cities.towns[1].name;
    document.getElementById('motto1').innerHTML = cities.towns[1].motto;
    document.getElementById('yearFound1').innerHTML = cities.towns[1].yearFounded;
    document.getElementById('population1').innerHTML = cities.towns[1].currentPopulation;
    document.getElementById('rainfall1').innerHTML = cities.towns[1].averageRainfall;
    
    document.getElementById('townName2').innerHTML = cities.towns[3].name;
    document.getElementById('motto2').innerHTML = cities.towns[3].motto;
    document.getElementById('yearFound2').innerHTML = cities.towns[3].yearFounded;
    document.getElementById('population2').innerHTML = cities.towns[3].currentPopulation;
    document.getElementById('rainfall2').innerHTML = cities.towns[3].averageRainfall;
    
} 


