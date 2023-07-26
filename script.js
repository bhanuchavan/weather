function getWeather() {
    const apiKey = '30ca99e02cc6f60ba7cb0df9fda89d40'; // Replace with your actual API key
    const city = document.getElementById('city').value;

    // Make a request to the API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Process the data and display it on the page
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>Current Weather in ${data.name}</h2>
                <p>Description: ${data.weather[0].description}</p>
                <p>Temperature: ${convertKelvinToCelsius(data.main.temp)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>Error fetching weather data,please try again later.</p>`;
        });
}

function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}
