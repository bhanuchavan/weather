# weather
Weather Forecast using JavaScript
This is a simple Weather Forecast application implemented in JavaScript that allows users to get the current weather information for a specific location. It uses the OpenWeatherMap API to fetch real-time weather data and displays it in a user-friendly manner.

Features
Get real-time weather information for a chosen location.
Display current weather conditions including temperature, humidity, wind speed, and weather description.
Use of icons to represent different weather conditions for easy visualization.
Responsive design for seamless usage on different devices.
How to Use
Clone the repository to your local machine or download the project as a ZIP file.
Obtain an API key from OpenWeatherMap (sign up on their website to get one).
Create a new file named config.js in the project root directory.
Inside config.js, add the following line and replace 'YOUR_API_KEY' with your actual API key:
javascript
Copy code
const API_KEY = 'YOUR_API_KEY';
Open the index.html file in your web browser.
Enter the name of the location you want to get weather information for (e.g., "New York", "London", "Tokyo", etc.).
Click the "Get Weather" button to retrieve the weather data for the specified location.
Dependencies
This project relies on the following libraries:

jQuery: A fast and feature-rich JavaScript library for DOM manipulation and AJAX calls.
Bootstrap: A popular CSS framework for responsive and mobile-first design.
These dependencies are included in the repository, so you don't need to download them separately.

API Used
This project uses the OpenWeatherMap API to fetch weather data. It provides free access to current weather data, forecasts, and historical weather data for various locations worldwide. To use the API, you need to sign up on their website and obtain an API key.
