const { getCurrentWeather } = require('../services/weatherService');
const { generateSuggestion } = require('../services/claudeService');

const getWeatherSuggestion = async (req, res) => {
    try {
        const location = req.query.location;
        const weatherData = await getCurrentWeather(location);
        const suggestion = await generateSuggestion(weatherData);
        res.json({ weather: weatherData, suggestion });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get weather suggestion' });
    }
};

module.exports = { getWeatherSuggestion };
