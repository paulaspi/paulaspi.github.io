$.getJSON('data/pricing.json', function(data){
    console.log(data);

document.getElementById('tire').innerHTML = data.tire;
document.getElementById('brake').innerHTML = data.brake;
document.getElementById('spoke').innerHTML = data.spoke;
document.getElementById('shift').innerHTML = data.shift;
document.getElementById('gold').innerHTML = data.gold;
document.getElementById('platinum').innerHTML = 'hola';
 
});

