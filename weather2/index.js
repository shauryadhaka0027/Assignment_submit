async function fetchWeather() {
    const cityName = document.getElementById("weather").value;
    await getForecastData(cityName);
}

async function getForecastData(city) {
    try {
        let APIkey = "aa2338a405271c2dbb7943eb7c748def";
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`
        );
        let data = await res.json();
        console.log(data);
        const forecastEls = document.getElementById("forecastDays");
        forecastEls.innerHTML = ""; 

    
        const dailyData = data.list.filter((item, index) => index % 8 === 0);

        dailyData.forEach((day, idx) => {
            if (idx < 5) {
                
                const temp = day.main.temp;
                const icon = day.weather[0].icon;
                const date = new Date(day.dt_txt).toLocaleDateString();

                forecastEls.innerHTML += `
                    <div class="forecast-day">
                        <div class="forecast-date">${date}</div>
                        <div class="forecast-icon">
                            <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                        </div>
                        <div class="forecast-temp">${temp}°C</div>
                    </div>
                `;
            }
        });
    } catch (error) {
        console.log(error);
    }
}
