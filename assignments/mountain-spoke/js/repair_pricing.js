$.getJSON('data/pricing.json', function(data){
    console.log(prices);

document.getElementById('tire').innerHTML = prices.tire;
document.getElementById('brake').innerHTML = prices.brake;
document.getElementById('spoke').innerHTML = prices.spoke;
document.getElementById('shift').innerHTML = prices.shift;
document.getElementById('gold').innerHTML = prices.gold;
document.getElementById('platinum').innerHTML = prices.platinum;
 
});

