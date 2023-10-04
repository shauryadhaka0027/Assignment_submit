async function fetchWeather(){
    try{
        let APIkey = "aa2338a405271c2dbb7943eb7c748def";
        let city = document.getElementById("weather").value; // Changed from cityInput
    
        let res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
        );
        let data = await res.json();
    
        console.log(data);
    
        // Weather data
        let iconId = data.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
        document.getElementById("weatherIcon").src = iconUrl;
        document.getElementById("minTemp").innerText = data.main.temp_min;
        document.getElementById("maxTemp").innerText = data.main.temp_max;
        document.getElementById("wind").innerText = data.wind.speed;
        document.getElementById("clouds").innerText = data.clouds.all;
        document.getElementById("sunrise").innerText = new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString();
        document.getElementById("sunset").innerText = new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString();
    
        // Update the Google map iframe src
        const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
        document.getElementById("googleMap").src = googleMapUrl;
    
        getForecastData(city);
      } 
    catch(error){
        console.error(error);
    }
}

fetchWeather();
