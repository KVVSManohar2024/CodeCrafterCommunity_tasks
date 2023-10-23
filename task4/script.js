function searchWeather() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value.trim();

    if (!location) {
        alert("Please enter a valid location.");
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '2b8212531d633416695ddd3629c75337';

    // Make an API request to OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Could not fetch weather data. Please try again later.</p>";
        });
}
