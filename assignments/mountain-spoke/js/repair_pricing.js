$.getJSON('data/pricing.json', function(data){
    console.log(data);

document.getElementById('tire').innerHTML = data.prices[0];
document.getElementById('brake').innerHTML = data.prices[1];
document.getElementById('spoke').innerHTML = data.prices[2];
document.getElementById('shift').innerHTML = data.prices[3];
document.getElementById('gold').innerHTML = data.prices[4];
document.getElementById('platinum').innerHTML = data.prices[5];
 
});

