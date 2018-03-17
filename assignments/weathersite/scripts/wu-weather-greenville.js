var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/a14523de9ecefb05/conditions/q/TX/Greenville.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('todayForec').innerHTML = weatherInfo.current_observation.ob_url;
    
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    
} //end of onload