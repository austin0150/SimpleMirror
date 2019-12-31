function updateWeather(){
  var key = '';

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.openweathermap.org/data/2.5/weather?zip=" + '48111' + '&appid=' + key,
    "method": "GET",
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("temp").innerHTML = ((response.main.temp - 273.15) * (9/5) + 32).toPrecision(2);
    document.getElementById("weatherIco").src = "images/" + response.weather[0].icon + ".png";
  });
}

updateWeather();
var weatherUp = setInterval(() => {
  updateWeather();
}, 300000);