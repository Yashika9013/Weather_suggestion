const axios = require('axios');
const config = require('../config/config');

const getCurrentWeather = async (location) => {
    const apiKey = config.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const weatherData = {
            temperature: response.data.main.temp,
            condition: response.data.weather[0].description,
            windSpeed: response.data.wind.speed,
            humidity: response.data.main.humidity,
        };
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Unable to fetch weather data');
    }
};

module.exports = { getCurrentWeather };
