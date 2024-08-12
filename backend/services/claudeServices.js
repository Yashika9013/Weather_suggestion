const axios = require('axios');
const config = require('../config/config');

const generateSuggestion = async (weatherData) => {
    const prompt = `Based on the following weather data:
        - Temperature: ${weatherData.temperature}°C
        - Condition: ${weatherData.condition}
        - Wind Speed: ${weatherData.windSpeed} m/s
        - Humidity: ${weatherData.humidity}%
      
        Please suggest what the user should wear or bring with them.`;

    try {
        const response = await axios.post(config.CLAUDE_API_URL, {
            prompt: prompt,
            api_key: config.CLAUDE_API_KEY,
        });
        return response.data.suggestion;
    } catch (error) {
        console.error('Error generating suggestion:', error);
        throw new Error('Unable to generate suggestion');
    }
};

module.exports = { generateSuggestion };
