import React from 'react';

function WeatherDisplay({ weather }) {
    return (
        <div>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
            <p>Wind Speed: {weather.windSpeed} m/s</p>
            <p>Humidity: {weather.humidity}%</p>
        </div>
    );
}

export default WeatherDisplay;
