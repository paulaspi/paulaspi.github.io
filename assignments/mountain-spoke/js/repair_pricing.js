$.getJSON('data/pricing.json', function(data){
    console.log(prices);

document.getElementById('tire').innerHTML = prices[0];
document.getElementById('brake').innerHTML = prices[1];
document.getElementById('spoke').innerHTML = prices[2];
document.getElementById('shift').innerHTML = prices[3];
document.getElementById('gold').innerHTML = prices[4];
document.getElementById('platinum').innerHTML = prices[5];
 
});

